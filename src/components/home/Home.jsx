import React from "react";
// Replaced react-icons with Lucide React
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import Type from "../Type";
import homeLogo from "../../assets/react.svg";


function Home() {
  return (
    <section>
      
      <div className="w-full relative z-[-1] bg-top bg-no-repeat pb-[30px] pt-[30px]" id="home">

        <Type/>

        <div className="container mx-auto px-4 py-36 text-white text-left">
          <div className="flex flex-wrap items-center">

            <div className="w-full md:w-7/12 pt-20">
              <h1 className="text-4xl md:text-[2.4em] pl-12 pb-4 font-bold">
                Hi There!{" "}
                <span className="inline-block origin-[70%_70%] animate-wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-4xl md:text-[2.5em] pl-11 font-semibold">
                I'M
                <strong className="text-[#cd5ff8] ml-2"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div className="p-12 text-left">
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="w-full md:w-5/12 pb-5 flex justify-center md:justify-end">
              <img
                src={homeLogo}
                alt="home pic"
                className="max-w-full h-auto max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>


          <div className="w-full text-center text-white pt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Me On</h1>
            <p className="mb-6">
              Feel free to <span className="text-accent">connect </span>with me
            </p>
            <ul className=" text-black text-2xl flex  justify-center gap-x-8 list-none p-0 relative ">
              <li>instagram</li>

              <li>linkedin</li>

              <li>github</li>

              <li>email</li>
            </ul>
          </div>
    </section>
  );
}

// Helper component to replicate the complex "glowing" hover effect from your CSS
const SocialLink = ({ href, children }) => {
  return (
    <li className="inline-block">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        // .home-social-icons styling replicated:
        // bg-white/95 (approx rgba 0.972), text-[#700c86]
        // Hover: scale 1.1, text #87209e, shadow glowing effect
        className="
          relative flex items-center justify-center 
          w-10 h-10 rounded-full 
          bg-white/95 text-[#700c86] 
          transition-all duration-500 ease-in-out
          hover:text-[#87209e] hover:scale-110 hover:shadow-[0_0_5px_#87209e]
          before:content-[''] before:absolute before:inset-0 before:bg-[#68187a] 
          before:rounded-full before:scale-90 before:-z-10 before:transition-all before:duration-500
          hover:before:scale-110 hover:before:shadow-[0_0_15px_#801f95]
        "
      >
        {children}
      </a>
    </li>
  );
};

export default Home;