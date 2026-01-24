import Go from "../../assets/TechIcons/go.svg";
import C from "../../assets/TechIcons/C++.svg";
import Javascript from "../../assets/TechIcons/Javascript.svg";
import Node from "../../assets/TechIcons/Node.svg";
import ReactIcon from "../../assets/TechIcons/React.svg";
import HaskellIcon from "../../assets/TechIcons/Haskell.svg";
import Java from "../../assets/TechIcons/Java.svg";
import Python from "../../assets/TechIcons/Python.svg";
import Typescript from "../../assets/TechIcons/Typescript.svg";
import Git from "../../assets/TechIcons/Git.svg";
import Firebase from "../../assets/TechIcons/Firebase.svg";
import Redis from "../../assets/TechIcons/Redis.svg";
import Docker from "../../assets/TechIcons/Docker.svg";
import Mongo from "../../assets/TechIcons/Mongo.svg";
import SQL from "../../assets/TechIcons/SQL.svg";
import Kubernates from "../../assets/TechIcons/Kubernates.svg";
import Redux from "../../assets/TechIcons/Redux.svg";
import Tailwind from "../../assets/TechIcons/Tailwind.svg";
import MUI from "../../assets/TechIcons/MUI.svg";
import Postman from "../../assets/TechIcons/Postman.svg";
import AWS from "../../assets/TechIcons/AWS.svg";
import Kafka from "../../assets/TechIcons/Kafka.svg";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import "../../index.css";


function TechStack() {

    return (
        <>

            <div className=" flex flex-wrap justify-center pb-12" >
                <div className="tech-icons">
                    <img src={C} alt="C++" />
                    <div className="tech-icons-text">C++</div>
                </div>
                <div className="tech-icons">
                    <img src={Javascript} alt="javascript" />
                    <div className="tech-icons-text">Javascript</div>
                </div>
                <div className="tech-icons">
                    <img src={Typescript} alt="typescript" />
                    <div className="tech-icons-text">Javascript</div>
                </div>
                <div className="tech-icons">
                    <img src={Go} alt="go" />
                    <div className="tech-icons-text">Go</div>
                </div>
                <div className="tech-icons">
                    <img src={Node} alt="node" />
                    <div className="tech-icons-text">Node.Js</div>
                </div>
                <div className="tech-icons">
                    <img src={ReactIcon} alt="react" />
                    <div className="tech-icons-text">React.Js</div>
                </div>
                <div className="tech-icons">
                    <SiSolidity fontSize={"24px"} />
                    <div className="tech-icons-text">Solidity</div>
                </div>
                <div className="tech-icons">
                    <img src={Mongo} alt="mongoDb" />
                    <div className="tech-icons-text">Mongo DB</div>
                </div>
                <div className="tech-icons">
                    <img src={Redux} alt="redux" />
                    <div className="tech-icons-text">Redux</div>
                </div>

                <div className="tech-icons">
                    <SiNextdotjs fontSize={"24px"} />
                    <div className="tech-icons-text">Next.js</div>
                </div>
                <div className="tech-icons">
                    <img src={Git} alt="git" />
                    <div className="tech-icons-text">Git</div>
                </div>
                <div className="tech-icons">
                    <img src={Firebase} alt="firebase" />
                    <div className="tech-icons-text">Firebase</div>
                </div>
                <div className="tech-icons">
                    <img src={Redis} alt="redis" />
                    <div className="tech-icons-text">Redis</div>
                </div>
                <div className="tech-icons">
                    <img src={Docker} alt="docker" />
                    <div className="tech-icons-text">Docker</div>
                </div>
                <div className="tech-icons">
                    <img src={Kubernates} alt="kubernetes" />
                    <div className="tech-icons-text">Kubernetes</div>
                </div>

                <div className="tech-icons">
                    <img src={SQL} alt="SQL" />
                    <div className="tech-icons-text">Postgresql</div>
                </div>

                <div className="tech-icons">
                    <img src={Python} alt="Python" />
                    <div className="tech-icons-text">Python</div>
                </div>
                <div className="tech-icons">
                    <img src={Java} alt="haskell" />
                    <div className="tech-icons-text">Java</div>
                </div>
                <div className="tech-icons">
                    <img src={HaskellIcon} alt="haskell" />
                    <div className="tech-icons-text">Haskell</div>
                </div>

                <div className="tech-icons">
                    <img src={Tailwind} alt="tailwind" />
                    <div className="tech-icons-text">Tailwind CSS</div>
                </div>

                <div className="tech-icons">
                    <img src={MUI} alt="mui" />
                    <div className="tech-icons-text">Material UI</div>
                </div>

                <div className="tech-icons">
                    <img src={Postman} alt="Postman" />
                    <div className="tech-icons-text">Postman</div>
                </div>

                <div className="tech-icons">
                    <FaRust fontSize={"24px"} />
                    <div className="tech-icons-text">Rust</div>
                </div>

                <div className="tech-icons">
                    <img src={AWS} alt="Postman" className="tech-icon-images" />
                    <div className="tech-icons-text">AWS</div>
                </div>

                <div className="tech-icons">
                    <img src={Kafka} alt="Kafka" className="tech-icon-images" />
                    <div className="tech-icons-text">Kafka</div>
                </div>
            </div>

        </>

    );
}

export default TechStack;
