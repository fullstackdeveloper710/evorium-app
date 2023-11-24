import { createSlice } from "@reduxjs/toolkit";
import { userMakePayment } from "../../thunk/user/usrPayment";

const initialState = {
  status: false,
};

const userPaymentSlice = createSlice({
  name: "userPaymentSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Make payment
    builder.addCase(userMakePayment.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(userMakePayment.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(userMakePayment.pending, (state) => {
      state.status = "pending";
    });
  },
});

// export const {} = userProfileSlice.actions;
export default userPaymentSlice.reducer;
