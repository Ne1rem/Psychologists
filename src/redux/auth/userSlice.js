import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  password: null,
  id: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser, addFav, deleteFav } = userSlice.actions;

export default userSlice.reducer;
