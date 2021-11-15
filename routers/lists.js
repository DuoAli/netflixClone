import express from "express";
import List from "../models/List.js";
import verify from "../verifyToken.js";

const listRouter = express.Router();

listRouter.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    const updatedList = await newList.save();
    res.status(200).json(updatedList);
  } else {
    res.status(500).json("You are not authorized to create a list");
  }
});

listRouter.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    await List.findByIdAndDelete(req.params.id);
    res.status(200).json("The list have been deleted successfully");
  } else {
    res.status(403).json("The list dose not exist");
  }
});

listRouter.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 5 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 5 } },
          { $match: { type: typeQuery } },
        ]);
      }
    }
    res.status(200).json(list);
  } catch {
    res.status(500).json("Auth error");
  }
});

/// Get the all the lists for Admin Dashbord

listRouter.get("/stat", verify, async (req, res) => {
  const lists = await List.find({});
  try {
    res.status(200).json(lists);
  } catch {
    res.status(500).json("Something is missing");
  }
});

export default listRouter;
