import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu } from 'react-icons/fi';
// Images
import Rahbar from "@/public/assets/images/rahbar.png";
import Logo from "@/public/assets/images/logo.png";
import Soleymani from "@/public/assets/images/soleymani.png";
// style
import style from "./style.module.css";

const HeaderHome = () => {
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

      <nav className="py-6 px-16 res5:px-8 w-full flex items-center justify-between bg-black">
        <button className="text-white text-3xl hidden res4:block"><FiMenu /></button>
        <ul className="flex items-center justify-center res4:hidden">
          {menuItems.map((item, index) => (
            <li
              key={index + "menuItems"}
              className={`mx-3 text-sm res5:text-xs ${ pathname === item.url ? "text-red-700" : "text-bgkhaki" }`}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link href="/auth">
            <button className="text-bgkhaki text-sm res5:text-xs">ورود / ثبت‌نام</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default HeaderHome;
