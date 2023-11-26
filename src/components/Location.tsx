import React from "react";

interface Props {}

const Location = () => {
  return (
    <section className="w-full padding my-[100px] md:my-[200px] text-gray-600 body-font relative">
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="w-full min-h-[500px] lg:min-h-[700px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9297.665262730998!2d18.45123328174492!3d54.36729456264955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd9e3bd14fd48f%3A0x646452570e63f079!2sBysewo%2C%2080-298%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1701003015173!5m2!1spl!2spl"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-secondary tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Rzeszów, ul. Polskiego Czerwonego Krzyża 11
              </p>
            </div>
            <div className="lg:w-1/2 px-3 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-secondary tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-secondary tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
