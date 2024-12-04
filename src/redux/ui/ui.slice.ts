import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  isVisibleSearchInput: boolean;
  isSideDrawerOpen: boolean;
  isMobile: boolean;
}

const initialState: UIState = {
  isVisibleSearchInput: false,
  isSideDrawerOpen: false,
  isMobile: false, // TODO: check this harcoded value latter
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideDrawer(state) {
      state.isSideDrawerOpen = !state.isSideDrawerOpen;
    },
    toggleSearchInput(state) {
      state.isVisibleSearchInput = !state.isVisibleSearchInput;
    },
  },
});

export const { toggleSideDrawer, toggleSearchInput } = uiSlice.actions;
export default uiSlice.reducer;
