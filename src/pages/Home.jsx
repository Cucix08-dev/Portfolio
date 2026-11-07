import { useState } from "react";
import "./home.css";

export default function Home({ setPage, darkClass }) {
    return (
        <>
            <section id="container-presentation">
                <div id="presentation" className="container">
                    <h1
                        className="text title-section"
                        data-en="
                            Hey, <span className={`important text ${darkClass}`}>I'm Michele.</span>
                        "
                    >
                        Hey, <span className={`important text ${darkClass}`}>Sono Michele.</span>
                    </h1>

                    <p 
                        className="text"
                        data-en="
                            I am a <span className={`important ${darkClass}`}>Front-End Developer</span> with broad experience 
                            in web development. For the past three years, I have been working on personal projects outside of 
                            school, continuously building practical skills and gaining hands-on experience through real-world 
                            development challenges.
                        "
                    >
                        Sono uno sviluppatore <span className={`important ${darkClass}`}>Front-End</span> con 
                        esperienza trasversale nello sviluppo web.
                        Da circa tre anni lavoro su progetti personali al di fuori dell'ambito scolastico,
                        costruendo competenze pratiche e orientate al risultato.
                    </p>

                    <p 
                        className="text" 
                        data-en="
                            I enjoy creating modern, clean, and functional user interfaces, 
                            with a strong focus on performance, accessibility, and code quality.

                            I am currently looking for an opportunity as a
                            <span className={`important ${darkClass}`}>Front-End Developer</span>,
                            where I can continue growing professionally and make a meaningful contribution.
                        "
                    >
                        Mi piace creare interfacce moderne, pulite e funzionali, con attenzione a performance,
                        accessibilita' e qualita' del codice.
                        Attualmente sono alla ricerca di un'opportunita' come
                        sviluppatore <span className={`important ${darkClass}`}>Front-End</span>,
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

                        <span className="text" data-en="Contacts">Contatti</span>
                    </div>
                </div>

                <div id="img-background" className={`${darkClass}`}></div>
            </section>
            
            <hr className={`divisor home-hr ${darkClass}`} />

            <section>
                <h2 className="title-big-section" data-en="Technologies & Tools">Tecnologie e Strumenti</h2>
                <p 
                    data-en="
                        I am proficient in a wide range of technologies and programming languages, 
                        with a strong focus on web development. I am continuously expanding my knowledge 
                        by studying additional technologies, from backend systems to modern frontend frameworks 
                        and 3D animations.
                        <br />
                        <br />
                        Regarding development tools, I regularly use several professional applications.
                        For instance, I use Aseprite to create pixel art and custom sprites, often for personal projects. 
                        Most of my web development work is done in VS Code, an IDE with which I am highly experienced. 
                        I also work with IntelliJ IDEA, primarily for developing Java applications and personal projects.
                    "
                    style={{
                        width: "60vw",
                        margin: "32px auto",
                        fontSize: "clamp(0.8rem, 1.4vw, 1.3rem)"
                    }}
                >
                    So tante tecnologie/linguaggi di programmazione, 
                    sono molto molto pratico nell'ambito web,
                    sto ancora studiando moltissimi altri linguaggi/tecnologie,
                    dai linguaggi backend fino ai linguaggi per il front-end e animazioni 3D. 
                    <br/>
                    <br/>
                    Per quanto riguarda gli strumenti ne uso abbastanza, come Aseprite che lo uso per disegnare
                    pixelart e vari sprite per anche progetti personali. Lo sviluppo web lo sviluppo direttamente
                    da VSCode, ho una grande conoscenza con l'IDE, anche IntelliJIDEA, solo che lo uso per i miei 
                    progetti java ancora in sviluppo.
                </p>
                <div id="tools-and-technologies-container">
                    <div className="container-tt">
                        <h2 data-en="Technologies">Tecnologie</h2>
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
                        <h2 data-en="Tools">Strumenti</h2>
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
