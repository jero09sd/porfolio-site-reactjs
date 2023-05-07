import React from "react";

const Projects = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="max-w-screen-2xl">
        <div className="min-h-screen flex justify-center h-max w-screen">
          <div className="flex flex-col text-[#000300] justify-center items-center">
            <h1 className="uppercase text-4xl py-20 font-extrabold">projects</h1>
            <div>
              <section class="mx-10">
                <div class="container px-6 py-10 mx-auto">
                  <h1 class="text-3xl font-extrabold capitalize lg:text-4xl">
                    BILIBILI Clone
                  </h1>

                  <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img
                      class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                      src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <p class="text-sm text-gray-900 font-bold uppercase">
                        category
                      </p>

                      <a
                        href="#"
                        class="block mt-4 text-2xl font-semibold md:text-3xl"
                      >
                        All the features you want to know
                      </a>

                      <p class="mt-3 text-sm  md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure veritatis sint autem nesciunt, laudantium quia
                        tempore delect
                      </p>

                      <a
                        href="#"
                        class="inline-block mt-2 text-gray-600 underline hover:text-[#000300]"
                      >
                        Read more
                      </a>

                      <div class="flex items-center mt-6">
                        <img
                          class="object-cover object-center w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt=""
                        />

                        <div class="mx-4">
                          <h1 class="text-m font-extrabold text-gray-900">
                            Jerwyn Peloton Cubao
                          </h1>
                          <p class="text-sm text-gray-800">Lead Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section class="mx-10">
                <div class="container px-6 py-10 mx-auto">
                  <h1 class="text-3xl font-extrabold text-end capitalize lg:text-4xl">
                    BILIBILI Clone
                  </h1>

                  <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    {" "}
                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <p class="text-sm text-gray-900 font-bold uppercase">
                        category
                      </p>

                      <a
                        href="#"
                        class="block mt-4 text-2xl font-semibold md:text-3xl"
                      >
                        All the features you want to know
                      </a>

                      <p class="mt-3 text-sm  md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure veritatis sint autem nesciunt, laudantium quia
                        tempore delect
                      </p>

                      <a
                        href="#"
                        class="inline-block mt-2 text-gray-600 underline hover:text-[#000300]"
                      >
                        Read more
                      </a>

                      <div class="flex items-center mt-6">
                        <img
                          class="object-cover object-center w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt=""
                        />

                        <div class="mx-4">
                          <h1 class="text-m font-extrabold text-gray-900">
                            Jerwyn Peloton Cubao
                          </h1>
                          <p class="text-sm text-gray-800">Lead Developer</p>
                        </div>
                      </div>
                    </div>
                    <img
                      class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                      src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />
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
