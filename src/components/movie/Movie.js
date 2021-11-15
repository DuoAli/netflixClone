import "./movie.scss";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";
import Topbar from "../topbar/Topbar";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovies({ ...movies, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movies, dispatch);
  };

  return (
    <>
      <Topbar />
      <div className="newProduct">
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input type="text" name="desc" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Year</label>
            <input type="text" name="year" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input type="text" name="genre" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Limit</label>
            <input type="text" name="limit" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Is Series?</label>
            <select name="isSeries" id="isSeries" onChange={handleChange}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <button className="addProductButton" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
}
