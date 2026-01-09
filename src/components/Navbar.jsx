import { Link, NavLink } from 'react-router-dom'



function NavBar() {

    const navItems = [
        { path: "/", label: "Home", icon: Home },
        { path: "/about", label: "About", icon: User },
        { path: "/projects", label: "Projects", icon: FolderGit2 },
        { path: "/resume", label: "Resume", icon: FileText },
    ];

    return (
        <><nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-2xl font-bold text-primary font-mono">
                        {"<Dev/>"}
                    </Link>

                    <div className="flex items-center gap-1 md:gap-2">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
 
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 font-mono text-sm
                    ${isActive
                                            ? "bg-primary/20 text-primary"
                                            : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span className="hidden md:inline">{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;
