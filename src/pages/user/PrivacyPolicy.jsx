import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../styles/user/auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminPrivacy } from "../../redux/thunk/admin/adCms";
import DOMPurify from "dompurify";
function PrivacyPolicy() {
  const dispatch = useDispatch();
  const {
    privacyPolicy: { data },
  } = useSelector((state) => state.adCms);
  console.log(data?.privacy_policy, "privacy");
  const sanitizedHtml = DOMPurify.sanitize(data?.privacy_policy);

  useEffect(() => {
    dispatch(getAdminPrivacy());
  }, []);

  
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    // height: "100vh",
    textAlign: "center ",
  };
  return (
    <>
      <section className="auth">
        <Container style={containerStyle}>
          <Row>
            {/* <Col md={6} sm={4}> */}

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
    </>
  );
}

export default PrivacyPolicy;
