import React from "react";
import Image from "next/image";
import Link from "next/link";
// Images7
import Logo from "@/public/assets/images/logo.png";7
import Fimg1 from "@/public/assets/images/eitaa1.png";
import Fimg2 from "@/public/assets/images/baleh1.png";
import Fimg3 from "@/public/assets/images/whatsapp1.png";
import Fimg4 from "@/public/assets/images/aparat.png";
// style
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="w-full flex items-start justify-start flex-col">
        <h5>قوانین و مقررات</h5>
      </div>

      <div className="w-full flex items-center justify-start flex-col">
        <div className="w-full max-w-[180px]">
          <Image
            src={Logo}
            alt="خیمه الشهدا"
            className="w-full max-w-xs h-full"
          />
        </div>
        <p className="text-xs text-white">
          © تمام حقوق این سایت متعلق به خیمه الشهدا می‌باشد
        </p>
      </div>

      <div className="w-full flex items-center justify-start flex-col">
        <h3 className="text-base text-white">شبکه‌های اجتماعی</h3>
        <ul className="w-full flex items-center justify-center">
          <li className="w-11 ml-3 my-4">
            <Link href="#">
              <Image src={Fimg1} alt="Fimg1" className="w-full h-full" />
            </Link>
          </li>
          <li className="w-11 ml-3 my-4">
            <Link href="#">
              <Image src={Fimg2} alt="Fimg1" className="w-full h-full" />
            </Link>
          </li>
          <li className="w-11 ml-3 my-4">
            <Link href="#">
              <Image src={Fimg3} alt="Fimg1" className="w-full h-full" />
            </Link>
          </li>
          <li className="w-11 ml-3 my-4">
            <Link href="#">
              <Image src={Fimg4} alt="Fimg1" className="w-full h-full" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
