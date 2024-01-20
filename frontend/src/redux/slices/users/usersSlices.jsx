import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

// Login
export const loginAction = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${baseURL}/users/login`,
        payload,
        config
      );
      return data;
    }  catch (error) {
     if(!error?.response) {
      throw error
     }
     return rejectWithValue(error?.response?.data)
    }
  }
);

// Register
export const registerAction = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${baseURL}/users/register`,
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw new Error("Failed to perform registration. Please try again.");
      }
      return rejectWithValue(error?.response.data);
    }
  }
);
//slices
const userSlice = createSlice({
  name: "user",
  initialState: {
    auth:"false",users:["ben","joe"]
  },
  extraReducers: (builder) => {
    // Register Cases
    builder.addCase(registerAction.pending, (state,action) => {
      state.userLoading = true;
      state.clientError = undefined;
      state.serverError = undefined;
    })
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.userLoading = false;
      state.userAuth = action?.payload;
      state.clientError = undefined;
      state.serverError = undefined;
    })
    builder.addCase(registerAction.rejected, (state, action) => {
      state.userLoading = false;
      state.clientError = action?.payload?.message;
      state.serverError = action?.error?.message;
    })
    builder.addCase(loginAction.pending, (state,action) => {
        state.userLoading = true;
        state.clientError = undefined;
        state.serverError = undefined;
      })
      builder.addCase(loginAction.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userAuth = action?.payload;
        state.clientError = undefined;
        state.serverError = undefined;
      })
      builder.addCase(loginAction.rejected, (state, action) => {
        state.userLoading = false;
        state.clientError = action?.payload?.message;
        state.serverError = action?.error?.message;
      })
  },
});

export default userSlice.reducer;
