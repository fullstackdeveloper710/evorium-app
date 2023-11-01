import { combineReducers } from "redux";
import userMain from "./userSlices/userMain";
import adminMainSlice from "./adminSlices/adminAuth";
import appSlice from "./common/appSlice";
// Import other reducers as needed

const rootReducer = combineReducers({
  app: appSlice,
  user: userMain,
  admin: adminMainSlice,
  // Add other reducers here
});

export default rootReducer;
