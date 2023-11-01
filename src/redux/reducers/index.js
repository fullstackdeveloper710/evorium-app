import { combineReducers } from "redux";
import userMain from "./userSlices/userMain";
import adminMainSlice from "./adminSlices/adAuth";
import adminUserSlice from "./adminSlices/adUser";
import appSlice from "./common/appSlice";
// Import other reducers as needed

const rootReducer = combineReducers({
  app: appSlice,
  user: userMain,
  adAuth: adminMainSlice,
  adUser: adminUserSlice,
  // Add other reducers here
});

export default rootReducer;
