import User from "../models/user.model.js";

export const getUserForSidebar = async(req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({_id: {$ne: loggedInUser}}).select("-password")  // find all users other than loggedIn user
    
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUser controller", error.message);
    return res.status(500).json({error: "Internal Server error"});
  }
}