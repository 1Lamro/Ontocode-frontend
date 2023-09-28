import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UnknownAsyncThunkAction } from '@reduxjs/toolkit/dist/matchers';
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
  signingUp: boolean;
  signingIn: boolean;
  token: string | null | number | unknown;
  loading: boolean
};

const initialState: RegistrState = {
  users: [],
  error: null,
  signingUp: false,
  signingIn: false,
  loading: false,
  token: localStorage.getItem("token") as string | null
};


export const authSignUp = createAsyncThunk<string | number, User>(
  "auth/signup",
  async ({ username, password, email }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3333/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email}),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }

      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSignIn = createAsyncThunk<
{
  token:string
}, 
User,
{
  rejectValue: { error: string };
}
>(
  "auth/signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue({ error: token.error });
      }
      localStorage.setItem("token", token.token);
      return { token: token.token };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as UnknownAsyncThunkAction).toString() });
    }
  }
);

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(authSignUp.pending, (state) => {
          state.signingUp = true;
          state.error = null;
          state.loading = true
        })
        .addCase(authSignUp.rejected, (state, action) => {
          state.signingUp = false;
          state.error = action.payload;
          state.loading = false
        })
        .addCase(authSignUp.fulfilled, (state) => {   
          state.signingUp = false;
          state.error = null;
          state.loading = false
        })
        .addCase(authSignIn.pending, (state) => {
          state.signingIn = true;
          state.error = null;
        })
        .addCase(authSignIn.rejected, (state, action) => {
          state.signingIn = false;
          state.error = action.payload;
        })
        .addCase(authSignIn.fulfilled, (state, action) => {
          state.signingIn = false;
          state.error = action.payload 
          state.token = action.payload.token 
        });
  },
})

export default applicationSlice.reducer