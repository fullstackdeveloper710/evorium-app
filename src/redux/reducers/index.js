import { combineReducers } from "redux";
import userMain from "./userSlices/userMain";
import adminMainSlice from "./adminSlices/adAuth";
import adminUserSlice from "./adminSlices/adUser";
import adminSpeakerSlice from "./adminSlices/adSpeakers";
import appSlice from "./common/appSlice";
import adminCategoriesSlice from "./adminSlices/adCategories";
import adminTagsSlice from "./adminSlices/adTags";
import adminProgramsSlice from "./adminSlices/adPrograms";
import adminDashboardSlice from "./adminSlices/adDashboard";
import userProgramsSlice from "./userSlices/userPrograms";
// Import other reducers as needed

const rootReducer = combineReducers({
  app: appSlice,
  user: userMain,
  adAuth: adminMainSlice,
  adUser: adminUserSlice,
  adSpeaker: adminSpeakerSlice,
  adCategories: adminCategoriesSlice,
  adTags: adminTagsSlice,
  adPrograms: adminProgramsSlice,
  adDashboard: adminDashboardSlice,
  admin: adminMainSlice,
  userAuth: userMain,
  userPrograms: userProgramsSlice,
  // Add other reducers here
});

export default rootReducer;
