import React, { useEffect } from "react";
import "../../styles/admin/aboutUs.scss";
import { CmsEditor } from "../../components/common";
import { useCmsEditor } from "../../utility/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdminAboutUs,
  getAdminAboutUs,
} from "../../redux/thunk/admin/adCms";

const AboutUs = () => {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const {
    aboutUs: { data },
  } = useSelector((state) => state.adCms);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Custom hooks
  const { content, handleChange } = useCmsEditor({
    values: {
      value: data?.about_us ?? "",
      id: data?._id,
    },
    action: addAdminAboutUs,
  });

  //Methods

  useEffect(() => {
    const data = {
      adminAuthtoken,
    };
    dispatch(getAdminAboutUs(data));
  }, []);
  return (
    <div className="about_us_section">
      <h3>About us</h3>
      <CmsEditor content={content} handleChange={handleChange} />
    </div>
  );
};

export default AboutUs;
