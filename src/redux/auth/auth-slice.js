import { createSlice } from '@reduxjs/toolkit';
import { checkUpdate, logout, signin, signup } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    avatarURL: '',
    verify: false,
    verificationToken: '',
    isLoading: false,
    error: null,
    isRegister: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { user, token, avatarURL, verificationToken } = payload;
        state.isLoading = false;
        state.user = user;
        state.avatarURL = avatarURL;
        state.verificationToken = verificationToken;
        state.token = token;
        state.isRegister = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(signin.pending, state => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        const { token, user, avatarURL } = payload;
        state.isLoading = false;
        state.verify = true;
        state.user = user;
        state.avatarURL = avatarURL;
        state.token = token;
      })
      .addCase(signin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.avatarURL = '';
        state.verify = false;
        state.isRegister = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(checkUpdate.pending, state => {
        state.isLoading = true;
      })
      .addCase(checkUpdate.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false;
        state.user = payload;
        state.verify = true;
      })
      //   .addCase(checkUpdate.fulfilled, (state, { payload }) => {
      //     const { user, token } = payload;
      //     state.isLoading = false;
      //     state.user = user;
      //     state.token = token;
      //     state.isRegister = true;
      //   })
      .addCase(checkUpdate.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
