/// Get movies from Backend
export const getMoviesRequest = () => ({
  type: "GET_MOVIES_REQUEST",
});

export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

/// create movies from frontend with backend api call

export const createMovieRequest = () => ({
  type: "CREATE_MOVIE_REQUEST",
});

export const createMovieSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});

export const createMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

// update current movies stats

export const updateMovieRequest = () => ({
  type: "UPDATE_MOVIE_REQUEST",
});

export const updateMovieSuccess = (movie) => ({
  type: "UPDATE_MOVIE_SUCCESS",
  payload: movie,
});

export const updateMovieFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

/// delete movies from frontend

export const deleteMoviesRequest = () => ({
  type: "DELETE_MOVIES_REQUEST",
});

/// we have used Id as the router in the backend is set for ID
export const deleteMoviesSuccess = (id) => ({
  type: "DELETE_MOVIES_SUCCESS",
  payload: id,
});

export const deleteMoviesFailure = () => ({
  type: "DELETE_MOVIES_FAILURE",
});
