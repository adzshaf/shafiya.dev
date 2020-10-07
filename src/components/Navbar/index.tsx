import { FC } from "react";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between py-8 absolute w-full">
      <h1 className={`${styles.title}`}>shafiya.dev</h1>
      <div className="flex justify-center items-center self-end">
        <h1 className={`${styles.nav}`}>home</h1>
        <h1 className={`${styles.nav} ml-16`}>writing</h1>
        <h1 className={`${styles.nav} ml-16`}>work</h1>
        <h1 className={`${styles.nav} ml-16`}>me</h1>
      </div>
    </div>
  );
};

export default Navbar;
