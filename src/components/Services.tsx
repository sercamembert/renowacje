"use client";
import Image from "next/image";
import React from "react";
import malowanieImg from "@/images/icons/malowanie.png";
import projektowanieImg from "@/images/icons/projektowanie.png";
import remontyImg from "@/images/icons/remonty.png";
import dokumentacjaImg from "@/images/icons/dokumentacja.png";
import { motion } from "framer-motion";
import sprinkleImg from "@/images/sprinkle.png";
interface Props {}

const Services = () => {
  return (
    <div className="w-full padding my-[100px] md:my-[200px] flex flex-col">
      <p className="text-secondary text-[25px] sm:text-[35px] lg:text-[40px] 2xl:text-[50px] pb-5 md:pb-10 z-10">
        Co możemy <b>dla Ciebie</b> zrobić
      </p>
      <div className="flex flex-col md:flex-row gap-y-8 pb-[32px] z-10">
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src={malowanieImg}
            width={65}
            height={65}
            alt="malowanie"
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px]"
          />
          <div className="flex flex-col">
            <p className="leading-tight text-[17px] font-semibold sm:text-[20px] lg:text-[25px]">
              Malowanie
            </p>
            <p className="text-accent leading-tight text-[10px] w-[70%] sm:text-[12px] lg:text-[14px]">
              Lorem ipsum dolorsit amet,consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Image
            src={projektowanieImg}
            width={65}
            height={65}
            alt="malowanie"
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px]"
          />
          <div className="flex flex-col">
            <p className="leading-tight text-[17px] font-semibold sm:text-[20px] lg:text-[25px]">
              Projektowanie
            </p>
            <p className="text-accent leading-tight text-[10px] w-[70%] sm:text-[12px] lg:text-[14px]">
              Lorem ipsum dolorsit amet,consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-8">
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Image
            src={remontyImg}
            width={65}
            height={65}
            alt="malowanie"
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px]"
          />
          <div className="flex flex-col">
            <p className="leading-tight text-[17px] font-semibold sm:text-[20px] lg:text-[25px]">
              Remonty
            </p>
            <p className="text-accent leading-tight text-[10px] w-[70%] sm:text-[12px] lg:text-[14px]">
              Lorem ipsum dolorsit amet,consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Image
            src={dokumentacjaImg}
            width={65}
            height={65}
            alt="malowanie"
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px]"
          />
          <div className="flex flex-col">
            <p className="leading-tight text-[17px] font-semibold sm:text-[20px] lg:text-[25px]">
              Dokumentacja
            </p>
            <p className="text-accent leading-tight text-[10px] w-[70%] sm:text-[12px] lg:text-[14px]">
              Lorem ipsum dolorsit amet,consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
