import React from 'react'
import { CmsEditor } from '../../components/common';
import "../../styles/admin/privacy.scss";
import { useCmsEditor } from '../../utility/hooks';

const PrivacyPolicy = () => {
  const { content, handleChange } = useCmsEditor({
    action: "action",
  });
  return (
    <div className='privacy_section'>
    <h3>PrivacyPolicy</h3>
    <CmsEditor content={content} handleChange={handleChange} />
    </div>
  )
}

export default PrivacyPolicy