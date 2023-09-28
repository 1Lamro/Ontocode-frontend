import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Task = {
  _id: string
  title: string;
  question: string;
  solution: string;
};

type infoState = {
  tasks: Task[];
  error: null | unknown | string;
  token: string | null | number;
  loading: boolean;
};

const initialState: infoState = {
  tasks: [],
  error: null,
  loading: false,
  token: localStorage.getItem("token") as string | null,
};

export const getTask = createAsyncThunk(
  "task/getTask",
  async (_id, thunkAPI) => {
      try {
        const res = await fetch(`http://localhost:3333/tasks/${_id}`);
        const tasks = await res.json();
        console.log(_id);
        
        return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getTask.pending, (state) => {
        state.error = null;
        state.loading = true
      })
      .addCase(getTask.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false
      })
      .addCase(getTask.fulfilled, (state, action) => {   
        state.error = null;
        state.loading = false
        state.tasks = action.payload
      })
  }
});

export default taskSlice.reducer