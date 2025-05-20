import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
  try {
    const {message} = req.body;
    const receiverId = req.params.id;
    // this guy should be logged in
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants : { $all: [receiverId, senderId]}
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [receiverId, senderId]
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }

    // socket.io

    res.status(200).json(newMessage);
    
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    return res.status(500).json({error: "Internal Server error"});
  }
}

export const getMessage = async (req, res) => {
  try {
    const userToChatId = req.params.id;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId]}
    }).populate("messages")

    if (!conversation) res.status(200).json([]);

    res.status(200).json(conversation.messages);
    
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    return res.status(500).json({error: "Internal Server error"});
  }
}