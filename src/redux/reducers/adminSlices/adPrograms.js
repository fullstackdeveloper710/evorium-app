import { createSlice } from "@reduxjs/toolkit";
import { getAdminTags } from "../../thunk/admin/adTags";
import { getAdminProgramList } from "../../thunk/admin/adPrograms";

const initialState = {
  adminPrograms: {
    data: [],
  },
};

const adminProgramsSlice = createSlice({
  name: "adminProgramsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProgramList.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminProgramList.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminPrograms = payload;
        state.status = true;
      })
      .addCase(getAdminProgramList.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminProgramsSlice.actions;
export default adminProgramsSlice.reducer;
