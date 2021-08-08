import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className={`uppercase text-md lg:text-2xl xl:text-2xl 2xl:text-2xl bg-neon-green px-16 py-4 ${styles["default-button"]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
