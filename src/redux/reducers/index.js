import { combineReducers } from "redux";
import userMain from "./userSlices/userMain";
import adminMainSlice from "./adminSlices/adAuth";
import adminUserSlice from "./adminSlices/adUser";
import adminSpeakerSlice from "./adminSlices/adSpeakers";
import appSlice from "./common/appSlice";
import adminCategoriesSlice from "./adminSlices/adCategories";
import adminTagsSlice from "./adminSlices/adTags";
import adminProgramsSlice from "./adminSlices/adPrograms";
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
  // Add other reducers here
});

export default rootReducer;
