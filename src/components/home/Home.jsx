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
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" >
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            I'M
            <strong className="main-name"> MANISH</strong>
          </h1>

          <div style={{ padding: 50, textAlign: "left" }}>
            <Type />
          </div>

        </div>

        <div className="">
          <img
            src={homeLogo}
            alt="home pic"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>

      <div className="flex mt-20">
        <div className="text-white w-[60%] p-5">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I’m a Software Engineer who loves transforming ideas into
            reliable, scalable products. Over time, I’ve explored several
            technologies and found my passion in building high-performance
            systems and intuitive user experiences.
            <br />
            <br />
            I’m proficient in
            <i>
              <b className="purple">
                {" "}
                JavaScript, C++, Rust, Node.js, and Java{" "}
              </b>
            </i>
            — and I enjoy working across both backend and frontend stacks.
            <br />
            <br />
            My key areas of interest include developing
            <i>
              <b className="purple">
                {" "}
                Web Applications, Blockchain Solutions,{" "}
              </b>
            </i>
            and exploring new ways to bridge on-chain and off-chain systems.
            <br />
            <br />
            Whenever possible, I love building projects with
            <b className="purple"> Node.js </b> and modern frameworks like{" "}
            <i>
              <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>.
            </i>
          </p>
        </div>
        <div className=" pl-20 pt-20">
          <img
            src={myImage}
            alt="home pic"
            className="rounded-full"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>

    </>

  );
}

export default Home