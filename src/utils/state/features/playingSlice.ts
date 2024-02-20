import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  error: null,
  loading: false,
  playing: false
};


export const playSlice = createSlice({
  name: 'playing',
  initialState,
  reducers: {
    getPlayRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
      state.playing = false;
    },
    getPlay: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
      state.playing = true;
    },
    getPlayFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.playing = false;
    },
    setPlay: (state, action) => {
      state.playing = action.payload;
    }
  }
});

export const { getPlayRequest, getPlay, getPlayFailure, setPlay } = playSlice.actions;
export default playSlice.reducer;