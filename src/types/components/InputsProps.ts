export interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
}

export interface PasswordProps {
  id?: "password" | "re_password";
  label?: "Password" | "Repassword";
  forgetPass?: boolean;
  className?: string;
}
