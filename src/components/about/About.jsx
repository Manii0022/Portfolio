import AboutCard from "./TechStack";
import { ImPointRight } from "react-icons/im";
import about from "../../assets/about.png";
import TechStack from "./TechStack";


function About() {
    return (
        <>

            <div className="flex ">
                <div className=" space-y-4 text-white text-justify text-[20px] flex-4">
                    <h1 className="text-4xl text-center pb-10">
                        Know Who <strong className="purple">I'M</strong>
                    </h1>
                    <p className="text-justify leading-relaxed">
                        Hi everyone! I’m{" "}
                        <span className="text-[#c770f0] font-medium">Manish</span>{" "}
                        from{" "}
                        <span className="text-[#c770f0] font-medium">
                            Ghaziabad, India
                        </span>.
                        <br />
                        I’m currently working as a{" "}
                        <span className="text-[#c770f0] font-medium">
                            Software Developer
                        </span>{" "}
                        at{" "}
                        <span className="text-[#c770f0] font-medium">Avis E Solutions Pvt Ltd</span>
                        <br />
                        I am currently pursuing B.Tech in{" "}
                        <span className="text-[#c770f0] font-medium">
                            Computer Science and Engineering (AI)
                        </span>{" "}
                        from{" "}
                        <span className="text-[#c770f0] font-medium">ABES Institute of Technology, Ghaziabad</span>.
                        <br />
                        <br />
                        Outside of coding, I love engaging in activities that keep me
                        creative and inspired:
                    </p>

                    <ul className="space-y-2 pl-2">
                        <li className="flex items-center gap-2">
                            <ImPointRight className="text-[#c770f0]" />
                            <span>Playing Games</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ImPointRight className="text-[#c770f0]" />
                            <span>Sports</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ImPointRight className="text-[#c770f0]" />
                            <span>Traveling and Exploring New Places</span>
                        </li>
                    </ul>

                    <p className="text-[rgb(155,126,172)] italic">
                        “Strive to build things that make a difference!”
                    </p>

                    <footer className="text-sm text-gray-400">
                        — Soumyajit
                    </footer>
                </div>

                <div className="items-center align-middle justify-center  flex flex-3">
                    <img src={about} alt="about" className="img-fluid h-auto w-150" />

                </div>
            </div>
            <TechStack/>

        </>
    )

}
export default About;
