import { FC } from "react";
import Navbar from "../Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="px-16">
      <div className="relative">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
