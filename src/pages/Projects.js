import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/96870420_1448649968648130_7568566325056897024_n.jpg";
import teambangan from "../images/teambangan.png";
import triestis from "../images/triestes.png";
import BiliBili from "../images/BiliBili.png";

const Projects = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="max-w-screen-2xl">
        <div className="min-h-screen flex justify-center h-max w-screen">
          <div className="flex flex-col text-[#000300] justify-center items-center">
            <h1 className="uppercase text-4xl py-5 pt-20 md:py-20 font-extrabold">
              projects
            </h1>
            <div>
              <section className="mx-10">
                <div className="container px-6 md:py-10 mx-auto">
                  <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                  <Link
                          className="object-cover w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96"
                          to={"https://www.bilibili.tv/en"}
                        >
                    <img
                      className="rounded-xl"
                      src={BiliBili}
                      alt=""
                    />
                    </Link>
                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <Link
                        to={"https://jero09sd.github.io/mini_project-1/"}
                        className="block mt-4 text-2xl font-extrabold md:text-3xl"
                      >
                        BiliBili clone
                      </Link>

                      <p className="mt-3 text-sm  md:text-sm">
                        Created a copy of the{" "}
                        <Link
                          className="hover:text-blue-700 hover:font-bold hover:underline"
                          to={"https://www.bilibili.tv/en"}
                        >
                          BiliBili
                        </Link>{" "}
                        a video streaming website that originated from China and
                        was released Globally a few years ago.
                      </p>

                      <div className="flex items-center mt-6">
                        <img
                          className="object-cover object-center w-10 h-10 rounded-full"
                          src={Profile}
                          alt=""
                        />
                        <div className="mx-4">
                          <h1 className="text-m font-extrabold text-gray-900">
                            Jerwyn Peloton Cubao
                          </h1>
                          <p className="text-sm text-gray-800">
                            Lead Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section className="mx-10">
                <div className="container px-6 py-10 mx-auto">
                  <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    {" "}
                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <Link
                        to={
                          "https://github.com/jero09sd/Breeze-React-LaravelStandAlone.git"
                        }
                        className="block mt-4 text-2xl font-extrabold md:text-3xl"
                      >
                        USER MANAGEMENT
                      </Link>

                      <p className="mt-3 text-sm  md:text-sm">
                        This Project was built with a new feature of Laravel.
                        The Laravel Breeze and React which offers the best of
                        both worlds. Inertiajs bridges the gap between your
                        Laravel application and your modern React frontend,
                        allowing you to build full-fledged, modern frontends
                        using React while leveraging Laravel routes and
                        controllers for routing, data hydration, and
                        authentication — all within a single code repository.
                        With this approach, you can enjoy the full power of both
                        Laravel and React without crippling the capabilities of
                        either tool. This Project was made for my Capstone
                        Presentation, and for my future plans, though I consider
                        this a bit incomplete, I still managed to succesfully
                        make my admin, welcome, and homepages within a week.
                      </p>
                      <div className="flex items-center mt-6">
                        <img
                          className="object-cover object-center w-10 h-10 rounded-full"
                          src={Profile}
                          alt=""
                        />

                        <div className="mx-4">
                          <h1 className="text-m font-extrabold text-gray-900">
                            Jerwyn Peloton Cubao
                          </h1>
                          <p className="text-sm text-gray-800">
                            Lead Developer
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                        to={
                          "https://github.com/jero09sd/Breeze-React-LaravelStandAlone.git"
                        }
                        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                      >
                    <img
                      className="rounded-xl"
                      src={triestis}
                      alt=""
                    /></Link>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section className="mx-10">
                <div className="container px-6 py-10 mx-auto">
                  <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <Link
                      to={"https://github.com/JohnRox00/mini-project-two.git"} className="object-cover w-full lg:mx-6 lg:w-1/2  h-72 lg:h-96">
                      <img className="rounded-xl"
                        src={teambangan}
                        alt=""
                      />
                    </Link>

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <Link
                        to={"https://github.com/JohnRox00/mini-project-two.git"}
                        className="block mt-4 text-2xl font-extrabold md:text-3xl"
                      >
                        PRODUCT MANAGEMENT SYSTEM
                      </Link>

                      <p className="mt-3 text-sm  md:text-sm">
                        Collaborated with a group to make this Product
                        management system that will be used by one of my
                        groupmates for his coffee business. I did my part and
                        made the entire Front End of this website.
                      </p>

                      <div className="flex items-center mt-6">
                        <img
                          className="object-cover object-center w-10 h-10 rounded-full"
                          src={Profile}
                          alt=""
                        />
                        <div className="mx-4">
                          <h1 className="text-m font-extrabold text-gray-900">
                            Jerwyn Peloton Cubao
                          </h1>
                          <p className="text-sm text-gray-800">
                            Front End Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
