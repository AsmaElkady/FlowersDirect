import { Link } from "react-router";
import MyButton from "./MyButton";
import type { IAuthProps } from "../../types/components/ButtonsProps";
import Stack from "react-bootstrap/Stack";

const AuthBtn = ({ name, title, navTo, navName }: IAuthProps) => {
  return (
    <Stack className="mt-3">
      <MyButton varient={"primary"} title={name} />
      <p className="text-muted fw-normal text-center mt-3 small">
        {title}{" "}
        <Link to={navTo} className="text-de text-decoration-none fw-bold">
          {navName}
        </Link>
      </p>
    </Stack>
  );
};

export default AuthBtn;
