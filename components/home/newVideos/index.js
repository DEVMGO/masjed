import React from "react";
import Link from "next/link";
// Icons
import { MdSlowMotionVideo } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
// Images
import Img1 from "@/public/assets/images/home/video1.jpeg";
import Img2 from "@/public/assets/images/home/video2.jpeg";
import Img3 from "@/public/assets/images/home/video3.jpeg";
import Img4 from "@/public/assets/images/home/video4.jpeg";
import Img5 from "@/public/assets/images/home/video5.jpeg";
import Image from "next/image";

const NewVideos = ({ videoList }) => {
  return (
    <div className="w-full flex items-center justify-start flex-col my-8">
      <div className="w-full flex items-center justify-between p-2">
        <h3 className="flex items-center text-black text-base font-extrabold">
          <MdSlowMotionVideo className="text-2xl ml-2" /> جدیدترین ویدیوها
        </h3>
        <Link href="#">
          <button className="text-black text-base flex items-center hover:text-khaki">
            <RiPlayList2Fill className="ml-1" /> همه
          </button>
        </Link>
      </div>

      <div className="w-full h-full grid grid-cols-19 my-8">
        {videoList?.map((item, index) => (
          <div key={index + 'newvideoslist'} className="w-full h-full p-2 flex items-center justify-center flex-col">
            <div className="w-full h-full rounded-md overflow-hidden relative shadow-3xl">
              <Image src={item.cover} alt={item.title} className="w-full h-full" />
              <div className="absolute text-white text-5xl w-full h-full flex items-center justify-center top-0 left-0 bg-black bg-opacity-50">
                <FaPlay className="cursor-pointer" />
              </div>
            </div>

            <div className="w-full flex items-start justify-start flex-col py-3">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-xs text-black33">{item.title.length < 60 ? item.title : `${item.title.slice(0, 60)}...`}</h2>
                <p className="flex items-center text-xs text-black33">
                  {item.views.toLocaleString('fa-ir')} <AiOutlineEye className="text-lg mr-1" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewVideos;

NewVideos.defaultProps = {
  videoList: [
    {
      title: "سخنرانی رهبر در روز قدس",
      cover: Img1,
      video: "",
      views: 1000
    },
    {
      title: "",
      cover: Img2,
      video: "",
      views: 450
    },
    {
      title: "",
      cover: Img3,
      video: "",
      views: 700
    },
    {
      title: "مراسم ریحانه الحسین",
      cover: Img4,
      video: "",
      views: 850
    },
    {
      title: "هیئت فدائیان امام‌حسین (ع)",
      cover: Img5,
      video: "",
      views: 200
    },
  ],
};
