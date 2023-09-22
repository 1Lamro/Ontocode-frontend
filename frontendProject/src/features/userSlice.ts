import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
//import axios from "axios";

interface User {
  _id?: string;
  avatar: string;
  username: string;
  password: string;
  email: string;
  role: string;
  userId: string;
  progress: string;
  basicCourse: boolean;
  plusCourse: boolean;
  proCourse: boolean;
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


// export const addCarToUser = createAsyncThunk(
//   "user/addCarToUser",
//   async ({ userId, carId }, { rejectWithValue }) => {
//     try {
//       const response = await axios.patch(`/user/${userId}`, {
//         carId: carId,
//       });
//       return response.data; // Если сервер возвращает какие-то данные после успешной операции
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const oneUser = createAsyncThunk("user/fetchUser", async (id) => {
  const res = await fetch(`http://localhost:3333/profile/${id}`);
  const user = await res.json();
  return user;
});

export const buyCourse = createAsyncThunk(
  "user/buyCourse",
  async ({ userId, courseType }, { rejectWithValue, getState }) => {
    try {
      const res = await fetch(`http://localhost:3333/course/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().application.token}`,
        },
        body: JSON.stringify({
          [courseType]: true,
        }),
      });
      return res.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
)

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
      .addCase(buyCourse.fulfilled, (state, action) => {
        // Обновите состояние пользователя после успешной покупки курса
        state.users = action.payload;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      )
  },
});

export default userSlice.reducer;
