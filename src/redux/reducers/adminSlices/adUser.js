import { createSlice } from "@reduxjs/toolkit";
import { adminUserList } from "../../thunk/admin/adUser";

const initialState = {
  adminUsers: {
    usrList: [],
  },
};

const adminUserSlice = createSlice({
  name: "adminUserSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminUserList.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(adminUserList.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminUsers = payload;
        state.status = true;
      })
      .addCase(adminUserList.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminUserSlice.actions;
export default adminUserSlice.reducer;
