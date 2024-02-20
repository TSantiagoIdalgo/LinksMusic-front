import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  uploading: false
};

export const urlSlice = createSlice({
  name: 'Url',
  initialState,
  reducers: {
    getUrlRequest: (state) => {
      state.loading = true;
      state.data = null;
    },
    getUrl: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    cleanUrl: (state) => {
      state.data = null;
      state.loading = false;
    },
    setUploading: (state) => {
      state.uploading = true;
    },
    cleanUploading: (state) => {
      state.uploading = false;
    }
  }
});

export const { getUrlRequest, getUrl, cleanUrl, setUploading, cleanUploading } = urlSlice.actions;
export default urlSlice.reducer;