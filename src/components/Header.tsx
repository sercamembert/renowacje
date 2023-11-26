"use client";
import React, { useState } from "react";
import logoImg from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const scroll2El = (elID: any) => {
    const targetElement = document.getElementById(elID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  };

  const onBtnClick = (e: any) => {
    e.preventDefault();
    const goto = e.target.getAttribute("data-goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };
  return (
    <nav
      className={
        isOpen
          ? "w-full min-h-[70px] py-2 padding bg-primary fixed top-0 z-50"
          : "w-full min-h-[70px] py-2 padding fixed top-0 bg-white z-50"
      }
    >
      <Navbar
        fluid={true}
        rounded={true}
        className={
          isOpen
            ? "w-full bg-primary px-0 sm:px-0"
            : "w-full bg-white px-0 sm:px-0"
        }
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
          <div
            data-goto="kontakt"
            onClick={onBtnClick}
            className="md:hidden bg-button text-secondary py-2 px-3 md:px-5 lg:py-3 uppercase rounded font-medium text-[12px] md:text-sm hover:bg-accent cursor-pointer"
          >
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
          <div className=" bg-primary md:bg-white  p-0 flex items-center justify-center text-[14px] sm:text-[16px] gap-6 sm:gap-8 md:text-[18px] lg:gap-12 lg:text-[20px] text-secondary ">
            <button
              onClick={onBtnClick}
              data-goto="onas"
              className="hover:text-accent  font-medium"
            >
              o nas
            </button>
            <button
              data-goto="projekty"
              className="hover:text-accent  font-medium"
              onClick={onBtnClick}
            >
              projekty
            </button>
            <button
              data-goto="uslugi"
              className="hover:text-accent  font-medium"
              onClick={onBtnClick}
            >
              usługi
            </button>

            <button
              data-goto="opinie"
              onClick={onBtnClick}
              className="hover:text-accent  font-medium"
            >
              opinie
            </button>
            <button
              data-goto="kontakt"
              onClick={onBtnClick}
              className="hover:text-accent font-medium"
            >
              kontakt
            </button>
            <div
              data-goto="kontakt"
              onClick={onBtnClick}
              className="hidden md:block bg-button text-secondary py-2 px-3 md:px-5 lg:py-3 uppercase rounded font-medium text-[12px] md:text-sm hover:bg-accent cursor-pointer"
            >
              darmowa wycena
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
