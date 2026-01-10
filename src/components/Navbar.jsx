import { Link, NavLink } from 'react-router-dom'
import Home from './home/Home';
import Project from './project/Projects';
import About from './about/About';
import Resume from './resume/Resume';
import {House, FolderGit2, FileText, User } from 'lucide-react';



function NavBar() {

    const navItems = [
        { path: "/", label: "Home", icon: House },
        { path: "/about", label: "About", icon: User },
        { path: "/projects", label: "Projects", icon: FolderGit2 },
        { path: "/resume", label: "Resume", icon: FileText },
    ];

    return (
        <>

        </>
    )
}

export default NavBar;
