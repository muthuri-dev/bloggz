"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Navigation } from "@/data/data";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Session } from "next-auth";
import useSessionStore from "@/store/useSessionStore";

const NavComponent = ({ session }: { session: Session }) => {
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

  //sending session to store
  const sessionStore = useSessionStore();
  React.useEffect(() => {
    if (sessionStore.session !== session) {
      sessionStore.setSession(session);
    }
  }, [session, sessionStore]);

  return (
    <div className="flex justify-between items-center w-full ">
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
                  ? "bg-blue-600 py-2 px-4 font-thin rounded-2xl text-white hover:bg-blue-400"
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
              <div className="absolute bg-black inset-0 z-0 text-white flex flex-col items-end gap-5 p-5">
                {Navigation.map((nav: any) => (
                  <ul key={nav.id}>
                    <li>
                      <a href={nav.url}>{nav.value}</a>
                    </li>
                  </ul>
                ))}
                <Button type="solid" method={() => route.push("/blogs")}>
                  close
                </Button>
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
          {session ? (
            // <Button type="outline">{session.user?.name}</Button>
            session.user?.image && (
              <Image
                src={session.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full mr-3 md:mr-0"
              />
            )
          ) : (
            <Button type="outline" method={openModal}>
              Get Started
            </Button>
          )}

          {/* {isModalOpen && <Profile onClose={closeModal} />} */}
        </div>
      </div>
    </div>
  );
};
export default NavComponent;
