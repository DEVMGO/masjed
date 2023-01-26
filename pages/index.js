import Head from "next/head";
import Image from "next/image";
// Components
import SliderHome from "@/components/home/slider";
import SidebarHome from "@/components/home/sidebar";
import NewVideos from "@/components/home/newVideos";
// Styles
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>مسجد خیمه الشهدا</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainHome}>
        <div className="w-full flex items-start justify-center">
          <div className="w-1/4">
            <SidebarHome />
          </div>
          <div className="w-3/4 pr-8">
            <div
              id="slider_home"
              className="w-full h-[60vh] rounded-2xl overflow-hidden bg-slate-700 shadow-3xl shadow-neutral-700"
            >
              <SliderHome />
            </div>
          </div>
        </div>
        <NewVideos />
      </div>
    </>
  );
}

Home.layout = "L1";
