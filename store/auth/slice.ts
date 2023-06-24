import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from "@/interfaces";
import { RootState } from '../store';

const initialState: Auth = {
  status: 'not-authenticated',
  name: null,
  id: null,
  username: null,
  token: null,
  role: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      const { name, id, username, token, role } = action.payload
      state.status = 'authenticated',
      state.name = name;
      state.id = id;
      state.username = username;
      state.token = token;
      state.role = role
    },

    logout: (state, action: PayloadAction<Auth>) => {
      state.status = 'not-authenticated',
      state.name = null;
      state.id = null;
      state.username = null;
      state.token = null;
      state.role = null;
    },

    checking: (state, action: PayloadAction<Auth>) => {
      state.status = 'checking',
      state.name = null;
      state.id = null;
      state.username = null;
      state.token = null;
      state.role = null;
    }
  }
});

export const { login, logout, checking } = authSlice.actions; 

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;