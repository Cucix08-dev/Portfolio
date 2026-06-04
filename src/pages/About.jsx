import { useState } from "react";

export default function About({ darkClass }) {
    return (
        <>
            <div id="about" className="container">

                {/* SEZIONE INTRO */}
                <div id="container-presentation">
                    <div id="presentation">
                        <h1 className={`title-section ${darkClass}`}>
                            Ciao, sono <span className={`important text ${darkClass}`}>Michele</span>
                        </h1>
                        <p className={`text ${darkClass}`}>
                            Sono un ragazzo di 17 anni, e frequento la scuola superiore, mi appassiona molto lo sviluppo web, imparare a manipolare strutture dati e lavorare con React.js
                        </p>
                    </div>

                    <img
                        src="/imgs/foto.jpg"
                        alt="Foto profilo"
                        id="foto-profilo"
                        className={`hidden ${darkClass}`}
                    />
                </div>

                <hr className={`divisor ${darkClass}`} />

                {/* SEZIONE SKILLS */}
                <h2 className={`title-section ${darkClass}`}>
                    Le mie <span className={`important ${darkClass}`}>Skills</span>
                </h2>

                <div id="skills">
                    {["HTML", "CSS", "JavaScript", "React", "C++" , "Java", "Python"].map((skill) => (
                        <div key={skill} className={`skill-item ${darkClass}`}>
                            <span className={`text ${darkClass}`}>{skill}</span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}