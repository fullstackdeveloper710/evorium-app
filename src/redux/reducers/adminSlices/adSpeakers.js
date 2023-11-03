import { createSlice } from "@reduxjs/toolkit";
import {
  addAdminSpeaker,
  getAdminSpeakers,
} from "../../thunk/admin/adSpeakers";

const initialState = {
  adminSpeakers: {
    data: [],
  },
};

const adminSpeakerSlice = createSlice({
  name: "adminSpeakerSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get admin speaker list
    builder
      .addCase(getAdminSpeakers.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminSpeakers.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminSpeakers = payload;
        state.status = true;
      })
      .addCase(getAdminSpeakers.rejected, (state, action) => {
        state.status = false;
      });

    //add admin speaker
    builder
      .addCase(addAdminSpeaker.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(addAdminSpeaker.fulfilled, (state, action) => {
        state.status = true;
      })
      .addCase(addAdminSpeaker.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = adminSpeakerSlice.actions;
export default adminSpeakerSlice.reducer;
