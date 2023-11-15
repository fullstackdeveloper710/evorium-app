import React from "react";
import { CmsEditor } from "../../components/common";
import "../../styles/admin/support.scss";
import { useCmsEditor } from "../../utility/hooks";

const Support = () => {
  const { content, handleChange } = useCmsEditor({
    action: "action",
  });
  return (
    <div className="support_section">
      <h3>Support</h3>
      <CmsEditor content={content} handleChange={handleChange} />
    </div>
  );
};

export default Support;
