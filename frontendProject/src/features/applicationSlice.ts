import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type User = {
  _id: string;
  login: string;
  password: string;
  email: string;
  
};

type RegistrState = {
  users: User[];
  error: null | unknown | string;
  signingUp: boolean;
  signingIn: boolean;
  token: string | null | number;
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
  async ({ login, password, email }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password, email }),
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

export const authSignIn = createAsyncThunk<string | number, User>(
  "auth/signin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4444/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
  },
})

export default applicationSlice.reducer