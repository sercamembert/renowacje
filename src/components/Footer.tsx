import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

interface Props {}

const Footer = () => {
  return (
    <div className="w-full bg-secondary min-h-[200px] text-white">
      <div className="w-full h-full padding grid grid-cols-3 gap-3 py-10 lg:py-20">
        <div className="flex flex-col gap-2">
          <p className="text-[15px] sm:text-[20px] lg:text-[25px]">
            NAZWA FIRMY
          </p>
          <p className="leading-tight text-[10px] sm:text-[15px] lg:text-[17px]">
            Adres: ul. Projektowa 1 <br />
            99-000 Miasto
          </p>
          <p className="leading-tight text-[10px] sm:text-[15px] lg:text-[17px]">
            NIP: 777 999 88 88 <br /> REGON: 45643137
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[15px] sm:text-[20px] lg:text-[25px]">KONTAKT</p>
          <p className="leading-tight text-[10px] sm:text-[15px] lg:text-[17px]">
            Tel.: 555 666 444 <br />
            Tel.: 551 662 443
          </p>
          <div className="flex gap-1 text-primary">
            <Facebook className="w-[20px] h-[20px]" />
            <Instagram className="w-[20px] h-[20px]" />
            <Linkedin className="w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[15px] sm:text-[20px] lg:text-[25px]">
            KONSULTACJA
          </p>
          <p className="leading-tight text-[10px] sm:text-[15px] lg:text-[17px]">
            Jeżeli nie jesteś pewien, jakich usług potrzebujesz, nasz
            konsultant, wraz ze specjalistą, odwiedza Cię i doradzą, co
            powinieneś zmienić lub zmodyfikować.
          </p>
        </div>
      </div>
      <div className="w-full padding text-xs py-2">
        Strona internetowa wykonana przez outofplace.space
      </div>
    </div>
  );
};

export default Footer;
