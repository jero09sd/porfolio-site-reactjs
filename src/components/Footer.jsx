import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div class="w-full mx-auto">
        <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-[#000300]">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link
              to={"#"}
              class="border-b border-transparent hover:border "
              target="_blank"
            >
              Jerwyn Portfolio
            </Link>
          </span>
          <ul class="flex flex-wrap items-center text-white mt-3 sm:mt-0">
            <li className="mx-5">
              <Link to={"https://www.facebook.com/GMjero7"}>
                {" "}
                <FaFacebookSquare size={30} />
              </Link>
            </li>
            <li className="mx-5">
              <Link to={"https://www.instagram.com/jerwyn.c/"}>
                <FaInstagramSquare size={30} />
              </Link>
            </li>
            <li className="mx-5">
              <Link to={"https://github.com/jero09sd"}>
                {" "}
                <FaGithubSquare size={30} />
              </Link>
            </li>
            <li className="mx-5">
              <Link to={"https://www.linkedin.com/in/jerwyncubao/"}>
                {" "}
                <FaLinkedin size={30} />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
