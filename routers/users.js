import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import verify from "../verifyToken.js";

const userRouter = express.Router();

// update the users

userRouter.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
});

/// Delete the users

userRouter.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User is deleted");
  } else {
    res.status(403).json("you can only delete your Account");
  }
});

// Get a user by it's Identity

userRouter.get("/find/:id", verify, async (req, res) => {
  try {
    /// find the user by its Id
    const user = await User.findById(req.params.id);
    /// Store the user info in local Storage (user._doc)
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch {
    res.status(500).json("No user found");
  }
});

// Get all the users

userRouter.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch {
      res.status(500).json("No user found");
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
});

// Get the stats of users for dashboard

userRouter.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    return res.status(200).json(data);
  } catch {
    res.status(500).json("No user found");
  }
});

export default userRouter;
