import { createSlice } from "@reduxjs/toolkit";
import { deleteAdminUser, getAdminUserList } from "../../thunk/admin/adUser";

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
    //get admin user list
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

    //Delete admin user
    builder
      .addCase(deleteAdminUser.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(deleteAdminUser.fulfilled, (state, action) => {
        const { meta, payload } = action;
        console.log(meta, "meta here");
        console.log(meta.arg.values.id, "meta");
        console.log(payload, "payload here ");
        state.adminUsers = {
          ...state.adminUsers,
          data: state.adminUsers.data.filter(
            (item) => item._id !== meta.arg.values.id
          ),
        };
        state.status = true;
      })
      .addCase(deleteAdminUser.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminUserSlice.actions;
export default adminUserSlice.reducer;
