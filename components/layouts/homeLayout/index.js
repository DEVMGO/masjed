import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// Images
import Rahbar from "@/public/assets/images/rahbar.png";
import Logo from "@/public/assets/images/logo.png";
import Soleymani from "@/public/assets/images/soleymani.png";
import Fimg1 from "@/public/assets/images/eitaa1.png";
import Fimg2 from "@/public/assets/images/baleh1.png";
import Fimg3 from "@/public/assets/images/whatsapp1.png";
import Fimg4 from "@/public/assets/images/aparat.png";
// style
import style from "./style.module.css";

const HomeLayout = (props) => {
  const pathname = useRouter().pathname;
  const menuItems = [
    {
      title: "خانه",
      url: "/",
      icon: "",
      children: [],
    },
    {
      title: "مداحان و سخنرانان",
      url: "",
      icon: "",
      children: [],
    },
    {
      title: "اخبار",
      url: "",
      icon: "",
      children: [],
    },
    {
      title: "آرشیو",
      url: "",
      icon: "",
      children: [],
    },
    {
      title: "تماس با ما",
      url: "",
      icon: "",
      children: [],
    },
  ];
  return (
    <>
      <header className={style.header}>
        <Image
          src={Rahbar}
          alt="رهبر"
          className="w-36 res3:w-20 h-full object-cover pt-2"
        />
        <Link href="/">
          <Image
            src={Logo}
            alt="خیمه الشهدا"
            className="w-36 res3:w-24 h-full object-cover"
          />
        </Link>
        <Image
          src={Soleymani}
          alt="قاسم سلیمانی"
          className="w-36 res3:w-20 h-full object-contain pt-2"
        />
      </header>
      <div className="py-6 px-16 w-full flex items-center justify-between bg-black">
        <ul className="flex items-center justify-center">
          {menuItems.map((item, index) => (
            <li
              key={index + menuItems}
              className={`mx-3 text-sm ${
                pathname === item.url ? "text-white" : "text-lightKhaki"
              }`}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link href="/auth">
            <button className="text-lightKhaki">ورود / ثبت‌نام</button>
          </Link>
        </div>
      </div>
      <main className="w-full min-h-[50vh] flex items-center justify-start flex-col">
        {props.children}
      </main>
      <footer className={style.footer}>
        <div className="w-full flex items-start justify-start flex-col">
          <h5>قوانین و مقررات</h5>
        </div>
        
        <div className="w-full flex items-center justify-start flex-col">
          <div className="w-full max-w-[180px]"><Image src={Logo} alt="خیمه الشهدا" className="w-full max-w-xs h-full" /></div>
          <p className="text-xs text-white">© تمام حقوق این سایت متعلق به خیمه الشهدا می‌باشد</p>
        </div>

        <div className="w-full flex items-center justify-start flex-col">
          <h3 className="text-base text-white">شبکه‌های اجتماعی</h3>
          <ul className="w-full flex items-center justify-center">
            <li className="w-11 ml-3 my-4">
              <Link href="#"><Image src={Fimg1} alt="Fimg1" className="w-full h-full" /></Link>
            </li>
            <li className="w-11 ml-3 my-4">
              <Link href="#"><Image src={Fimg2} alt="Fimg1" className="w-full h-full" /></Link>
            </li>
            <li className="w-11 ml-3 my-4">
              <Link href="#"><Image src={Fimg3} alt="Fimg1" className="w-full h-full" /></Link>
            </li>
            <li className="w-11 ml-3 my-4">
              <Link href="#"><Image src={Fimg4} alt="Fimg1" className="w-full h-full" /></Link>
            </li>
            {/* <li><Image src={Fimg4} alt="Fimg1" /></li> */}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default HomeLayout;
