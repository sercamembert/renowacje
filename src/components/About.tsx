"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import person1Img from "@/images/staff/person1.png";
import person2Img from "@/images/staff/person2.png";
import person3Img from "@/images/staff/person3.png";
import person4Img from "@/images/staff/person4.png";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
const variants = {
  open: { x: 0 },
  closed: { x: -2000 },
};
const About = () => {
  const [selectedPerson, setSelectedPerson] = useState(0);
  const persons = [
    {
      name: "Marek Stachowiak",
      role: "Projektant wnętrz",
      image: person1Img,
    },
    {
      name: "Magda konieczna",
      role: "Koordynator",
      image: person2Img,
    },
    {
      name: "Marcin Wesoły",
      role: "Kierownik ekipy elektro",
      image: person3Img,
    },
    {
      name: "Jarosław Nowak",
      role: "Kierownik ekipy wykoń",
      image: person4Img,
    },
  ];
  return (
    <div className="padding w-full my-[70px] flex flex-col gap-5 ">
      <p className="text-secondary text-[30px] sm:text-[35px] pl-2 lg:text-[40px] 2xl:text-[50px]">
        O nas
      </p>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="onas"
      >
        {persons.map((person, index) => (
          <motion.div
            className={selectedPerson == index ? "flex gap-5" : "hidden"}
            animate={selectedPerson === index ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            variants={variants}
          >
            <Image
              width={200}
              height={200}
              src={person.image}
              alt="Person 1 img"
              className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:w-[200px] lg:h-[200px] rounded"
            />
            <div className="flex flex-col pt-2 lg:pt-4 ">
              <div className="flex items-center gap-2 sm:gap-4">
                <p className="text-secondary text-[18px] sm:text-[25px] lg:text-[30px] leading-tight">
                  {person.name}
                </p>
                <div className="flex gap-1 sm:gap-3 items-center">
                  <Linkedin className="text-accent w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] hover:text-secondary cursor-pointer" />
                  <Twitter className="text-accent w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] hover:text-secondary cursor-pointer" />
                  <Instagram className="text-accent w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] hover:text-secondary cursor-pointer" />
                </div>
              </div>
              <p className="text-[14px] text-primary font-semibold sm:text-[21px] lg:text-[26px] leading-tight">
                {person.role}
              </p>
              <p className="text-[11px] text-accent max-w-[305px] w-full  sm:text-[15px] lg:text-[19px] lg:max-w-[540px] pt-2">
                Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt...
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-between lg:w-[80%] 3xl:w-[70%] overflow-x-scroll gap-5 pl-2 md:overflow-x-hidden">
        {persons.map((person, index) => (
          <div
            className={
              selectedPerson === index
                ? "flex flex-col gap-1 p-2 border-secondary border rounded items-center min-w-[130px] w-full cursor-pointer hover:brightness-90"
                : "flex flex-col gap-1 p-2 border-button border rounded items-center min-w-[130px] w-full cursor-pointer hover:brightness-90"
            }
            onClick={() => setSelectedPerson(index)}
          >
            <p
              className={
                selectedPerson === index
                  ? "text-[11px] leading-tight sm:text-[14px] lg:text-[16px] "
                  : "text-[11px] leading-tight sm:text-[14px] lg:text-[16px] text-accent"
              }
            >
              {person.name}
            </p>
            <p
              className={
                selectedPerson === index
                  ? "text-[9px] sm:text-[11px] lg:text-[12px] leading-tight  text-primary"
                  : "text-[9px] sm:text-[11px] lg:text-[12px] leading-tight  text-accent"
              }
            >
              {person.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
