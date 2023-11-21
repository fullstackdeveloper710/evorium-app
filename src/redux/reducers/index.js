import { combineReducers } from "redux";
import userAuth from "./userSlices/userAuth";
import adminMainSlice from "./adminSlices/adAuth";
import adminUserSlice from "./adminSlices/adUser";
import adminSpeakerSlice from "./adminSlices/adSpeakers";
import appSlice from "./common/appSlice";
import adminCategoriesSlice from "./adminSlices/adCategories";
import adminTagsSlice from "./adminSlices/adTags";
import adminProgramsSlice from "./adminSlices/adPrograms";
import adminDashboardSlice from "./adminSlices/adDashboard";
import userProgramsSlice from "./userSlices/userPrograms";
import adminFaqsSlice from "./adminSlices/adFaq";
import adminCmsSlice from "./adminSlices/adCms";
import userProfileSlice from "./userSlices/userProfile";
import adminPaymentSlice from "./adminSlices/adPayment";

const rootReducer = combineReducers({
  //common slices
  app: appSlice,
  //Admin slices
  adAuth: adminMainSlice,
  adUser: adminUserSlice,
  adSpeaker: adminSpeakerSlice,
  adCategories: adminCategoriesSlice,
  adTags: adminTagsSlice,
  adPrograms: adminProgramsSlice,
  adDashboard: adminDashboardSlice,
  admin: adminMainSlice,
  adFaqs: adminFaqsSlice,
  adCms: adminCmsSlice,
  adPayment: adminPaymentSlice,
  //User slices
  userAuth: userAuth,
  userPrograms: userProgramsSlice,
  userProfile: userProfileSlice,
});

export default rootReducer;
