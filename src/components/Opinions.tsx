import React from "react";
import faceImg from "@/images/icons/face.png";
import starImg from "@/images/icons/star.png";
import Image from "next/image";
interface Props {}

const Opinions = () => {
  return (
    <div className="padding w-full flex flex-col items-center lg:items-start my-[100px] md:my-[200px]">
      <p className="text-secondary text-[30px] sm:text-[35px] lg:text-[40px] 2xl:text-[50px] pb-5 md:pb-10">
        Co sądzą o nas <b>klienci</b>
      </p>
      <div className="flex flex-col lg:flex-row gap-y-5 gap-x-6 items-center lg:items-start">
        <div className="w-[80%] lg:w-full  border-accent border rounded px-5 py-2 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image
              src={faceImg}
              alt="happy"
              width={35}
              height={35}
              className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px]"
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-secondary leading-tight sm:text-[21px]">
                Jan Nowak
              </p>
              <p className="text-[11px] text-primary leading-tight sm:text-[16px]">
                CEO
              </p>
            </div>
          </div>
          <p className="text-[10px] sm:text-[16px]">
            Lorem ipsum dolorsit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2">
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
          </div>
        </div>
        <div className="w-[80%] lg:w-full  border-accent border rounded px-5 py-2 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image
              src={faceImg}
              alt="happy"
              width={35}
              height={35}
              className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px]"
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-secondary leading-tight sm:text-[21px]">
                Jan Nowak
              </p>
              <p className="text-[11px] text-primary leading-tight sm:text-[16px]">
                CEO
              </p>
            </div>
          </div>
          <p className="text-[10px] sm:text-[16px]">
            Lorem ipsum dolorsit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2">
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
          </div>
        </div>
        <div className="w-[80%] lg:w-full  border-accent border rounded px-5 py-2 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image
              src={faceImg}
              alt="happy"
              width={35}
              height={35}
              className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px]"
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-secondary leading-tight sm:text-[21px]">
                Jan Nowak
              </p>
              <p className="text-[11px] text-primary leading-tight sm:text-[16px]">
                CEO
              </p>
            </div>
          </div>
          <p className="text-[10px] sm:text-[16px]">
            Lorem ipsum dolorsit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2">
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
            <Image
              src={starImg}
              width={21}
              height={21}
              className="w-[12px] h-[12px] sm:w-[21px] sm:h-[21px]"
              alt="star"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
