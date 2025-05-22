import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const {fullName, username, password, confirmedPassword, gender} = req.body;


    if (password !== confirmedPassword) return res.status(400).json({message: "Passwords do not match!"});

    const user = await User.findOne({username});

    if (user) return res.status(400).json({error: "username already taken"});

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // random pic generator
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfilePic : femaleProfilePic
    })

    if (newUser) {
      generateTokenAndSetCookie(newUser, res);

      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic
      });
    } else {
      console.error("Error creating a new user");
    }

  } catch (error) {
    console.log("Server error:", error.message);
    res.send(500).json({error: "Internal server error"});
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({error: "Invalid credentials"})
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username,
      profilePic: user.profilePic
    })
    
  } catch (error) {
    console.log("Login controller error:", error.message);
    res.send(500).json({error: "Internal server error"});
  }
}

export const logout = (req, res) => {
  try {

    res.cookie("jwt", "", {maxAge:0});
    return res.status(200).json({message: "Logout successfully"})

  } catch (error) {
    console.log("Login controller error:", error.message);
    res.send(500).json({error: "Internal server error"});
  }
}