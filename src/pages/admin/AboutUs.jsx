import React from "react";
import "../../styles/admin/aboutUs.scss";
import { CmsEditor } from "../../components/common";
import { useCmsEditor } from "../../utility/hooks";

const AboutUs = () => {
  const { content, handleChange } = useCmsEditor({
    action:"action"
  });
  return (
    <div className="about_us_section">
      <h3>About us</h3>
      <CmsEditor content={content} handleChange={handleChange} />
    </div>
  );
};

export default AboutUs;
