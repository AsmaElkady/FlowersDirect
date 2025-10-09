import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyInput from "../../components/Inputs/MyInput";
import Form from "../../components/Form/Form";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";
import ScaleContainer from "../../components/animations/ScaleContainer";

const Login = () => {
  return (
    <Container fluid>
      <Row className="align-items-center bg-linear">
        <Col
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center h-100"
        >
          <Col lg="8" md="10" sm="12">
            <Form type="login" title="Let's Bloom!">
              <MyInput id="email" label="Email" type="email" />
              <Password forgetPass={true} />
              <AuthBtn
                name="Login"
                title="already have an account?"
                navName="Sign Up"
                navTo="/Signup"
              />
            </Form>
          </Col>
        </Col>
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center align-items-center bg-imgVertical p-5"
        >
          <ScaleContainer className="p-4 rounded-4 w-75 m-auto bg-blur">
            <h5 className="lh-lg lightTextShadow">
              Flowers always make people better, happier, and more helpful; they
              are sunshine, food and medicine to the mind.
            </h5>
          </ScaleContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
