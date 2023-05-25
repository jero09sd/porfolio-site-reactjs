import React from "react";
import Typed from "react-typed";
import BGprofile from "../images/ProfileGrayscalebg.png";
import aProfile from "../images/96870420_1448649968648130_7568566325056897024_n.jpg";

const Home = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="max-w-screen-2xl">
        <div className="min-h-screen flex h-max w-screen">
          <div className="flex flex-col w-full md:w-1/2 px-10">
            <h3 className="text-gray-900 text-3xl mt-20 md:mt-96 font-extrabold">
              HELLO THERE!
            </h3>
            <span className="font-bold">
              THANK YOU FOR TAKING THE TIME TO CHECK MY PORTFOLIO.
            </span>
            <img src={aProfile} className="md:hidden" />
            <div>
              <h1 className="md:text-5xl text-xl font-extrabold md:py-10">
                {" "}
                I AM{" "}
                <Typed
                  strings={[
                    "JERWYN PELOTON CUBAO",
                    " A GRAPHIC ARTIST",
                    "A FULL STACK WEB DEVELOPER",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </h1>
            </div>
            <p className="text-gray-900 md:w-[40rem] text-sm md:text-lg mb-10 font-semibold">
              A passionate web developer who loves building beautiful and
              functional websites.With a passion for innovation, I'm always
              excited to take on new challenges and help clients achieve their
              goals. I'm dedicated to producing top-notch work and going above
              clients expectations. I have faith in my abilities to design
              unique solutions that satisfy the particular needs of each client
              and assist them in achieving their business goals.
            </p>
            <div></div>
          </div>
          <div className="md:w-1/2 -z-0">
            <img
              src={BGprofile}
              className="xl:block hidden overflow-hidden h-screen sticky"
            />
            <img
              src={aProfile}
              className="md:block xl:hidden items-center hidden sticky h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
