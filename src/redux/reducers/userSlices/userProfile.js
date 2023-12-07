import { createSlice } from "@reduxjs/toolkit";
import {
  getMyAccount,
  userEditProfile,
  userLanguageUpdate,
} from "../../thunk/user/usrProfile";
import { userDownloadProgram } from "../../thunk/user/usrMain";

const initialState = {
  status: false,
  userDetails: {},
};

const userProfileSlice = createSlice({
  name: "userProfileSlice",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {
  

    // MY ACCOUNT REDUCER----------------------------
    builder.addCase(getMyAccount.fulfilled, (state, action) => {
      state.userDetails = action.payload.user_details;
      state.status = "success";
    });
    builder.addCase(getMyAccount.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(getMyAccount.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(userDownloadProgram.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(userDownloadProgram.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(userDownloadProgram.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

// export const {} = userProfileSlice.actions;
export default userProfileSlice.reducer;
