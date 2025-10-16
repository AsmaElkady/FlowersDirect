import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MyInput from "../../components/Inputs/MyInput";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";
import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { getSchemaData, loginSchema } from "../../utils/schema";
import axios from "axios";
import AuthText from "../../components/animations/AuthText";
import { useNavigate } from "react-router";
import { baseUrl } from "../../constants/main";
import { useDispatch } from "react-redux";
import { setToken, setName, setID } from "../../redux/slices/authSlice";

const Login = () => {
  const { defaultValues } = getSchemaData("login");
  const navigate = useNavigate();
  //const location = useLocation();
  const dispatch = useDispatch();

  const form = useForm<ILogin>({
    defaultValues,
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const handleLogin = async (userValue: ILogin) => {
    const res = await axios.post(baseUrl + "login", userValue);
    return res;
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: handleLogin,
    onSuccess: (res) => {
      console.log(res);
      if (res) {
        dispatch(setToken(res.data.accessToken));
        dispatch(setName(res.data.user.username));
        dispatch(setID(res.data.user.id));
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      navigate("/", { replace: true });
      //location.state?.from ? navigate(-1) : navigate("/", { replace: true });
    },
  });

  const onSubmit: SubmitHandler<ILogin> = (userValue: ILogin) => {
    mutate(userValue);
  };

  return (
    <Container fluid>
      <Row className="align-items-center bg-linear">
        <Col
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Col lg="8" md="10" sm="12">
            <AuthText title="Let's Bloom!" />
            <FormProvider {...form}>
              <Form onSubmit={form.handleSubmit(onSubmit)}>
                <MyInput id="email" label="Email" type="email" />
                <Password forgetPass={true} />
                {isError && (
                  <p className="text-center text-secondary">
                    {error.message && error.message}
                  </p>
                )}
                <AuthBtn
                  name="Login"
                  title="Don't have an account?"
                  navName="Sign Up"
                  navTo="/Signup"
                  isLoading={isPending}
                />
              </Form>
            </FormProvider>
          </Col>
        </Col>
        <Col sm="12" md="6" className="bg-imgVertical" />
      </Row>
    </Container>
  );
};

export default Login;
