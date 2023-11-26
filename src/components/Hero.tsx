"use client";
import React from "react";
import { motion } from "framer-motion";
import brushImg from "@/images/icons/brush.png";
import projectsIconImg from "@/images/icons/projectsIcon.png";
import heroImg from "@/images/paint.svg";
import Image from "next/image";

interface Props {}

const Hero = () => {
  return (
    <motion.div
      className="padding bg-accent w-full min-h-[650px] pb-[80px] sm:pb-[60px] pt-[130px] sm:pt-[150px] sm:min-h-[600px] 2xl:min-h-screen flex flex-col sm:flex-row  gap-y-7 "
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col gap-4 sm:pt-[20px] lg:pt-[40px] 2xl:pt-[60px]"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-[40px] md:text-[50px] lg:text-[60px] text-secondary leading-tight xl:text-[65px] 2xl:text-[70px] 3xl:text-[80px]">
          <b>Ogarnij</b> swoje <br />
          mieszkanie
        </p>
        <p className="text-[15px]  text-primary leadng-[120px] w-[90%] max-w-[420px] xl:w-[80%] md:max-w-full lg:text-[17px] xl:text-[20px]  3xl:w-[70%]">
          Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt...
        </p>
        <div className="flex gap-4 items-center lg:pt-3">
          <div className="text-[11px] cursor-pointer font-semibold py-2 bg-secondary hover:brightness-75 text-button uppercase px-5 rounded lg:text-[13px] xl:text-[15px]">
            film
          </div>
          <p className="text-secondary text-[11px] xl:text-[14px]">albo</p>
          <div className="text-[11px] cursor-pointer font-semibold py-2 bg-button text-secondary hover:brightness-75 uppercase px-5 rounded lg:text-[13px] xl:text-[15px]">
            Wycena
          </div>
        </div>
        <div className="flex gap-3 xl:gap-5 xl:pt-7">
          <div className="flex gap-3 items-center">
            <Image
              src={brushImg}
              width={1000}
              height={1000}
              alt="brush icon"
              className="w-[23px] h-[23px] lg:w-[25px] lg:h-[25px] xl:h-[27px] xl:w-[27px]"
            />
            <div className="flex flex-col gap-0">
              <p className="text-secondary text-[13px] font-semibold lg:text-[15px] xl:text-[17px]">
                ponad 200
              </p>
              <p className="text-primary text-[11px] lg:text-[13px] xl:text-[14px]">
                pomalowanych mieszkań
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src={projectsIconImg}
              width={1000}
              height={1000}
              alt="projects icon"
              className="w-[23px] h-[23px] lg:w-[25px] lg:h-[25px] xl:h-[27px] xl:w-[27px]"
            />
            <div className="flex flex-col gap-0">
              <p className="text-secondary text-[13px] font-semibold lg:text-[15px] xl:text-[17px]">
                ponad 120
              </p>
              <p className="text-primary text-[11px] lg:text-[13px] xl:text-[14px]">
                projektów
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 3000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          src={heroImg}
          width={1000}
          height={1000}
          alt="painting img"
          className="max-w-[290px] mx-auto md:max-w-[315px] lg:max-w-[370px] xl:max-w-[420px] 2xl:max-w-[500px] 3xl:max-w-[530px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
