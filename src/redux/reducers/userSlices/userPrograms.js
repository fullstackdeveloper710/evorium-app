import { createSlice } from "@reduxjs/toolkit";
import { getUserProgramList } from "../../thunk/user/usrPrograms";

const initialState = {
  userPrograms: {
    data: [],
  },
};

const userProgramsSlice = createSlice({
  name: "userProgramsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProgramList.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getUserProgramList.fulfilled, (state, action) => {
        const { payload } = action;
        state.userPrograms = payload;
        state.status = true;
      })
      .addCase(getUserProgramList.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = userProgramsSlice.actions;
export default userProgramsSlice.reducer;
