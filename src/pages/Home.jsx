import { useState } from "react";
import Progetti from "./Progetti";
import "./home.css";

export default function Home({ setPage, darkClass }) {
    return (
        <>
            <section id="container-presentation">
                <div id="presentation" className="container">
                    <h1 className="text title-section">
                        Hey, <span className={`important text ${darkClass}`}>Sono Michele.</span>
                    </h1>

                    <p className="text">
                        Sono uno sviluppatore <span className={`important ${darkClass}`}>Front-End</span> con esperienza trasversale nello sviluppo web.
                        Da circa tre anni lavoro su progetti personali al di fuori dell'ambito scolastico,
                        costruendo competenze pratiche e orientate al risultato.
                    </p>

                    <p className="text">
                        Mi piace creare interfacce moderne, pulite e funzionali, con attenzione a performance,
                        accessibilita' e qualita' del codice.
                        Attualmente sono alla ricerca di un'opportunita' come
                        sviluppatore <span className={`important ${darkClass}`}>Front-End</span> in Italia,
                        dove poter crescere professionalmente e contribuire in modo concreto.
                    </p>

                    <div className={`button-nav-extra ${darkClass}`} onClick={() => setPage(3)}>
                        <svg
                            id="icon-mailbox"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${darkClass}`}
                        >
                            <rect x="8" y="14" width="32" height="20" rx="4" ry="4" strokeWidth="2" />

                            <path
                                d="M16 22 L24 26 L32 22"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text">Contatti</span>
                    </div>
                </div>

                <div id="img-background" className={`${darkClass}`}></div>
            </section>
            
            <hr className={`divisor home-hr ${darkClass}`} />

            <section>
                <h2 className="title-big-section">Technologies And Tools</h2>
                <div id="tools-and-technologies-container">
                    <div className="container-tt">
                        <h3>Technologies</h3>
                        <div className="tools-and-technologies">
                            {
                                ["HTML", "CSS", "Javascript", "React", "C++", "Java", "Python", "Kotlin", "SQL"].map((tech, index) => (
                                    <div key={index} className="card">
                                        <div className={`icon-wrapper ${darkClass}`} id={tech.toLowerCase().replace(/\+/g, "p")}>
                                            <img 
                                                id={`${tech.toLowerCase().replace(/\+/g, "p") + '-img'}`}
                                                className={`icon ${darkClass}`}
                                                src={`./imgs/icons/technologies/${tech}.webp`}
                                                alt={`${tech} logo`}
                                            />
                                        </div>

                                        <h3>{tech}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="container-tt">
                        <h3>Tools</h3>
                        <div className="tools-and-technologies">
                            {
                                ["Github", "Git", "Aseprite", "VSCode", "IntelliJIDEA", "AndroidStudio"].map((tool, index) => (
                                    <div key={index} className="card">
                                        <div className={`icon-wrapper ${darkClass}`} id={tool.toLowerCase()}>
                                            <img
                                                id={`${tool.toLowerCase() + '-img'}`}
                                                className={`icon ${darkClass}`}
                                                src={`./imgs/icons/tool/${tool}.webp`}
                                                alt={`${tool} logo`}
                                            />
                                        </div>
                                        
                                        <h3>{tool}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <hr className={`divisor home-hr ${darkClass}`} />
        </>
    );
}
