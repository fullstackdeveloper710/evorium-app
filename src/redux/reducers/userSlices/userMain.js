import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword, resetPassword, userLogin, userSignUp, userVerifyNum } from "../../thunk/user/usrMain";

const initialState = {
  status: false,
  userAuthtoken: null,

};

const userMain = createSlice({
  name: "userMain",
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
        console.log(payload, "payload");
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
  },
});

export const {} = userMain.actions;
export default userMain.reducer;
