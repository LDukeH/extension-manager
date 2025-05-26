"use client";

import { Navbar } from "@/app/ui/Navbar";
import { ExtensionList } from "@/app/ui/ExtensionList/ExtensionList";
import useThemeStore from "@/stores/themeStore";

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <div
      className={`main-container theme-${theme} flex items-center justify-center h-screen`}
    >
      <div
        className={`w-screen h-screen absolute dark -z-10 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`w-screen h-screen absolute light -z-10 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div className="w-4/5 h-10/12 grid grid-rows-7 justify-center items-center">
        <div className="row-span-1">
          <Navbar />
        </div>

        <div className="w-full h-full mt-8 row-span-5 ">
          <ExtensionList />
        </div>
      </div>
    </div>
  );
}
