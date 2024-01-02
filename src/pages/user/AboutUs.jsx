import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../styles/user/auth.scss";
import { getAdminAboutUs } from "../../redux/thunk/admin/adCms";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";

const AboutUs = () => {
  const dispatch = useDispatch();
  const {
    aboutUs: { data },
  } = useSelector((state) => state.adCms);

  const sanitizedHtml = DOMPurify.sanitize(data?.about_us);

  useEffect(() => {
    dispatch(getAdminAboutUs());
  }, []);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    // height: "100vh", 
    textAlign:"center "
   };

  const textStyle = {
    color: "white",
    fontSize: "14px", // Adjust the font size as needed
    textAlign: "center"
  };

  return (
    <section className="auth">
      <Container style={containerStyle}>
        <Row>
          <div className="text-block">
            {/* <div
              style={textStyle}
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }} */}
            <div  style={textStyle} className="text-block">
              <div
                style={{
                  color: "white",
                }}
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </div>
            {/* /> */}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
