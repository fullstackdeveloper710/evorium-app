import { createSlice } from "@reduxjs/toolkit";
import { getAdminCategories } from "../../thunk/admin/adCategories";

const initialState = {
  adminCategories: {
    data: [],
  },
};

const adminCategoriesSlice = createSlice({
  name: "adminCategoriesSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminCategories.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminCategories.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminCategories = payload;
        state.status = true;
      })
      .addCase(getAdminCategories.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminCategoriesSlice.actions;
export default adminCategoriesSlice.reducer;
