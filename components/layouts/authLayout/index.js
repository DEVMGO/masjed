import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rahbar from "@/public/assets/images/rahbar.png";
import Logo from "@/public/assets/images/logo.png";
import Soleymani from "@/public/assets/images/soleymani.png";
import style from "./style.module.css";

const AuthLayout = (props) => {
  return (
    <>
      <header className={style.navbar}>
        <Image src={Rahbar} alt='رهبر' className="w-36 res3:w-20 h-full object-cover pt-2" />
        <Link href="/"><Image src={Logo} alt='خیمه الشهدا' className="w-36 res3:w-24 h-full object-cover" /></Link>
        <Image src={Soleymani} alt='قاسم سلیمانی' className="w-36 res3:w-20 h-full object-contain pt-2" />
      </header>
      <main className="min-h-[80vh] p-8 pb-20 w-full flex items-center justify-center flex-col bg-bgkhaki">{props.children}</main>
    </>
  );
};

export default AuthLayout;
