import { useState, useRef, useEffect } from "react";

export default function Header({ setPage, darkMode, setDarkMode }) {
    const darkClass = darkMode ? "dark" : "light";
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handlePage = (page) => {
        setPage(page);
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className={darkClass}>
            <div id="nav-title">
                <a id="owner-site" onClick={() => setPage(0)} className={`text ${darkClass}`}>
                    Cucix08 Portfolio
                </a>
            </div>

            <nav>
                <ul>
                    <li onClick={() => handlePage(0)} className={`nav-buttons ${darkClass}`}>
                        <a><span className="text">Home</span></a>
                    </li>
                    <li onClick={() => handlePage(1)} className={`nav-buttons ${darkClass}`}>
                        <a><span className="text">About</span></a>
                    </li>
                    <li onClick={() => handlePage(2)} className={`nav-buttons ${darkClass}`}>
                        <a><span className="text">Progetti</span></a>
                    </li>
                    <li onClick={() => handlePage(3)} className={`nav-buttons ${darkClass}`}>
                        <a><span className="text">Contatti</span></a>
                    </li>

                    <li
                        id="pages"
                        ref={menuRef}
                        className={`nav-buttons ${darkClass}`}
                        style={{ justifyContent: "center", alignItems: "center", position: "relative" }}
                        onClick={(e) => { e.stopPropagation(); setMenuOpen(prev => !prev); }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        {menuOpen && (
                            <ul id="dropdown-menu" className={darkClass} onClick={(e) => e.stopPropagation()}>
                                {["Home", "About", "Progetti", "Contatti"].map((item, index) => (
                                    <li
                                        key={item}
                                        className={darkClass}
                                        onClick={(e) => { e.stopPropagation(); handlePage(index); }}
                                    >
                                        <span className="text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li id="mode" className={`${darkClass} nav-buttons`} onClick={() => setDarkMode(!darkMode)}>
                        <svg id="sole" width="48" height="48" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={darkClass}>
                            <circle cx="60" cy="60" r="20" fill="none" stroke="black" strokeWidth="4" />
                            <line x1="60" y1="10" x2="60" y2="28" stroke="black" strokeWidth="4" />
                            <line x1="60" y1="92" x2="60" y2="110" stroke="black" strokeWidth="4" />
                            <line x1="10" y1="60" x2="28" y2="60" stroke="black" strokeWidth="4" />
                            <line x1="92" y1="60" x2="110" y2="60" stroke="black" strokeWidth="4" />
                            <line x1="25" y1="25" x2="38" y2="38" stroke="black" strokeWidth="4" />
                            <line x1="82" y1="82" x2="95" y2="95" stroke="black" strokeWidth="4" />
                            <line x1="95" y1="25" x2="82" y2="38" stroke="black" strokeWidth="4" />
                            <line x1="25" y1="95" x2="38" y2="82" stroke="black" strokeWidth="4" />
                        </svg>
                        <svg id="luna" width="48" height="48" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translateX(10px)" }} className={darkClass}>
                            <path d="M40 20 A40 40 0 1 0 60 100 A25 40 0 1 1 60 20 Z" fill="black" stroke="white" strokeWidth="4" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </header>
    );
}