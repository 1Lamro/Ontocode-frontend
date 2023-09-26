import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  _id: string;
  username: string;
  password: string;
  email: string;
  role: string
  avatar: string
  progress: string
};

type RegistrState = {
  users: User[];
  error: null | unknown | string;
  token: string | null | number;
  loading: boolean
};


const initialState: RegistrState = {
  users: [],
  error: null,
  loading: false,
  token: localStorage.getItem("token") as string | null
};


export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async ({ id, name, password, image, token }: { id: string; username?: string; avatar?: string; token: string; email: string; password: string }) => {
    try {
      
      const response = await fetch(`http://localhost:3333/patch/${id}`,  {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            username: name,
            avatar: image, 
            password: password
          },
        )
      });
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.users = action.payload;
      })
  },
});

// export default imageSlice.reducer;