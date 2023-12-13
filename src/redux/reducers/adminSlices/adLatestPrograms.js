import { createSlice } from "@reduxjs/toolkit";
import { getAdminLatestPrograms } from "../../thunk/admin/adLatestPrograms";


const initialState = {
  adminLatestPrograms: {
    data: [],
    count: 0,
  },
};

const adminLatestProgramsSlice = createSlice({
  name: "adminLatestProgramsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get admin program list
    builder
      .addCase(getAdminLatestPrograms.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getAdminLatestPrograms.fulfilled, (state, action) => {
        const { payload } = action;
        state.adminLatestPrograms = payload;
        state.status = true;
      })
      .addCase(getAdminLatestPrograms.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message; // Assuming your API returns an error message
      });
      

    },
});

export default adminLatestProgramsSlice.reducer;