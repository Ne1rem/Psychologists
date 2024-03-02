import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  id: null,
  token: null,
  isLoggedIn: false,
  favourites: [],
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
    addFav(state, action) {
      state.favourites.push(action.payload);
    },
    deleteFav(state, action) {
      state.favourites = state.favourites.filter(
        favourite => favourite.name !== action.payload.name
      );
    },
  },
});

export const { setUser, removeUser, addFav, deleteFav } = userSlice.actions;

export default userSlice.reducer;
