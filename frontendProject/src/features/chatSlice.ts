import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UnknownAsyncThunkAction, UnknownAsyncThunkRejectedAction, UnknownAsyncThunkRejectedWithValueAction } from "@reduxjs/toolkit/dist/matchers";
import axios from "axios";
import { RootState } from "../app/store";
import { WritableDraft } from "immer/dist/internal.js";

type Chat = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id: any;
  participants: string; // участники чата
  message: [
    {
      sender: string;
      text: string;
      timestamp: number | unknown | null;
    }
  ]
  oneUser: string,
  [0]: string,
};

type chatForState = {
  chat: Chat[];
  error: null | unknown | string;
  token: string | null | number;
  loading: boolean;
};

const chatState: chatForState = {
  chat: [],
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
};

export const getMessage = createAsyncThunk<Chat[],  string>(
  "chat/getMessage",
  async () => {
    try {
        const response = await axios.get(`http://localhost:3333/chat/6513feefd2307f8f5529dd29`);
        return response.data;
    } catch (error) {
      return (error as UnknownAsyncThunkAction).message;
    }
});

export const sendMessage = createAsyncThunk<Chat[], string | number>(
    'chat/sendMessage',
    async ({ message, oneUser }, thunkAPI) => {
        try {
            const data = await axios.post(`http://localhost:3333/message/6513feefd2307f8f5529dd29`, { sender: oneUser[0]._id, text: message });
            return data.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

export const deleteMessage = createAsyncThunk<Chat[], string | number>(
    'chat/deleteOne',
    async (id, thunkAPI) => {
        try {
            const res = await axios.patch(`http://localhost:3333/message`, { _id: id });
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }

    });

export const chatSlise = createSlice({
    name: "chat",
    initialState: chatState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMessage.pending, (state) => {
            state.error = null;
            state.loading = true;
        })
            .addCase(getMessage.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loading = false;
            })
            .addCase(getMessage.fulfilled, (state, action) => {
                state.error = null;
                state.chat = action.payload;
                state.loading = false;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.error = null;
                state.chat.chat = action.payload;
                state.loading = false;
            })
            .addCase(sendMessage.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loading = true;
            })
            .addCase(deleteMessage.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(deleteMessage.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loading = false;
            })
    }

});

export default chatSlise.reducer;
