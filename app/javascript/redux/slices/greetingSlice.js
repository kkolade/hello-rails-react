import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomGreeting = createAsyncThunk(
  'greeting/randomGreeting',
  async () => {
    const res = await fetch('/random_greeting');
    const data = await res.json();
    return data.greeting;
  }
);

const initialState = {
  message: '',
};

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingSlice.reducer;
