import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MyInput from "../../components/Inputs/MyInput";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";
import AuthText from "../../components/animations/AuthText";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { ISignup } from "../../types/auth";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import {
  getSchemaData,
  signUpSchema,
  type SignUpSchemaType,
} from "../../utils/schema";
import { useNavigate } from "react-router";
import "../../style/auth.css";
import { baseUrl } from "../../constants/main";
import { useDispatch } from "react-redux";
import { setToken, setName, setID } from "../../redux/slices/authSlice";

const SignUp = () => {
  const { defaultValues } = getSchemaData("signup");
  const navigate = useNavigate();
  //const location = useLocation();
  const dispatch = useDispatch();

  const form = useForm<ISignup>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
    mode: "all",
  });

  const handleRegister = async (userValue: ISignup) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { re_password, ...values } = userValue;
    const userInfo = {
      ...values,
      cart: {
        cartsItems: [],
        totalQuantity: 0,
        totalPrice: 0,
      },
      favorites: [],
      orders: [],
    };
    const res = await axios.post(baseUrl + "users", userInfo);
    return res;
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: handleRegister,
    onSuccess: (res) => {
      dispatch(setToken(res.data.accessToken));
      dispatch(setName(res.data.user.username));
      dispatch(setID(res.data.user.id));
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      navigate("/", { replace: true });
      // location.key == "default" ? navigate(-1)
      //   : navigate("/", { replace: true });
    },
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (userValue, e) => {
    e?.preventDefault();
    mutate(userValue);
  };

  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center bg-linear h-100">
        <Col sm="12" md="6" className="bg-imgVertical">
          <div className="bg-imgVertical"></div>
        </Col>
        <Col
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <Col lg="8" md="10" sm="12">
            <AuthText title="Let's Bloom!" />
            <FormProvider {...form}>
              <Form onSubmit={form.handleSubmit(onSubmit)}>
                <MyInput id="username" label="Username" type="text" />
                <MyInput id="email" label="Email" type="email" />
                <Password />
                <Password label="Repassword" id="re_password" />
                {isError && (
                  <p className="text-center text-secondary">
                    {error.message && error.message}
                  </p>
                )}
                <AuthBtn
                  name="Sign up"
                  title="already have an account?"
                  navName="Login"
                  navTo="/Login"
                  isLoading={isPending}
                />
              </Form>
            </FormProvider>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
