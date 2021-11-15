import express from "express";
import Movie from "../models/Movie.js";
import verify from "../verifyToken.js";

const movieRouter = express.Router();

// Create a movie

movieRouter.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(200).send(savedMovie);
    } catch {
      res.status(500).send("One or more information is missing");
    }
  } else {
    res.status(403).send("You are not allowed to publish content");
  }
});

// Update movies

movieRouter.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateMovie);
    } catch {
      res.status(500).json("one or more information is missing");
    }
  } else {
    res
      .status(403)
      .json("You are not allowed to make changes in any of the products");
  }
});

movieRouter.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie is deleted");
    } catch {
      res.status(500).json("One or more information is missing");
    }
  } else {
    res.status(403).json("You are not allowed to delete the files");
  }
});

// Get

movieRouter.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch {
    res.status(500).send("Noting found");
  }
});

/// movies or series
movieRouter.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch {
    res.status(500).json("you are not allowed");
  }
});

movieRouter.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch {
      res.status(500).json("The file does not exist");
    }
  } else {
    res.status(403).json("You are not allwod to visit");
  }
});

export default movieRouter;
