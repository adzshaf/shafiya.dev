import { FC } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between py-8 w-full">
      <Link href="/">
        <h1 className={`${styles.title}`}>shafiya.dev</h1>
      </Link>
      <div className="hidden lg:flex xl:flex 2xl:flex justify-center items-center">
        <Link href="/">
          <h1 className={`${styles.nav}`}>home</h1>
        </Link>
        <a href="https://blog.shafiya.dev/">
          <h1 className={`${styles.nav} ml-4`}>blog</h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
