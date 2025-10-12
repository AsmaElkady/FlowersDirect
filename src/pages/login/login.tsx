import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MyInput from "../../components/Inputs/MyInput";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";
import { useMutation } from "@tanstack/react-query";
import type { ILogin } from "../../types/auth";
import { type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FormProvider, useForm } from "react-hook-form";
import { getSchemaData } from "../../utils/schema";
import axios from "axios";
import type { LoginSchemaType } from "../../utils/schema";
import AuthText from "../../components/animations/AuthText";
import { useNavigate, useLocation } from "react-router";
import { baseUrl } from "../../constants/main";
import { useDispatch } from "react-redux";
import { setToken, setName, setID } from "../../redux/slices/authSlice";

const Login = () => {
  const { schema, defaultValues } = getSchemaData("login");
  const navigate = useNavigate();
  //const location = useLocation();
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "all",
  });
  const { handleSubmit } = form;

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
      }
      navigate("/", { replace: true });
      //location.state?.from ? navigate(-1) : navigate("/", { replace: true });
    },
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (userValue) => {
    mutate(userValue);
  };

  return (
    <Container fluid>
      <Row className="align-items-center bg-linear">
        <Col
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center h-100"
        >
          <Col lg="8" md="10" sm="12">
            <AuthText title="Let's Bloom!" />
            <FormProvider {...form}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <MyInput id="email" label="Email" type="email" />
                <Password forgetPass={true} />
                {isError && (
                  <p className="text-center text-secondary">
                    {error.response ? error.response.data : error.message}
                  </p>
                )}
                <AuthBtn
                  name="Login"
                  title="already have an account?"
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
