/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header >
      <div className="container mx-auto max-w-6xl   py-3 px-3 flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center ">
            <Image
              src="/images/logo.png"
              width={120}
              height={100}
              alt="Picture of the author"
            />
          </div>

          <div className="flex space-x-2.5">
            <button className="bg-[#2F4553] border-none text-base font-semibold sm:text-sm text-white py-2 sm:py-2 px-3.5 sm:px-3.5 rounded border border-white">
              Log in
            </button>
            <button className="bg-brand-active text-base font-semibold text-white  py-2 sm:py-2 px-3.5 sm:px-3.5 rounded">
              Registration
            </button>
          </div>
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </header>
  );
}
