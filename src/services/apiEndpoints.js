const userApi = {
  userSignup: "user/signup",
  usrLogin: "user/login",
  usrPrograms: "web/user/programs",
  usrVerify: "/user/verify_mobile_number",
  usrGoogleLogin: "user/login_google",
  usrFacebookLogin: "user/login_facebook",
  usrMyAccount: "user/my_account",
  usrEditProfile: "user/update",
  usrViewCount: "user/program_view_count",
  usrRecentProgram: "user/recent_program",
  usrMakePayment: "/user/payment_intilization",
  usrPaymentConfirm: "/user/payment_confirmation",
  usrMyPrograms : "/user/my_programs",
  usrCategories : "/categories?all=true",
  usrSpeakers : "/speakers?all=true",

  //pending
  usrRefreshToken: "/user/refresh_token",
  usrFilterPrograms: "user/filter",
};

const commonApi = {
  forgetPass: "/forget_password",
  adFaqList: "/faq_list",
  adGetSocialMedia: "/social_media_links",
  adGetAboutUs: "/about_us",
  adGetPrivacyPolicy: "/privacy_policy",
  adGetTermAndConditions: "/terms_and_conditions",
  adGetSupport: "/support",
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
  adAddFaq: "/admin/add_faq",
  adSearchFaq: "admin/search_faq",
  adSearchProgram: "/admin/search_program",
  adAddProgram: "/admin/program",
  adAddSocialMedia: "/admin/add_social_media_links",
  adAddAboutUs: "/admin/add_about_us",
  adAddPrivacyPolicy: "/admin/add_privacy_policy",
  adAddTermAndConditions: "/admin/add_terms_and_conditions",
  adAddSupport: "/admin/add_support",
  adDelProgram: "/admin/delete_program",
  adGetProgram: "/admin/program",
  adGetPaymentList: "/admin/payments",
  adSearchPayment: "/admin/search_payments",
  adFilterPayment: "admin/filter_payments",
  adGetPaymentDetail: "",
  adUpdateProgram: "/admin/program",
  adNotification : "/admin/notification",
  adDeleteNotification : "/admin/notification",
  adDeleteNotifications : "/admin/notifications"

  //pending
};

export { userApi, adminApi, commonApi };
