import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  getMyAccount,
  userFacebookLogin,
  userGoogleLogin,
  userLogin,
  userSignUp,
  userVerifyNum,
} from "../../thunk/user/usrMain";

const initialState = {
  status: false,
  userAuthtoken: null,
};

const userAuth = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {
    someAsyncAction: (state, action) => {
      // Update your state here with the action payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;

        // state.data = action.payload;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });

    // login reducer
    builder
      .addCase(userLogin.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { payload } = action;
        // state.loading = false;
        state.userAuthtoken = payload.access_token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });

    // FORGET PASSWORD REDUCER----------------------------
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      // state.userDetails = action.payload;
      state.status = "success";
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(forgotPassword.pending, (state) => {
      state.status = "pending";
    });

    // USER VERIFY REDUCER----------------------------
    builder.addCase(userVerifyNum.fulfilled, (state, action) => {
      // state.userDetails = action.payload;
      state.status = "success";
    });
    builder.addCase(userVerifyNum.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(userVerifyNum.pending, (state) => {
      state.status = "pending";
    });

    // GOOGLE login reducer
    builder
      .addCase(userGoogleLogin.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(userGoogleLogin.fulfilled, (state, action) => {
        const { payload } = action;
        // state.loading = false;
        state.userAuthtoken = payload.access_token;
      })
      .addCase(userGoogleLogin.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });

    // FACEBOOK login reducer
    builder
      .addCase(userFacebookLogin.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(userFacebookLogin.fulfilled, (state, action) => {
        const { payload } = action;
        // state.loading = false;
        state.userAuthtoken = payload.access_token;
      })
      .addCase(userFacebookLogin.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });
  },
});

// export const {} = userAuth.actions;
export default userAuth.reducer;
