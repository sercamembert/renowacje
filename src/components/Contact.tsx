import React from "react";

interface Props {}

const Contact = () => {
  return (
    <div className="w-full padding flex flex-col my-[100px] md:my-[200px] relative">
      <p className="text-secondary text-[30px] sm:text-[35px] lg:text-[40px] 2xl:text-[50px] pb-4">
        Darmowa <b>wycena</b>
      </p>
      <p className="text-primary pb-5 md:pb-10 text-[12px] md:text-[21px]">
        Voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary focus:border-secondary"
          placeholder="Imię i nazwisko"
        />
        <input
          className="border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary focus:border-secondary"
          placeholder="Miejscowość"
        />
        <input
          className="border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary focus:border-secondary"
          placeholder="Numer telefonu"
        />
        <input
          className="border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary focus:border-secondary"
          placeholder="Email"
        />
        <input
          className="border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary focus:border-secondary"
          placeholder="Co możemy dla ciebie zrobić?"
        />
        <input
          className="border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary focus:border-secondary"
          placeholder="Jaki masz budżet?"
        />
        <textarea
          className="sm:col-span-2 border border-primary rounded p-3 text-[12px] md:text-[19px] sm:max-w-full text-secondary placeholder:text-secondary resize-y min-h-[100px] lg:min-h-[200px]"
          placeholder="Wiadomość"
        />
      </div>

      <div className="flex items-center pt-6 gap-3">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-[22px] h-[22px] text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-1 cursor-pointer"
        />
        <label
          htmlFor="link-checkbox"
          className="text-primary text-[12px] lg:text-[16px]"
        >
          Treść zgody mówiącej o tym, że użytkownik zgadza się na kontakt
          mailowy lub telefoniczny w celu przesłania oferty.
        </label>
      </div>
      <div className="absolute -bottom-14 lg:-bottom-16 bg-secondary text-white py-2 px-3 md:px-5 lg:py-3 uppercase rounded font-medium text-[12px] md:text-sm hover:brightness-75 cursor-pointer">
        darmowa wycena
      </div>
    </div>
  );
};

export default Contact;
