import { createSlice } from "@reduxjs/toolkit";
import { getAdminNotifications } from "../../thunk/admin/adNotification";

const initialState = {
  adminNotification: {
    data: [],
  },
};

const adminNotificationSlice = createSlice({
  name: "adminNotificationSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get admin notification
    builder
      .addCase(getAdminNotifications.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminNotifications.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminNotification = payload;
        state.status = true;
      })
      .addCase(getAdminNotifications.rejected, (state, action) => {
        state.status = false;
      });
  },
});

// export const {} = adminDashboardSlice.actions;
export default adminNotificationSlice.reducer;
