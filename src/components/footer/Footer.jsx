import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0416] text-white">
            <div className="max-w-6xl mx-auto  py-10">

                {/* top border */}
                <div className="border-t border-white/10 pb-4 pt-2 "></div>

                {/* Top section */}
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand / About */}
                    <div>
                        <h2 className="text-lg font-semibold text-[#c770f0]">
                            Manish
                        </h2>
                        <p className="mt-3 text-sm text-white leading-relaxed">
                            Passionate Full Stack developer focused on building clean, scalable and
                            user-friendly web applications.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="pl-20">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Navigation
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-[#c770f0] transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="text-gray-300 hover:text-[#c770f0] transition"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/resume"
                                    className="text-gray-300 hover:text-[#c770f0] transition"
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Connect
                        </h3>

                        <div className="mt-4 flex gap-2">
                            {/* GitHub */}
                            <div className="relative group">
                                <a
                                    href="https://github.com/Manii0022"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white
                                     text-[#700c86] transition hover:scale-110 hover:shadow-[0_0_10px_#87209e]">
                                    <AiFillGithub />
                                </a>

                                <Bubble label="GitHub" />
                            </div>

                            {/* Twitter */}
                            <div className="relative group">
                                <a
                                    href="https://x.com/ManishRajp6547"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white 
                                    text-[#700c86] transition hover:scale-110 hover:shadow-[0_0_10px_#87209e]">
                                    <AiOutlineTwitter />
                                </a>

                                <Bubble label="Twitter / X" />
                            </div>

                            {/* LinkedIn */}
                            <div className="relative group">
                                <a
                                    href="https://www.linkedin.com/in/manish-lodhi-87392a295/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white 
                                            text-[#700c86] transition hover:scale-110 hover:shadow-[0_0_10px_#87209e]">
                                    <FaLinkedinIn />
                                </a>

                                <Bubble label="LinkedIn" />
                            </div>

                            {/* Instagram */}
                            <div className="relative group">
                                <a
                                    href="https://www.instagram.com/manissh_0224"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white
                                     text-[#700c86] transition hover:scale-110 hover:shadow-[0_0_10px_#87209e]">
                                    <AiFillInstagram />
                                </a>

                                <Bubble label="Instagram" />
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <a
                                    href="mailto:mail@gmail.com"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white
                                     text-[#700c86] transition hover:scale-110 hover:shadow-[0_0_10px_#87209e]"
                                    aria-label="Email">
                                    <MdEmail />
                                </a>

                                <Bubble label="manishlodhi0224@gmail.com" />
                            </div>
                        </div>
                    </div>


                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400">
                    © {year} Manish. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

function Bubble({ label }) {
    return (
        <div
            className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2
                 scale-75 opacity-0
                 group-hover:scale-100 group-hover:opacity-100
                 transition-all duration-300 ease-out"
        >
            <div
                className={`relative bg-[#c770f0] text-black ${label === "manishlodhi0224@gmail.com" ? "text-xl" : "text-s"} font-medium
                   px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap`}
            >
                {label}
                <span
                    className="absolute left-1/2 -bottom-1.5 -translate-x-1/2
                     w-3 h-3 bg-[#c770f0] rotate-45"
                />
            </div>
        </div>
    );
}


export default Footer;
