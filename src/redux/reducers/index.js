import { combineReducers } from "redux";
import userMain from "./userSlices/userMain";
import adminMainSlice from "./adminSlices/adminAuth";
import appSlice from "./common/appSlice";
import userProgramsSlice from "./userSlices/userPrograms";
// Import other reducers as needed

const rootReducer = combineReducers({
  app: appSlice,
  user: userMain,
  admin: adminMainSlice,
  userAuth:userMain,
  userPrograms:userProgramsSlice
  // Add other reducers here
});

export default rootReducer;
