import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyInput from "../../components/Inputs/MyInput";
import Form from "../../components/Form/Form";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";

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
        <Col sm="12" md="6" className="bg-imgVertical" />
      </Row>
    </Container>
  );
};

export default Login;
