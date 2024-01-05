import React from "react";
import {
  Instagram,
  Briefcase,
  ChevronRight,
  Pizza,
  Calculator,
  CloudDrizzle,
  Menu,
} from "lucide-react";

export default function Rightpanel({ active, setActive }) {
  const updateClick = () => {
    console.log(active);
    setActive(!active);
  };
  return (
    <div className="sm:w-full lg:w-4/5">
      <div className="p-5 flex justify-end items-center gap-2">
        <button className="bg-green-300 text-white h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed text-xs py-2 px-4">
          Contact Me
        </button>
        <div className="block lg:hidden cursor-pointer relative z-50">
          <Menu color="#fff" onClick={() => updateClick()} />
        </div>
      </div>
      <div className="banner w-full bg-[url('assets/banner.jpeg')] bg-no-repeat bg-cover">
        <div className="flex justify-center items-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
          <div className="sm:w-full md:w-1/3">
            <div className="rounded-full overflow-hidden flex sm:justify-center md:justify-start">
              <img
                src="src/assets/cover.jpg"
                className="object-cover shadow-md profile-pic h-32 w-32 rounded-full"
              />
            </div>
          </div>
          <div className="sm:w-full md:w-2/3 lg:w-2/3 sm:flex sm:justify-center md:justify-between md:flex">
            <div className="sm:flex sm:flex-col sm:items-center">
              <h3 className="md:text-3xl font-bold text-white">
                Abhilash Poojary
              </h3>
              <p className="md:text-base text-white">abhikanth5@gmail.com</p>
            </div>
            <div className="sm:flex flex-col justify-center">
              <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-card text-white font-semibold text-xs py-2 px-4">
                <Instagram />
                Follow me on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-9">
        <h3 className="text-xl font-medium text-zinc-200">Projects</h3>
        <div className="w-full justify-between mt-3 gap-3 sm:flex-none md:flex lg:flex xl:flex">
          <div className="rounded-lg bg-white overflow-hidden sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 sm:mb-2 md:m-0">
            <div>
              <img
                src="src/assets/chatpage.PNG"
                alt="icon"
                className="shadow-lg h-36 w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-md font-bold">Messenger</h3>
              <div className="flex text-gray-500 text-xs">
                React, Node, Express, Mongodb, boostrap
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white overflow-hidden sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div>
              <img
                src="src/assets/blog.png"
                alt="icon"
                className="shadow-lg h-36 w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-md font-bold">Blog</h3>
              <div className="flex text-gray-500 text-xs">
                React, Node, Express, Mongodb, boostrap
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white overflow-hidden sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div>
              <img
                src="src/assets/eshop.PNG"
                alt="icon"
                className="shadow-lg h-36 w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-md font-bold">E-commerce</h3>
              <div className="flex text-gray-500 text-xs">
                React, Node, Express, Mongodb,tailwind,redux
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white overflow-hidden sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
            <div>
              <img
                src="src/assets/noteapp.PNG"
                alt="icon"
                className="shadow-lg h-36 w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-md font-bold">Online notepad</h3>
              <div className="flex text-gray-500 text-xs">
                React,tailwind,react hooks
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mt-5 gap-5 sm:flex-none md:flex lg:flex xl:flex">
          <div className="sm:w-full md:w-3/4">
            <h3 className="text-xl font-medium mt-2 text-zinc-200">
              What I know
            </h3>
            <div className="gap-3 justify-between w-full mt-3 sm:flex-none md:flex lg:flex xl:flex">
              <div className="rounded bg-card p-5 sm:w-full md:w-1/3">
                <h3 className="text-gray-400 font-medium text-lg tracking-wider">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2">
                    HTML
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2">
                    CSS
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2 border border-blue-500/60">
                    Tailwind
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2">
                    Boostrap
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2 border border-yellow-500/60">
                    Javascript
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2">
                    React Js
                  </div>
                </div>
              </div>
              <div className="rounded bg-card p-5 sm:w-full md:w-1/3">
                <h3 className="text-gray-400 font-medium text-lg tracking-wider">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2 border border-green-500/60">
                    Node Js
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2">
                    Express Js
                  </div>
                </div>
              </div>
              <div className="rounded bg-card p-5 sm:w-full md:w-1/3">
                <h3 className="text-gray-400 font-medium text-lg tracking-wider">
                  Data base
                </h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2 border border-blue-500/60">
                    MongoDB
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2">
                    MySql
                  </div>
                  <div className="rounded-md bg-body text-xs text-gray-400 bg-body p-2 border border-green-500/60">
                    PostgreSQL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-3 sm:w-full md:w-1/4">
            <h3 className="text-xl font-medium text-zinc-200">More Projects</h3>
            <div className="mt-3">
              <div className="flex justify-between items-center text-gray-400">
                <div className="w-1/6">
                  <Briefcase />
                </div>
                <div className="w-3/4">
                  <p className="text-md">React resume builder</p>
                  <p className="font-light text-xs text-gray-500">
                    React Js,React hooks,css
                  </p>
                </div>
                <div className="w-1/6">
                  <ChevronRight />
                </div>
              </div>
              <div className="flex text-gray-400 justify-between mt-3">
                <div>
                  <Pizza />
                </div>
                <div>
                  <p className="text-md">Pizza Cart</p>
                  <p className="font-light text-xs text-gray-500">
                    React Js,redux,redux thunk,Node,Express
                  </p>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="flex justify-between items-center text-gray-400 mt-3">
                <div>
                  <Calculator />
                </div>
                <div>
                  <p className="text-md">React redux expense tracker</p>
                  <p className="font-light text-xs text-gray-500">
                    React Js,React hooks,redux
                  </p>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="flex justify-between items-center text-gray-400 mt-3">
                <div>
                  <CloudDrizzle />
                </div>
                <div>
                  <p className="text-md">Weather info</p>
                  <p className="font-light text-xs text-gray-500">
                    React Js,React hooks,css,bootstrap
                  </p>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
