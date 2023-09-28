import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { WritableDraft } from "immer/dist/internal.js";
//import axios from "axios";

interface User {
  online: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  push(username: string): any;
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
  courseType: string
}

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
}

export const oneUser = createAsyncThunk("user/fetchUser", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3333/profile/${id}`);
    const user = await res.json();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
});

export const buyCourse = createAsyncThunk<
WritableDraft<User[]>,
User,
{ rejectValue: unknown; state: RootState}
>("user/buyCourse",
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
);

export const joinInChat = createAsyncThunk(
  "join/chat",
  async (userId, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3333/patch/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${getState().application.token}`,
        },
        body: JSON.stringify({
          online: true,
        }),
      }); 
      
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const exitInChat = createAsyncThunk(
  "exit/chat",
  async (userId, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3333/patch/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${getState().application.token}`,
        },
        body: JSON.stringify({
          online: false,
        }),
      }); 
      
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
  })

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
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(oneUser.fulfilled, (state, action) => {
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
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.error = null;
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(buyCourse.fulfilled, (state, action) => {
        // Обновите состояние пользователя после успешной покупки курса
        state.users = action.payload;
      })
      .addCase(joinInChat.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(joinInChat.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      .addCase(joinInChat.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.users =action.payload
      })
      .addCase(exitInChat.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(exitInChat.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      .addCase(exitInChat.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.users = action.payload
      })

  },
});

export default userSlice.reducer;
function getState() {
  throw new Error("Function not implemented.");
}

