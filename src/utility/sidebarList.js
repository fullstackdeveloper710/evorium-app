import { ROUTES } from "../navigation/constants";
import {
  about,
  categories,
  conditions,
  dashboard,
  faqs,
  logout,
  payment,
  privacy,
  programs,
  sociallinks,
  speakers,
  support,
  user,
  tags,
} from "../assets/icons/admin";

const {
  adLogin,
  adDashboard,
  adUserDetail,
  adUserList,
  adProgramList,
  adAddprogram,
  adCategories,
  adTags,
  adPayment,
  adSpeaker,
  adFaq,
  adFaqList,
} = ROUTES;

//admin sidebar tab list
const adminSidebarList = [
  {
    id: 1,
    path: adDashboard,
    title: "Dashboard",
    icon: dashboard,
    type: "link",
    activeFor: [adDashboard],
  },
  {
    id: 2,
    path: adUserList,
    title: "Users",
    icon: user,
    type: "link",
    activeFor: [adUserList],
  },
  {
    id: 3,
    path: adSpeaker,
    title: "Speakers",
    icon: speakers,
    type: "link",
    activeFor: [adSpeaker],
  },
  {
    id: 4,
    path: adCategories,
    title: "Categories",
    icon: categories,
    type: "link",
    activeFor: [adCategories],
  },
  {
    id: 5,
    path: adTags,
    title: "Tags",
    icon: tags,
    type: "link",
    activeFor: [adTags],
  },
  {
    id: 6,
    path: adProgramList,
    title: "Programs",
    icon: programs,
    type: "link",
    activeFor: [adProgramList, adAddprogram],
  },
  {
    id: 7,
    path: adPayment,
    title: "Payments",
    icon: payment,
    type: "link",
    activeFor: [adPayment],
  },
  {
    id: 8,
    path: adFaqList,
    title: "FAQ’s",
    icon: faqs,
    type: "link",
    activeFor: [adFaqList],
  },
  {
    id: 9,
    path: "#",
    title: "Social Media Link’s",
    icon: sociallinks,
    type: "link",
    activeFor: [],
  },
  {
    id: 10,
    path: "#",
    title: "About Us",
    icon: about,
    type: "link",
    activeFor: [],
  },
  {
    id: 11,
    path: "#",
    title: "Privacy Policy",
    icon: privacy,
    type: "link",
    activeFor: [],
  },
  {
    id: 12,
    path: "#",
    title: "Terms & Conditions",
    icon: conditions,
    type: "link",
    activeFor: [],
  },
  {
    id: 13,
    path: "#",
    title: "Support",
    icon: support,
    type: "link",
    activeFor: [],
  },
  {
    id: 14,
    path: "#",
    title: "Logout",
    icon: logout,
    type: "button",
    activeFor: [],
  },
];

export { adminSidebarList };
