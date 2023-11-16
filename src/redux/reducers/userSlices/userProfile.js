import { createSlice } from "@reduxjs/toolkit";
import { userEditProfile } from "../../thunk/user/usrProfile";

const initialState = {
  status: false,
};

const userProfile = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {
    // EDIT PROFILE REDUCER----------------------------
    builder.addCase(userEditProfile.fulfilled, (state, action) => {
      // state.userDetails = action.payload;
      state.status = "success";
    });
    builder.addCase(userEditProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(userEditProfile.pending, (state) => {
      state.status = "pending";
    });
  },
});

export const {} = userProfile.actions;
export default userProfile.reducer;
