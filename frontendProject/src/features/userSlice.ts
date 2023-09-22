import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  _id?: string;
  username: string;
  password: string;
  email: string;
  role: string
  avatar: string
  progress: string
};

type userInfoState = {
  users: User[];
  error: null | unknown | string;
  token: string | null | number;
  loading: boolean;
};

const userState: userInfoState = {
  users: [],
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
};

export const oneUser = createAsyncThunk(
  "user/fetchUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3333/profile/${id}`);
      const user = await res.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const allUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3333/users");
      const users = await res.json();
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id)
      await fetch(`http://localhost:3333/profile/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(oneUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(oneUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      .addCase(oneUser.fulfilled, (state, action) => {
        console.log(action.payload)
        state.error = null;
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((item) => item._id !== action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(allUsers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.error = null;
        state.users = action.payload;
        state.loading = false;
      })
  },
});

export default userSlice.reducer;