"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Navigation } from "@/data/data";
//import { RxHamburgerMenu } from "react-icons/rx";
//import Profile from "../home/Profile";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = React.useState(Navigation[0].id);
  const [toggle, setToggle] = React.useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //navigation router
  const route = useRouter();

  return (
    <div className="flex justify-between md:pl-16 md:pr-16 pt-3 pb-3 items-center z-30 shadow-md rounded-2xl sticky w-full top-0 bg-opacity-80 bg-white ">
      <div onClick={() => route.push("/")}>
        <Image
          src="/whiteLogo-removebg.png"
          height={60}
          width={60}
          alt="logo"
        />
      </div>
      <div className="flex gap-3">
        <div className="gap-5 md:flex items-center hidden">
          {Navigation.map((nav: any) => (
            <Link
              key={nav.id}
              href={nav.url}
              onClick={() => setActive(nav.id)}
              className={
                nav.id === active
                  ? "bg-blue-600 py-2 px-4 font-thin rounded-2xl hover:text-white"
                  : "underline font-mono hover:no-underline"
              }
            >
              {nav.value}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Button type="outline" method={toggleMenu}>
            <Menu size={20} />
          </Button>
          {toggle && (
            <div className="min-w-screen h-screen animated fadeIn faster right-0-0 top-0 flex justify-end  inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
              <div className="absolute bg-black inset-0 z-0 text-white flex justify-end">
                navigation menu
              </div>
            </div>
          )}
        </div>
        {/* <Menu
          size={20}
          color="#000000"
          strokeWidth={1.75}
          absoluteStrokeWidth
        /> */}
        <div>
          <Button type="outline" method={openModal}>
            Get Started
          </Button>
          {/* {isModalOpen && <Profile onClose={closeModal} />} */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
