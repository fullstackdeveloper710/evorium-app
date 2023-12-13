import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../styles/user/auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminSupport } from "../../redux/thunk/admin/adCms";
import DOMPurify from 'dompurify';

const ContactUs = () => {
  const dispatch = useDispatch();
  
  const {
    support: { data },
  } = useSelector((state) => state.adCms);

  const sanitizedHtml = DOMPurify.sanitize(data?.support);
  useEffect(() => {
    dispatch(getAdminSupport());
  },[])
  return (
    <section className="auth">
      <Container>
        <Row>
        <div className="text-block">
              <div
                style={{
                  color: "white",
                }}
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </div>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
