import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  userFacebookLogin,
  userGoogleLogin,
  userLogin,
  userSignUp,
  userVerifyNum,
} from "../../thunk/user/usrMain";
import { userRefreshToken } from "../../thunk/user/usrRefreshToken";

const initialState = {
  status: false,
  userAuthtoken: null,
  userData: { user_id: null },
};

const userRefreshTokenSlice = createSlice({
  name: "userRefreshTokenSlice",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {

    builder
    .addCase(userRefreshToken.pending, (state) => {
      // state.loading = true;
      state.error = null;
    })
    .addCase(userRefreshToken.fulfilled, (state, action) => {
      const { payload } = action;
      // state.loading = false;
      state.userAuthtoken = payload.access_token;
      state.userData = { ...payload };
    })
    .addCase(userRefreshToken.rejected, (state, action) => {
      // state.loading = false;
      // state.error = action.payload;
    });
},
});
    export default userRefreshTokenSlice.reducer;
