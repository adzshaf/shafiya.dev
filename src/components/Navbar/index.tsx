import { FC } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between py-8 absolute w-full">
      <Link href="/">
        <h1 className={`${styles.title}`}>shafiya.dev</h1>
      </Link>
      <div className="flex justify-center items-center self-end">
        <Link href="/">
          <h1 className={`${styles.nav}`}>home</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
