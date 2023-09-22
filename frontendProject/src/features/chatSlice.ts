import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

type Chat = {
    participants: string, // участники чата
    message: [{
        sender: string,
        text: string,
        timestamp: number
    }],
};

type chatForState = {
    chat: Chat[],
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

  export const sendMessage = createAsyncThunk<Chat[], string | number>('chat/sendMessage', async ({timestamp, sender, text }) => {
    try {
        const response = await axios.post(`http://localhost:3333/message`, { timestamp, sender, text });
        return response.data;
    } catch (error) {
       return error.message
    }
  });

  export const chatSlise = createSlice({
    name: "chat",
    initialState: chatState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendMessage.pending, (state) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(sendMessage.rejected, (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
          })
          .addCase(sendMessage.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.error = null;
            state.chat = action.payload;
            state.loading = false;
          })
    }
  });


  export default chatSlise.reducer;


