import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomGreeting = createAsyncThunk(
  'greeting/random',
  async () => {
    const res = await fetch('/random_greeting');
    const data = await res.json();
    console.log(data);
    return data.greeting;
  }
);

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingSlice.reducer;
