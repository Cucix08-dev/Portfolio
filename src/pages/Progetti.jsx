import { useState, useEffect } from "react";
import "./progetti.css";

export default function Progetti({ darkClass, setPage }) {
    const projects = [
        {
            title: "Task Manager",
            RepoGithub: `https://github.com/Cucix08-dev/Task-Manager`,
            linkSiteProject: ``
        },
        {
            title: "Calcolatrice",
            RepoGithub: `https://github.com/Cucix08-dev/Calcolatrice-by-Cucix08`,
            linkSiteProject: `https://cucix08-dev.github.io/Calcolatrice-by-Cucix08/`
        },
        {
            title: "Orologio",
            RepoGithub: `https://github.com/Cucix08-dev/Orologio`, 
            linkSiteProject: `https://cucix08-dev.github.io/Orologio`
        },
        {
            title: "Invito al diciottesimo",
            RepoGithub: `https://github.com/Cucix08-dev/Invito-al-diciottesimo`, 
            linkSiteProject: `https://cucix08-dev.github.io/Invito-al-diciottesimo`
        },
        {
            title: "Local Audio Player",
            RepoGithub: `https://github.com/Cucix08-dev/Local-Audio-Player`,
            linkSiteProject: ``
        },
        {
            title: "Geometric Manipulation",
            RepoGithub: `https://github.com/Cucix08-dev/Geometric-Manipulation`, 
            linkSiteProject: `https://cucix08-dev.github.io/Geometric-Manipulation`
        },
        {
            title: "Telegraph",
            RepoGithub: `https://github.com/Cucix08-dev/Telegraph`, 
            linkSiteProject: `https://cucix08-dev.github.io/Telegraph`
        },
        {
            title: "Shoot And Increase",
            RepoGithub: `https://github.com/Cucix08-dev/Shoot-And-Increase`, 
            linkSiteProject: `https://cucix08-dev.github.io/Shoot-And-Increase`
        },
        {
            title: "Nihongo Dojo",
            RepoGithub: `https://github.com/Cucix08-dev/Nihongo-Dojo`, 
            linkSiteProject: `https://cucix08-dev.github.io/Nihongo-Dojo`
        },
        {
            title: "CLI File Organizer",
            RepoGithub: `https://github.com/Cucix08-dev/CLI-File-Organizer`, 
            linkSiteProject: `https://cucix08-dev.github.io/CLI-File-Organizer`
        },
        {
            title: "Java Docs ITA",
            RepoGithub: `https://github.com/Cucix08-dev/Java-Docs-ITA`, 
            linkSiteProject: `https://cucix08-dev.github.io/Java-Docs-ITA`
        },
        {
            title: "Clicker Record",
            RepoGithub: `https://github.com/Cucix08-dev/Clicker-Record`, 
            linkSiteProject: `https://cucix08-dev.github.io/Clicker-Record`
        },
        {
            title: "Calcolo Codice Fiscale",
            RepoGithub: `https://github.com/Cucix08-dev/Calcolo-Codice-Fiscale`, 
            linkSiteProject: `https://cucix08-dev.github.io/Calcolo-Codice-Fiscale`
        },
        {
            title: "Quantum Orbital Manim",
            RepoGithub: `https://github.com/Cucix08-dev/Quantum-Orbital-Manim`
        }
    ]

    useEffect(() => {
        const projects = document.querySelectorAll(".project-container");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "show-project",
                        entry.isIntersecting
                    );

                    entry.target.classList.toggle(
                        "unobserved-project",
                        !entry.isIntersecting
                    );

                    if (entry.isIntersecting) {
                        console.log("ADD");
                        entry.target.classList.add("show-project");
                        entry.target.classList.remove("unobserved-project");
                    } else {
                        console.log("REMOVE");
                        entry.target.classList.remove("show-project");
                        entry.target.classList.add("unobserved-project");
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        projects.forEach((project) =>
            observer.observe(project)
        );

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div id="progetti">
                <div id="grid-project">
                    {projects.map((item, index) => (
                        <div
                        key={item.title}
                        className={`project-container  unobserved-project ${darkClass}`}
                        >
                            <img 
                                src={`./imgs/projects-imgs/${(item.title).replace(/\s+/g, "")}.webp`} 
                                alt={`${item.title}`}
                            />
                            <span className="text title-project">{item.title}</span>
                            <div id="container-button-project">
                                {item.RepoGithub && (
                                    <button
                                        className={`REP-Github ${darkClass}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(item.RepoGithub, "_blank");
                                        }}
                                    >
                                        <svg
                                            className={`icon ${darkClass}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="20"
                                            height="20"
                                        >
                                            <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.35 22.93c.57.1.78-.25.78-.56v-2.17c-3.19.69-3.86-1.54-3.86-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.09-.12-.3-.51-1.48.11-3.08 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.6.24 2.78.12 3.08.73.81 1.17 1.84 1.17 3.09 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.03.78 2.07v3.08c0 .31.2.67.79.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
                                        </svg>

                                        REP Github
                                    </button>
                                )}

                                {item.linkSiteProject && (
                                    <button
                                        className={`site ${darkClass}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(item.linkSiteProject, "_blank");
                                        }}
                                    >
                                        <svg
                                            className={`icon ${darkClass}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.92 9h-3.01a15.8 15.8 0 00-1.15-4.39A8.04 8.04 0 0118.92 11zM12 4c.96 1.16 1.72 3.12 1.93 5H10.07C10.28 7.12 11.04 5.16 12 4zM4.08 13h3.01c.11 1.58.52 3.09 1.15 4.39A8.04 8.04 0 014.08 13zm3.01-2H4.08a8.04 8.04 0 014.16-4.39A15.8 15.8 0 007.09 11zm2.98 0c.21-1.88.97-3.84 1.93-5 .96 1.16 1.72 3.12 1.93 5h-3.86zm3.86 2c-.21 1.88-.97 3.84-1.93 5-.96-1.16-1.72-3.12-1.93-5h3.86zm.83 4.39c.63-1.3 1.04-2.81 1.15-4.39h3.01a8.04 8.04 0 01-4.16 4.39z"/>
                                        </svg>

                                        Site
                                    </button>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}