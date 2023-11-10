import { createSlice } from "@reduxjs/toolkit";
import { getUserProgramList } from "../../thunk/user/usrPrograms";

const initialState = {
  userFreePrograms: {
    data: [],
  },
  userPaidPrograms: {
    data: [],
  },
};

const userProgramsSlice = createSlice({
  name: "userProgramsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get user program list
    builder
      .addCase(getUserProgramList.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getUserProgramList.fulfilled, (state, action) => {
        const { meta:{arg:{values:{course_type}}}, payload } = action;
        if (course_type === "Free") {
          state.userFreePrograms = payload;
          console.log(userProgramsSlice,"payload")
        }else{
          state.userPaidPrograms = payload;
        }
        state.status = true;
      })
      .addCase(getUserProgramList.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export const {} = userProgramsSlice.actions;
export default userProgramsSlice.reducer;
