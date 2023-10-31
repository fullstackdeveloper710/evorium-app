import { combineReducers } from "redux";
import userMain from "./userSlices/userMain";
import adminMain from "./adminSlices/adminMain";
import appSlice from "./common/appSlice";
// Import other reducers as needed

const rootReducer = combineReducers({
  app: appSlice,
  user: userMain,
  admin: adminMain,
  // Add other reducers here
});

export default rootReducer;
