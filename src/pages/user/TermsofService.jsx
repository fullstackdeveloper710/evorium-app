import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getAdminTermAndConditions } from "../../redux/thunk/admin/adCms";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from 'dompurify';

function TermsofService() {
  const dispatch = useDispatch()
  const {
    termAndConditions: { data },
  } = useSelector((state) => state.adCms);
  console.log(data?.terms_and_conditions,'data of t&c')

  const sanitizedHtml = DOMPurify.sanitize(data?.terms_and_conditions);
  useEffect(() => {
    dispatch(getAdminTermAndConditions());  
  }, []);

  return (
    <>
      <section className="auth">
        <Container>
          <Row>
            {/* <Col md={6} sm={4}> */}
            <div className="text-block">
              {" "}
              <h1 className="auth__title">Terms of Service</h1>
              <div className="text-block"><div style={{
                color:'white'
              }} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
              
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TermsofService;
