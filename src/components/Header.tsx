"use client";
import React, { useState } from "react";
import logoImg from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav
      className={
        isOpen
          ? "w-full min-h-[70px] py-4 padding bg-primary"
          : "w-full min-h-[70px] py-4 padding "
      }
    >
      <Navbar
        fluid={true}
        rounded={true}
        className={isOpen ? "w-full bg-primary" : "w-full"}
      >
        <Navbar.Brand href="/">
          <div className="flex gap-2 items-center">
            <Image
              src={logoImg}
              width={50}
              height={50}
              alt="logo"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
            />
            <div className="flex flex-col text-xs md:text-sm">
              <p>Site</p>
              <p>Logo</p>
            </div>
          </div>
        </Navbar.Brand>
        <div className="flex items-center gap-3">
          <div className="md:hidden bg-button text-secondary py-2 px-3 md:px-5 lg:py-3 uppercase rounded font-medium text-[12px] md:text-sm hover:bg-accent cursor-pointer">
            darmowa wycena
          </div>
          <div
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            <Navbar.Toggle className="text-secondary" />
          </div>
        </div>
        <Navbar.Collapse>
          <div className=" bg-primary md:bg-white  p-0 flex items-center justify-center text-[17px] gap-8 md:text-[18px] lg:gap-12 lg:text-[20px] text-secondary ">
            <Link href="/" className="hover:text-accent  font-medium">
              o nas
            </Link>
            <Link href="/" className="hover:text-accent  font-medium">
              usługi
            </Link>
            <Link href="/" className="hover:text-accent  font-medium">
              opinie
            </Link>
            <Link href="/" className="hover:text-accent font-medium">
              kontakt
            </Link>
            <div className="hidden md:block bg-button text-secondary py-2 px-3 md:px-5 lg:py-3 uppercase rounded font-medium text-[12px] md:text-sm hover:bg-accent cursor-pointer">
              darmowa wycena
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
