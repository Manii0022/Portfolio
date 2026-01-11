import { NavLink } from "react-router-dom";
import { House, FolderGit2, FileText, User } from 'lucide-react';

function Header() {

    const navItems = [
        { path: '/', label: "Home", icon: 'House' },
        { path: 'about', label: "About", icon: 'User' },
        { path: 'projects', label: "Projects", icon: 'FolderGit2' },
        { path: 'resume', label: "Resume", icon: "FileText" },
    ]
    return (
        <>

            <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `text-sm font-medium transition-colors 
                                        ${isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"}`}
                    >
                        <div className="group flex flex-col text-white">
                            <div className="flex items-center">
                                <div>
                                    {item.icon === 'House' && <House />}
                                    {item.icon === 'FolderGit2' && <FolderGit2 />}
                                    {item.icon === 'FileText' && <FileText />}
                                    {item.icon === 'User' && <User />}
                                </div>

                                <div className="pl-2 text-[20px]">
                                    {item.label}
                                </div>
                            </div>
                            
                            <div className={`h-1 rounded-4xl group-hover:bg-[#be50f4] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400`}></div>


                        </div>

                    </NavLink>
                ))}
            </nav>
        </>
    )
}

export default Header;