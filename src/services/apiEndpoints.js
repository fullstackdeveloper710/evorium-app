const userApi = {
  userSignup: "user/signup",
  usrLogin: "user/login",
  usrPrograms: "user/programs",
  usrVerify: "/user/verify_mobile_number",
  usrGoogleLogin: "user/login_google",
  usrFacebookLogin: "user/login_facebook",
  usrMyAccount: "user/my_account",
  usrEditProfile: "user/update",
  usrViewCount: "user/program_view_count",
  usrRecentProgram:"user/recent_program",
  

  //pending
  usrRefreshToken: "/user/refresh_token",
  // usrForgetPass: "/user/forget_password",
  // usrResetPass: "/user/reset_password/:token",
};

const commonApi = {
  forgetPass: "/forget_password",
};

const adminApi = {
  adLogin: "/admin/login",
  adUserList: "/admin/users",
  adUserDetail: "/admin/userdetail",
  adSpeakersList: "/admin/speakers",
  adCategories: "/admin/categories",
  adTagsList: "/admin/tags",
  adPrograms: "/admin/programs",
  adDelUser: "/admin/delete_user",
  adAddSpeaker: "/admin/speakers",
  adAddCategory: "/admin/categories",
  adAddTags: "/admin/tags",
  adDashboard: "/admin/dashboard_stats",
  adSearchUser: "/admin/search_user",
  adFilterUser: "/admin/filtered_users",
  adDelSpeaker: "/admin/delete_speaker",
  adDelCategory: "/admin/delete_category",
  adDelTag: "/admin/delete_tag",
  adDelFaq: "/admin/delete_faq",
  adFaqList: "/admin/faq_list",
  adAddFaq: "/admin/add_faq",
  adSearchFaq: "admin/search_faq",
  adSearchProgram: "/admin/search_program",
  adAddProgram: "/admin/program",
  adAddSocialMedia: "/admin/add_social_media_links",
  adAddAboutUs: "/admin/add_about_us",
  adAddPrivacyPolicy: "/admin/add_privacy_policy",
  adAddTermAndConditions: "/admin/add_terms_and_conditions",
  adAddSupport: "/admin/add_support",
  adGetSocialMedia: "/admin/get_social_media_links",
  adGetAboutUs: "/admin/get_about_us",
  adGetPrivacyPolicy: "/admin/get_privacy_policy",
  adGetTermAndConditions: "/admin/get_terms_and_conditions",
  adGetSupport: "/admin/get_support",
  adSearchFaq: "/admin/search_faq",

  //pending
  adDelProgram: "/admin/delete_program/:id",
  adGetProgram: "/admin/program/id",
  adUpdateProgram: "/admin/program/id",
};

export { userApi, adminApi,commonApi };
