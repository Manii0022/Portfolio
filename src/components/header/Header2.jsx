import { NavLink } from "react-router-dom";
import { House, FolderGit2, FileText, User } from "lucide-react";
import { useEffect, useState } from "react";

function Header2() {
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { path: "/", label: "Home", icon: "House" },
        { path: "about", label: "About", icon: "User" },
        { path: "projects", label: "Projects", icon: "FolderGit2" },
        { path: "resume", label: "Resume", icon: "FileText" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full h-20
        flex justify-between items-center px-35
        transition-all duration-300 ease-out
        ${scrolled
                    ? "bg-[#1b1a2ea9] shadow-lg backdrop-blur-md"
                    : "bg-transparent shadow-none backdrop-blur-0"
                }`}
        >
            <span className="text-2xl text-white font-bold">Portfolio</span>

            <nav className="flex items-center space-x-8">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive ? "text-[#be50f4]" : "text-white hover:text-[#be50f4]"
                            }`
                        }
                    >
                        <div className="group flex flex-col">
                            <div className="flex items-center">
                                {item.icon === "House" && <House />}
                                {item.icon === "FolderGit2" && <FolderGit2 />}
                                {item.icon === "FileText" && <FileText />}
                                {item.icon === "User" && <User />}

                                <span className="pl-2 text-[20px]">{item.label}</span>
                            </div>

                            {/* Hover underline (Bootstrap ::after equivalent) */}
                            <div
                                className="h-1 rounded-2xl bg-[#be50f4] transform origin-left scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-300"
                            />
                        </div>
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}


export default Header2;
