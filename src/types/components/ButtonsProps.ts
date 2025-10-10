import React from "react";

export interface IButtonProps {
  varient: "primary" | "secondary";
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IAuthProps {
  name: string;
  title: string;
  navTo: string;
  navName: string;
}
