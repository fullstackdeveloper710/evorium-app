import React from "react";
import { useCmsEditor } from "../../utility/hooks";
import { CmsEditor } from "../../components/common";
import "../../styles/admin/termsAndCond.scss";

const TermAndConditions = () => {
  const { content, handleChange } = useCmsEditor({
    action: "action",
  });
  return (
    <div className="term_condition_section">
      <h3>TermAndConditions</h3>
      <CmsEditor content={content} handleChange={handleChange} />
    </div>
  );
};

export default TermAndConditions;
