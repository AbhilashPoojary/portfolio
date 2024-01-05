import React from "react";
import {
  Home,
  Flame,
  Code,
  Youtube,
  Instagram,
  Linkedin,
  Github,
  Layers,
  Video,
} from "lucide-react";

export default function SideNavs() {
  return (
    <div className="p-5 rounded-md bg-card mt-5">
      <div>
        <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
          <Home />
          <span>Home</span>
        </div>
        <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
          <Flame />
          <span>Trending</span>
        </div>
        <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
          <Code />
          <span>Snippets</span>
        </div>
        <div className="text-gray-400 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
          <Video />
          <span>Videos</span>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="text-gray-400">Socials</h5>
        <div>
          <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
            <Instagram stroke="#b5179e" />
            <span>Instagram</span>
          </div>
          <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
            <Github stroke="#2a9d8f" />
            <span>Github</span>
          </div>
          <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
            <Code stroke="#e63946" />
            <span>Youtube</span>
          </div>
          <div className="text-gray-400 mb-3 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
            <Layers stroke="#f77f00" />
            <span>Stackoverflow</span>
          </div>
          <div className="text-gray-400 p-3 flex gap-3 transition-transform transform-gpu hover:-translate-y-1 cursor-pointer">
            <Linkedin stroke="#0277b5" />
            <span>Linkedin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
