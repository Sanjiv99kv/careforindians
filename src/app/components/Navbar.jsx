"use client";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setIsOpen } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center fixed top-0 w-full z-10 ${
        pathname === "/"
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div
        className={`flex py-4 justify-between pl-3 pr-4 max-w-7xl md:px-10 lg:px-14 xl:px-20 w-full items-center`}
      >
        <div className="flex items-center">
          <img
            onClick={() => {
              router.push("/");
            }}
            src="/Icons/heartlogo.png"
            alt=""
            className="h-[50px] cursor-pointer"
          />
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-[35px] text-[14px] cursor-pointer">
            <Link href={"/"} className="hover:text-[#EF5744]">
              Home
            </Link>
            <Link href={"/search"} className="hover:text-[#EF5744]">
              Search
            </Link>
            <Link href={"/"} className="hover:text-[#EF5744]">
              About us
            </Link>
            <Link href={"/"} className="hover:text-[#EF5744]">
              Type of Cares
            </Link>
            <Link href={"/"} className="hover:text-[#EF5744]">
              Blogs
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-[26px]">
          <span
            onClick={() => {
              router.push("/login");
            }}
            className="text-[14px] cursor-pointer hover:text-[#EF5744]"
          >
            Login
          </span>
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="bg-[#EF5744] px-[19px] py-[8px] rounded-full text-[#fff] text-[14px] cursor-pointer"
          >
            Join now
          </button>
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          class="md:hidden flex flex-col items-end cursor-pointer transition-all duration-500"
        >
          <span class="block h-[3px] w-5 bg-[#000]"></span>
          <span class="block h-[3px] w-7.5 bg-[#000] mt-2"></span>
          <span class="block h-[3px] w-5 bg-[#000] mt-2"></span>
        </div>
      </div>
    </div>
  );
}
