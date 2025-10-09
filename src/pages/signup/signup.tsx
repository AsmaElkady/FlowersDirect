import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyInput from "../../components/Inputs/MyInput";
import Form from "../../components/Form/Form";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";
import ScaleContainer from "../../components/animations/ScaleContainer";
import "../../style/auth.css";

const SignUp = () => {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center flex-md-row flex-column-reverse bg-linear h-100">
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center p-5 bg-imgVertical"
        >
          <ScaleContainer className="p-3 rounded-4 w-75 m-auto bg-blur">
            <h5 className="lh-lg lightTextShadow">
              Creating bouquets is an art, and our florists are artists. We use
              the highest quality flowers from local greenhouses and suppliers
              from the Netherlands and France to create unique arrangements.
            </h5>
          </ScaleContainer>
        </Col>
        <Col
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center"
        >
          <Col lg="8" md="10" sm="12">
            <Form type="signup" title="Bloom With Us!">
              <MyInput id="name" label="Username" type="text" />
              <MyInput id="email" label="Email" type="email" />
              <Password />
              <Password label="Repassword" id="re_password" />
              <AuthBtn
                name="Sign up"
                title="already have an account?"
                navName="Login"
                navTo="/Login"
              />
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
