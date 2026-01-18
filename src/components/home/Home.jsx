import React from "react";
// Replaced react-icons with Lucide React
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import Type from "../Type";


function Home() {
  return (

    <>
      <div>
        <div>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> SOUMYAJIT BEHERA</strong>
          </h1>

          <div style={{ padding: 50, textAlign: "left" }}>
            <Type />
          </div>

        </div>

        <div>
          <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
        </div>
      </div>

    </>

  );
}

export default Home