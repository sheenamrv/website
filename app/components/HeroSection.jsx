import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mb-32 mt-14" data-aos="fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div></div>
        <div></div>

        <div className="col-span-1 lg:col-span-4 mt-auto mb-auto flex flex-col justify-center text-center lg:text-left">
          <small className="text-[#577BE6] font-medium text-lg sm:text-xl lg:text-3xl mb-3">
            I'm Sheena Verana.
          </small>
          <h1 className="text-[#577BE6] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            A technical mind with creative finesse
          </h1>
          <Link href={"/#about"}>
            <button className="px-6 py-3 bg-[#2ba1e0] text-[#ffffff] font-medium rounded shadow-lg hover:bg-[#577BE6] mt-4">
              Learn more about me
            </button>
          </Link>
        </div>

        <div className="col-span-1 lg:col-span-4 flex justify-center items-center mt-8 lg:mt-0">
          <Image
            src={`${basePath}/images/cartoon.svg`}
            alt="cartoon image of Sheena"
            width={300}
            height={450}
            className="w-full max-w-[350px] h-auto"
          />
        </div>
      </div>

      <div className="flex justify-center gap-x-10 mt-28">
        <Link href={"https://www.linkedin.com/in/sheenaverana"} target="_blank">
          <Image
            src={`${basePath}/images/linkedin.svg`}
            alt="linkedin logo"
            width={30}
            height={30}
            className="transition-all hover:scale-110"
          />
        </Link>
        <Link href="mailto: smrverana@gmail.com">
          <Image
            src={`${basePath}/images/google.svg`}
            alt="google logo"
            width={30}
            height={30}
            className="transition-all hover:scale-110"
          />
        </Link>
        <Link href={"/#about"}>
          <Image
            src={`${basePath}/images/github.svg`}
            alt="github logo"
            width={30}
            height={30}
            className="transition-all hover:scale-110"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
