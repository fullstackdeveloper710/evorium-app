import { createSlice } from "@reduxjs/toolkit";
import { userEditProfile } from "../../thunk/user/usrProfile";
import { getMyAccount } from "../../thunk/user/usrMain";
import { userRecentProgram, userViewCount } from "../../thunk/user/usrCount";

const initialState = {
  status: false,
  userDetails:{}
};

const userViewCountSlice = createSlice({
  name: "userViewCountSlice",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {
    // EDIT view  count REDUCER----------------------------
    builder.addCase(userViewCount.fulfilled, (state, action) => {
      // state.userDetails = action.payload;
      state.status = "success";
    });
    builder.addCase(userViewCount.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(userViewCount.pending, (state) => {
      state.status = "pending";
    });
// // EDIT RECENT PROGRAMS REDUCER----------------------------
builder.addCase(userRecentProgram.fulfilled, (state, action) => {
    // state.userDetails = action.payload;
    state.status = "success";
  });
  builder.addCase(userRecentProgram.rejected, (state, action) => {
    state.error = action.payload;
    state.status = "failed";
  });
  builder.addCase(userRecentProgram.pending, (state) => {
    state.status = "pending";
  });

  },
});

export const {} = userViewCountSlice.actions;
export default userViewCountSlice.reducer;
