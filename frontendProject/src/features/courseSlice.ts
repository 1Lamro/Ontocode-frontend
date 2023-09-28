import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 
type Url = {
  ref: string
}

type Video = {
  ref: string
}

type Materials = {
  url: Url[]
  video: Video[]
}

export type Courses = {
  _id: string;
  title: string;
  text: string;
  materials: Materials;
  img: string;
};

type CourseState = {
  course: Courses[];
  error: null | unknown | string
  loading: boolean
};

const initialState: CourseState = {
  course: [],
  error: null,
  loading: false
};

export const fetchCourses = createAsyncThunk(
  "course/fetchCourse",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3333/course");
      const course = await res.json();

      return course;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const addComment = createAsyncThunk<
//   void,
//   Comment,
//   { rejectValue: unknown; state: RootState }
// >("task/addComment", async({ comment }, thunkAPI) => {
//     try{
//         const res = await fetch('http://localhost:3333/comment',{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                  text: comment,
//                 //  user: userId,
//                 //  course: courseId   
//             })
//         })
//         return await res.json()
//     }catch (err) {
//         return thunkAPI.rejectWithValue(err);
//     }
// });


// export const deletedComment = createAsyncThunk<
// string,
// string,
// { rejectValue: unknown; state: RootState }
// >("comments/deletedComments", async(id, thunkAPI) => {
//     try{
//         const res = await fetch(`http://localhost:3333/comment/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//         if (res.ok) {
//             return id
//         }
//     }catch (error) {
//         return thunkAPI.rejectWithValue(error);
//     }
// })

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.course = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.error = (action.payload as Error).message;
        state.loading = false;
      })
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      });
  },
});

export default courseSlice.reducer;