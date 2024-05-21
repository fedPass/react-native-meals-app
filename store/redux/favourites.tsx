import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice =  createSlice({
  name: 'favourites',
  initialState: {
    ids: []
  },
  // reducers are method to update/change state
  reducers: {
    // redux provides to reducers the latest state snapshot as argument
    // redux toolkit allows to mutate state (redux doesn't allow this)
    // we can take data ex the new id from the second param that is action, which has a payload prop that allow to send data
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  }
});

// we exports action to invoke these from different points in the app
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;
// export favouritesSlice.reducer to use it in store.tsx
export default favouritesSlice.reducer;