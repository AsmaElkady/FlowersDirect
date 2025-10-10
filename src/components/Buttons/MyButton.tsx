import Button from "react-bootstrap/Button";
import { motion } from "motion/react";
import type { IButtonProps } from "../../types/components/ButtonsProps";

const MyButton = ({ varient, title, onClick }: IButtonProps) => {
  return (
    <motion.div
      className="rounded-2"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 5px #3C1D30",
      }}
    >
      <Button variant={varient} onClick={onClick} className="w-100">
        {title}
      </Button>
    </motion.div>
  );
};

export default MyButton;
