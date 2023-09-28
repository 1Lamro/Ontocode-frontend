import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Chat = {
    participants: string, // участники чата
    message: [{
        sender: string,
        text: string,
        timestamp: number | unknown | null
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

export const getMessage = createAsyncThunk<Chat[], string | number>('chat/getMessage', async () => {
    try {
        const response = await axios.get(`http://localhost:3333/chat/6513feefd2307f8f5529dd29`);
        return response.data;
    } catch (error) {
        return error.message
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
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }

    }

)

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
                state.chat = action.payload;
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


