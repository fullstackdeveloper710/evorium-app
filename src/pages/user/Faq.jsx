import React, { useEffect } from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import "../../styles/user/auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminFaqs } from "../../redux/thunk/admin/adFaqs";

const Faq = () => {
  const dispatch = useDispatch();
  const { adminFaqs } = useSelector((state) => state.adFaqs);

  const { data } = adminFaqs;

  useEffect(() => {
    dispatch(getAdminFaqs()).then(({ payload }) => {
      console.log(payload, "payload");
    });
  }, []);
  return (
    <section className="auth">
      <Container>
        <Row>
          <h1 className="auth__title">Faq</h1>
        </Row>
        <Row>
          <Accordion defaultActiveKey="0">
            {data?.map((item, index) => (
              <>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{item.question_title}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              </>
            ))}
          </Accordion>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
