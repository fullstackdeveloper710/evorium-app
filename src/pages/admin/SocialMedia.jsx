import React from "react";
import "../../styles/admin/socialMedia.scss";
import { CmsEditor } from "../../components/common";
import { useCmsEditor } from "../../utility/hooks";

const SocialMedia = () => {
  const { content, handleChange } = useCmsEditor({
    action: "action",
  });
  return (
    <div className="social_media_section">
      <h3>SocialMedia</h3>
      <CmsEditor content={content} handleChange={handleChange} />
    </div>
  );
};

export default SocialMedia;
