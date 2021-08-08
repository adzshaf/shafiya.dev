import { FC } from "react";
import styles from "./Hero.module.css";
import Button from "../Button";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-center xl:justify-center 2xl:justify-center lg:items-center xl:items-center 2xl:items-center lg:h-screen xl:h-screen 2xl:h-screen">
      <div className="flex flex-1 justify-center items-center">
        <img
          className={`${styles["hero-image"]}`}
          src="/shafiya.png"
          alt="Hero"
        />
      </div>
      <div className="lg:flex-1 xl:flex-1 2xl:flex-1">
        <h1 className="text-ivory text-4xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
          Hi there,
        </h1>
        <h1 className="text-ivory text-4xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
          I am <span className={styles.name}>Shafiya</span>.
        </h1>
        <p className="text-white text-2xl mt-8 mb-16">
          I am on my mission to build greater things using tech
        </p>
        <Link href="#work">
          <Button>See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
