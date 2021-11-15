import axios from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginFailure());
  }
};
