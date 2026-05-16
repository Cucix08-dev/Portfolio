import { useState } from "react";

export default function Header({ setPage, darkMode, setDarkMode }) {
    const darkClass = darkMode ? "dark" : "light";

    return (
        <header className={darkClass}>
            <div id="nav-title">
                <a
                    id="owner-site"
                    onClick={() => setPage(0)}
                    className={`text ${darkClass}`}
                >
                    Cucix08 Portfolio
                </a>
            </div>

            <nav>
                <ul>
                    <li onClick={() => setPage(0)} className={`nav-buttons ${darkClass}`}>
                        <a>
                            <span className="text">Home</span>
                        </a>
                    </li>

                    <li onClick={() => setPage(1)} className={`nav-buttons ${darkClass}`}>
                        <a>
                            <span className="text">About</span>
                        </a>
                    </li>

                    <li onClick={() => setPage(2)} className={`nav-buttons ${darkClass}`}>
                        <a>
                            <span className="text">Progetti</span>
                        </a>
                    </li>

                    <li onClick={() => setPage(3)} className={`nav-buttons ${darkClass}`}>
                        <a>
                            <span className="text">Contatti</span>
                        </a>
                    </li>

                    <li id="mode" className={`${darkClass}`} onClick={() => setDarkMode(!darkMode)}>
                        <svg
                            id="sole"
                            width="48"
                            height="48"
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                            className={darkClass}
                        >
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

                        <svg
                            id="luna"
                            width="48"
                            height="48"
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: "translateX(10px)" }}
                            className={darkClass}
                        >
                            <path
                                d="M40 20 A40 40 0 1 0 60 100 A25 40 0 1 1 60 20 Z"
                                fill="black"
                                stroke="white"
                                strokeWidth="4"
                            />
                        </svg>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

