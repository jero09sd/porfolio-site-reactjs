import React from "react";
import Typed from "react-typed";
import BGprofile from '../images/Profilebg.png'
import aProfile from "../images/96870420_1448649968648130_7568566325056897024_n.jpg";

const Home = () => {
  return (
    <div className="flex">
      <div className="max-w-screen-2xl">
        <div className="min-h-screen flex h-max w-screen">
          <div className="flex flex-col w-full md:w-1/2 px-10">
            <h3 className="text-gray-900 text-3xl mt-20 md:mt-96 font-extrabold">
              HELLO THERE!
            </h3>
            <span className="font-bold">
              THANK YOU FOR TAKING THE TIME TO CHECK MY PORTFOLIO.
            </span>
            <img src={aProfile} className="md:hidden"/>
            <div>
              <h1 className="md:text-5xl text-xl font-extrabold md:py-10"> I AM  <Typed
                strings={["JERWYN PELOTON CUBAO"," A GRAPHIC ARTIST","A FULL STACK WEB DEVELOPER"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              /></h1>
            
            </div>
            <p className="text-gray-900 text-sm md:text-lg mb-10 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus esse nam est ullam ducimus alias consequuntur
              recusandae eaque, vel, voluptates, in molestiae? Aut perspiciatis
              pariatur consequatur inventore repudiandae in nulla architecto!
              Dicta rerum inventore voluptatibus assumenda totam, facere sint
              dolore similique ab? Neque veniam obcaecati blanditiis quidem
              voluptates illo voluptatibus.
            </p>
            <div></div>
          </div>
          <div className="md:w-1/2">
            <img src={BGprofile} className="md:block hidden w-full opacity-70"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
