import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../styles/user/auth.scss";
import { getAdminAboutUs } from "../../redux/thunk/admin/adCms";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from 'dompurify';

const AboutUs = () => {
  
  const dispatch = useDispatch();
  const {
    aboutUs: { data },
  } = useSelector((state) => state.adCms);

  const sanitizedHtml = DOMPurify.sanitize(data?.about_us);


  useEffect(() => {
    dispatch(getAdminAboutUs());
  }, []);

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

export default AboutUs;
