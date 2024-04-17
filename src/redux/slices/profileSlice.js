import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
import { useSelector } from "react-redux";

export const getProfileAsync = createAsyncThunk(
  "profile/getProfileAsync",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(getProfileRequest());
      const token = localStorage.getItem("token");
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      const { data } = await api.get("/profile");
      //console.log("data", data);
      dispatch(
        getProfileSuccess(
          data
        )
      );
    } catch (error) {
      return rejectWithValue("An error occured");
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  errorMessage: null,
  data: null
  
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileRequest: (state) => {
      state.loading = true
    },
    getProfileSuccess: (state, action) => {
      state.data = action.payload
     
    },
    getProfileFail: (state, action) => {},
  },
});

export const { getProfileRequest, getProfileSuccess, getProfileFail } =
  profileSlice.actions;
export default profileSlice;
