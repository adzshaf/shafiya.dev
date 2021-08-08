import { FC } from "react";
import Navbar from "../Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
