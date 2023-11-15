import React, { useEffect } from 'react'
import { CmsEditor } from '../../components/common';
import "../../styles/admin/privacy.scss";
import { useCmsEditor } from '../../utility/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addAdminPrivacy, getAdminPrivacy } from '../../redux/thunk/admin/adCms';

const PrivacyPolicy = () => {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const {
    privacyPolicy: { data },
  } = useSelector((state) => state.adCms);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Custom hooks
  const { content, handleChange } = useCmsEditor({
    action: addAdminPrivacy,
  });

  //Methods

  useEffect(() => {
    const data = {
      adminAuthtoken,
    };
    dispatch(getAdminPrivacy(data));
  }, []);
  return (
    <div className='privacy_section'>
    <h3>PrivacyPolicy</h3>
    <CmsEditor content={content} handleChange={handleChange} />
    </div>
  )
}

export default PrivacyPolicy