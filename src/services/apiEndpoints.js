const userApi = {
  userSignup: "user/signup",
  usrLogin: "user/login",
  usrPrograms: "user/programs",
  usrForgetPass: "/user/forget_password",

  //pending
  usrVerify: "/user/verify_mobile_number",
  usrRefreshToken: "/user/refresh_token",
  // usrForgetPass: "/user/forget_password",
  // usrResetPass: "/user/reset_password/:token",
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

  //pending
  adDelProgram: "/admin/delete_program/:id",

  adAddProgram: "/admin/program",
  adGetProgram: "/admin/program/id",
  adUpdateProgram: "/admin/program/id",
  adSearchProgram: "/admin/search_program?query=learn&pageNo=1&pageSize=4",
};

export { userApi, adminApi };
