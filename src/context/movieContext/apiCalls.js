import axios from "axios";
import {
  createMovieFailure,
  createMovieRequest,
  deleteMoviesFailure,
  deleteMoviesRequest,
  deleteMoviesSuccess,
  getMoviesFailure,
  getMoviesRequest,
  getMoviesSuccess,
  updateMovieFailure,
  updateMovieRequest,
  updateMovieSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesRequest());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure(error));
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieRequest());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(res.data);
  } catch (error) {
    dispatch(createMovieFailure(error));
  }
};

export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieRequest());
  try {
    const res = await axios.put(`/movies/${movie}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(res.data);
    dispatch(updateMovieSuccess(res.data));
  } catch {
    dispatch(updateMovieFailure());
  }
};

export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMoviesRequest());
  try {
    const res = await axios.delete(`/movies/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMoviesSuccess(res.data));
  } catch (error) {
    dispatch(deleteMoviesFailure(error));
  }
};
