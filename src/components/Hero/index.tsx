import { FC } from "react";
import styles from "./Hero.module.css";
import Button from "../Button";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-1 justify-center items-center">
        <img
          className={`${styles["hero-image"]}`}
          src="/shafiya.png"
          alt="Hero"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-ivory text-7xl">Hi there,</h1>
        <h1 className="text-ivory text-7xl">
          I am <span className={styles.name}>Shafiya</span>.
        </h1>
        <p className="text-white text-2xl mt-8 mb-16">
          i’m on my mission to build greater things using tech
        </p>
        <Link href="#work">
          <Button>Click Me</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
