import React from "react";
// Replaced react-icons with Lucide React
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import Type from "../Type";
import homeLogo from "../../assets/home-main.svg";
import myImage from "../../assets/myImage.jpg";
import myImage2 from "../../assets/myImage2.jpg";
import "../../index.css"


function Home() {
  return (

    <>
      <div className="flex">
        <div className=" text-white w-[60%]">
          <h1 className="text-3xl">
            Hi There!
          </h1>
          <p className="text-[100px]">I'm {" "}
            <span className=" main-name">
              Manish
            </span>
          </p>
          <Type />
        </div>

        <div>
          <img
            src={homeLogo}
            alt="home pic"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>

      <div className="flex mt-20">
        <div className="text-white w-[60%] p-5">
          <h1 className="text-[45px] text-center">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className=" pt-12.5 text-justify text-[20px]">
            I’m a Software Engineer who enjoys transforming ideas into reliable, scalable, and secure products.
            Over time, I’ve worked across multiple technologies and discovered a strong interest in
            designing high-performance backend systems and building clean, intuitive user experiences.
            <br />
            <br />
            I’m proficient in
            <i>
              <b className="purple">{" "}Java, Python, C++, JavaScript and React.Js{" "}</b>
            </i>
            — and comfortable working across both{" "}
            <b className="purple">backend</b> and{" "}
            <b className="purple">frontend</b> stacks.
            <br />
            <br />
            My key areas of interest include{" "}
            <i>
              <b className="purple">backend system design, web application development, AI-driven solutions,{" "}</b>
            </i>
            and exploring new technologies.
            <br />
            <br />
            Whenever possible, I enjoy building end-to-end projects using modern frameworks like{" "}
            <i>
              <b className="purple">Spring Boot</b> and{" "}
              <b className="purple">React.js</b>.
            </i>

          </p>
        </div>
        <div className=" pl-20 pt-20">
          <img
            src={myImage}
            alt="my image"
            className="rounded-full"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>

    </>

  );
}

export default Home