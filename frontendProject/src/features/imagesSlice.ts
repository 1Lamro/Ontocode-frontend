import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type User = {
  _id: string;
  username: string;
  password: string;
  email: string;
  role: string;
  avatar: string;
  progress: string;
  image: string;
};

type RegistrState = {
  users: User[];
  error: null | unknown | string;
  token: string | null | number;
  loading: boolean;
};

const initialState: RegistrState = {
  users: [],
  error: null,
  loading: false,
  token: localStorage.getItem("token") as string | null,
};

export const updateUserData = createAsyncThunk<User[]>(
  "user/updateUserData",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async ({ id, name, password, image, token }: any) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(`http://localhost:3333/patch/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          avatar: image,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      const data = await response.json();
      return data;
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
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// export default imageSlice.reducer;
