import { createSlice } from "@reduxjs/toolkit";
import { getAdminUserList } from "../../thunk/admin/adUser";

const initialState = {
  adminUsers: {
    data: [],
  },
};

const adminUserSlice = createSlice({
  name: "adminUserSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminUserList.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminUserList.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminUsers = payload;
        state.status = true;
      })
      .addCase(getAdminUserList.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminUserSlice.actions;
export default adminUserSlice.reducer;
