import React from "react";
import project1Img from "@/images/projects/project1.png";
import project2Img from "@/images/projects/project2.png";
import project3Img from "@/images/projects/project3.png";
import project4Img from "@/images/projects/project4.png";
import project5Img from "@/images/projects/project5.png";
import project6Img from "@/images/projects/project6.png";
import Image from "next/image";
interface Props {}

const Projects = () => {
  return (
    <section className="padding w-full my-[100px] md:my-[200px]" id="projekty">
      <div className="container mx-auto">
        <p className="text-secondary text-[30px] sm:text-[35px] lg:text-[40px] 2xl:text-[50px] pb-5 md:pb-10">
          Nasze ostatnie realizacje
        </p>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src={project1Img}
                width={600}
                height={360}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-button bg-white opacity-0 hover:opacity-100 ">
                <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
                  Wykończenie Mieszkania
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Elegancka Harmonia
                </h1>
                <p className="leading-relaxed">
                  W tym projekcie stworzyliśmy harmonijną przestrzeń, łącząc
                  nowoczesność z klasycznym urokiem.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src={project2Img}
                width={601}
                height={361}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-button bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
                  Zaprojektowanie Salonu
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Światło i Ciepło
                </h1>
                <p className="leading-relaxed">
                  W tym projekcie stworzyliśmy harmonijną przestrzeń, łącząc
                  nowoczesność z klasycznym urokiem.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src={project3Img}
                width={603}
                height={363}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-button bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
                  Wykończenie Łazienki
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Oaza Spokoju
                </h1>
                <p className="leading-relaxed">
                  W tym projekcie stworzyliśmy harmonijną przestrzeń, łącząc
                  nowoczesność z klasycznym urokiem.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src={project4Img}
                width={602}
                height={362}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-button bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
                  Wykończenie Mieszkania
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Elegancka Harmonia
                </h1>
                <p className="leading-relaxed">
                  W tym projekcie stworzyliśmy harmonijną przestrzeń, łącząc
                  nowoczesność z klasycznym urokiem.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src={project5Img}
                width={605}
                height={365}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-button bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
                  Wykończenie Mieszkania
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Elegancka Harmonia
                </h1>
                <p className="leading-relaxed">
                  W tym projekcie stworzyliśmy harmonijną przestrzeń, łącząc
                  nowoczesność z klasycznym urokiem.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src={project6Img}
                width={606}
                height={366}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-button bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm font-medium text-primary mb-1">
                  Wykończenie Mieszkania
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Elegancka Harmonia
                </h1>
                <p className="leading-relaxed">
                  W tym projekcie stworzyliśmy harmonijną przestrzeń, łącząc
                  nowoczesność z klasycznym urokiem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
