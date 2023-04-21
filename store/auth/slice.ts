import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from "@/interfaces";
import { RootState } from '../store';

const initialState: Auth = {
  status: 'not-authenticated',
  name: null,
  id: null,
  username: null,
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      const { status, name, id, username, token } = action.payload
      state.status = 'authenticated',
      state.name = name;
      state.id = id;
      state.username = username;
      state.token = token;
    },

    logout: (state, action: PayloadAction<Auth>) => {
      state.status = 'not-authenticated',
      state.name = null;
      state.id = null;
      state.username = null;
      state.token = null;
    },

    checking: (state, action: PayloadAction<Auth>) => {
      state.status = 'checking',
      state.name = null;
      state.id = null;
      state.username = null;
      state.token = null;
    }
  }
});

export const { login, logout, checking } = authSlice.actions; 

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;