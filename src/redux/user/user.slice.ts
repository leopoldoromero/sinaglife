import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  login,
  logOut,
  refreshJwt,
  removeUser,
  updateUser,
} from './user.thunks';
import { User } from '@modules/user/domain/User';

export interface UserState {
  user?: User;
  isLoading: boolean;
}

export const initialState: UserState = {
  user: undefined,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutSuccess(state) {
      state.user = undefined;
    },
  },
  extraReducers(builder) {
    builder.addCase(refreshJwt.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, _) => {
      state.isLoading = false;
    });
    builder.addCase(logOut.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = undefined;
    });
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
