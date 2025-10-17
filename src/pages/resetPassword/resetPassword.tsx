import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Password from "../../components/Inputs/Password";
import AuthBtn from "../../components/Buttons/AuthBtn";
import { useMutation } from "@tanstack/react-query";
import type { IResetPass } from "../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import {
  resetPassSchema,
  ResetPassDefaultValues,
  type ResetPassSchemaType,
} from "../../utils/schema/resetPassSchema";
import axios from "axios";
import AuthText from "../../components/animations/AuthText";
import { useNavigate } from "react-router";
import { baseUrl } from "../../constants/main";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const ResetPassword = () => {
  const id = useSelector((state: RootState) => state.auth.id);
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  console.log("user", user);

  const form = useForm<IResetPass>({
    defaultValues: ResetPassDefaultValues,
    resolver: zodResolver(resetPassSchema),
    mode: "all",
  });

  const handleResubmit = async (userValue: IResetPass) => {
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...reset } = user;
      const obj = {
        ...reset,
        password: userValue.password,
      };

      const res = await axios.put(baseUrl + "users/" + id, obj);
      return res;
    }
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["resetPass"],
    mutationFn: handleResubmit,
    onSuccess: () => {
      navigate("/Login", { replace: true });
    },
  });

  const onSubmit: SubmitHandler<ResetPassSchemaType> = (userValue, e) => {
    e?.preventDefault();
    mutate(userValue);
  };

  return (
    <Container fluid>
      <Row className="align-items-center bg-linear">
        <Col sm="12" md="6" className="bg-imgVertical" />
        <Col
          md="6"
          sm="12"
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <Col lg="8" md="10" sm="12">
            <AuthText title="Reset Password" />
            <FormProvider {...form}>
              <Form onSubmit={form.handleSubmit(onSubmit)}>
                <Password id="password" />
                <Password label="Repassword" id="re_password" />
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
      </Row>
    </Container>
  );
};

export default ResetPassword;
