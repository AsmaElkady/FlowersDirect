import { useEffect } from "react";
import { Admin } from "../classes/users";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";

const useIsAdmin = () => {
  const useremail = JSON.parse(localStorage.getItem("user")!);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const checkType = Admin.checkAdmin(useremail?.email);
    if (!checkType.status) {
      navigate("/login");
    } else {
      return { status: true };
    }
  }, [dispatch]);
};

export default useIsAdmin;
