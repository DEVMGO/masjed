import React from "react";
import HeaderHome from "./header";
import Footer from "./footer";

const HomeLayout = (props) => {
  return (
    <>
      <HeaderHome />
      <main className="w-full min-h-[50vh] flex items-center justify-start flex-col bg-bgkhaki">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
