import React from "react";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import aProfile from "../images/96870420_1448649968648130_7568566325056897024_n.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="max-w-screen-2xl">
        <div className="min-h-screen flex  items-center justify-center h-max w-screen">
          <div className="flex flex-col my-16">
            <div class="py-16 relative flex ">
              <div class="container m-auto px-6 text-[#000300] md:px-12 xl:px-6">
                <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div class="md:5/12 lg:w-5/12 text-center ">
                    <img
                      src={aProfile}
                      alt="image"
                      loading="lazy"
                      width=""
                      height=""
                    />
                    <h1 className=" text-3xl font-extrabold">
                      JERWYN PELOTON CUBAO
                    </h1>
                    <h2 className=" text-xl font-bold">
                      Full Stacked Web Developer
                    </h2>
                  </div>
                  <div class="md:7/12 lg:w-6/12">
                    <h2 class="text-2xl font-bold md:text-4xl"></h2>
                    <p class="mt-1 ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum omnis voluptatem accusantium nemo perspiciatis
                      delectus atque autem! Voluptatum tenetur beatae unde
                      aperiam, repellat expedita consequatur! Officiis id
                      consequatur atque doloremque!
                    </p>
                    <p class="mt-4 ">
                      {" "}
                      Nobis minus voluptatibus pariatur dignissimos libero
                      quaerat iure expedita at? Asperiores nemo possimus
                      nesciunt dicta veniam aspernatur quam mollitia.
                    </p>
                    <div className="mt-10">
                      <Link to="/ContactMe">
                        {" "}
                        <button
                          className="
                                            relative rounded-md m-4 text-gray-700 hover:text-black font-bold text-center p-2 px-4 bg-[#fff]  transition-all duration-500
                                            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fff] before:transition-all
                                            before:duration-300 before:opacity-20 before:hover:opacity-0 before:hover:scale-50
                                            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                                            after:border after:border-black/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100
                        "
                        >
                          Contact Me
                        </button>
                      </Link>
                    </div>

                    <hr
                      className="my-10"
                      style={{
                        color: "#000300",
                        backgroundColor: "#000300",
                        height: 5,
                      }}
                    />
                    <div className=" flex">
                      <div className="mx-5">
                        <Link to={"https://www.facebook.com/GMjero7"}>
                          {" "}
                          <FaFacebookSquare size={30} />
                        </Link>
                      </div>
                      <div className="mx-5">
                        <Link to={"https://www.instagram.com/jerwyn.c/"}>
                          <FaInstagramSquare size={30} />
                        </Link>
                      </div>
                      <div className="mx-5">
                        <Link to={"https://github.com/jero09sd"}>
                          {" "}
                          <FaGithubSquare size={30} />
                        </Link>
                      </div>
                      <div className="mx-5">
                        <Link to={"https://www.linkedin.com/in/jerwyncubao/"}>
                          {" "}
                          <FaLinkedin size={30} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex py-2 ">
              <div className="w-full">
                <hr
                  className="my-10"
                  style={{
                    color: "#000300",
                    backgroundColor: "#000300",
                    height: 1
                  }}
                />
                <h1 className="mx-10 text-3xl font-extrabold">MY SKILLS</h1>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full">
                  <div className="mt-10 font-bold text-xl">
                    <h1> FRONT END SKILLS</h1>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>html</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 190 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>css</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 160 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>tailwindcss</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 170 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>reactjs</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-red-700 h-2.5 rounded-full"
                          style={{ width: 80 }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 font-bold text-xl">
                    <h1> BACK END SKILLS</h1>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>laravel</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-red-700 h-2.5 rounded-full"
                          style={{ width: 80 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>php</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-red-700 h-2.5 rounded-full"
                          style={{ width: 30 }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 font-bold text-xl">
                    <h1> OTHER SKILLS</h1>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>photoshop</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 190 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>illustrator</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 170 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>microsoft word</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 190 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>microsoft excel</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 100 }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 font-bold text-xl">
                    <h1> SOFT SKILLS</h1>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>communication</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 90 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>working with a team</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 170 }}
                        ></div>
                      </div>
                    </div>
                    <div className="uppercase mt-5 flex flex-col text-base">
                      <h2>time management</h2>

                      <div class="w-[200px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: 190 }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
