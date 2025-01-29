import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className ?? ""}`}>{children}</button>
  );
};

export default Button;
