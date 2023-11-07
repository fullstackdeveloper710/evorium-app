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

  //pending
  adDelTag: "/admin/delete_tag/:id",
  adDelUser: "/admin/delete_user/:id",
  adDelProgram: "/admin/delete_program/:id",
  adDelCategory: "/admin/delete_program/:id",
  adDelSpeaker: "/admin/delete_speaker/:id",
  adAddProgram: "/admin/program",
  asGetProgram: "/admin/program/id",
  adUpdateProgram: "/admin/program/id",
  adSearchProgram: "/admin/search_program?query=learn&pageNo=1&pageSize=4",
  adSearchUser: "/admin/search_user?query=search_string&pageNo=1&pageSize=4",
  adFilterUser:
    "/admin/filtered_users?pageNo=1&pageSize=10&startDate=2023-10-2&endDate=2023-10-26",
};

export { userApi, adminApi };
