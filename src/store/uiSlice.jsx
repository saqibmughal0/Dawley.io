import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  selectedCourse: null, // store the course to show in sidebar
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.isSidebarOpen = true;
      state.selectedCourse = action.payload; // set the course
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      state.selectedCourse = null;
    },
  },
});

export const { openSidebar, closeSidebar } = uiSlice.actions;
export default uiSlice.reducer;
