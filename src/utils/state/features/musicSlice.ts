import { createSlice } from '@reduxjs/toolkit';

interface IState {
  data: any[];
  error: any;
  loading: boolean;
  filtered: any[]
}

const initialState: IState = {
  data: [],
  error: null,
  loading: false,
  filtered: []
};

export const musicSlice = createSlice({
  name: 'Music',
  initialState,
  reducers: {
    getMusicRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    getMusic: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getFiltered: (state, action) => {
      state.filtered = action.payload;
      state.loading = false;
    }
  }
});

export const { getMusicRequest, getMusic, getMusicFailure, getFiltered } = musicSlice.actions;
export default musicSlice.reducer;