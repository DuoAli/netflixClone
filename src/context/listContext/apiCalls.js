import axios from "axios";
import {
  createListFailure,
  createListRequest,
  createListSuccess,
  deleteListFailure,
  deleteListRequest,
  deleteListSuccess,
  getListsFailure,
  getListsRequest,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsRequest());
  try {
    const res = await axios.get("/lists/stat", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

export const createList = async (list, dispatch) => {
  dispatch(createListRequest());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure(error));
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListRequest());
  try {
    const res = await axios.delete(`/lists/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(res.data));
  } catch {
    dispatch(deleteListFailure());
  }
};
