import { useState } from "react";
import Progetti from "./Progetti";

export default function Home({ setPage, darkClass }) {
    return (
        <>
            <div id="container-presentation">
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
                        accessibilità e qualità del codice.
                        Attualmente sono alla ricerca di un'opportunità come
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

                        <a>
                            <span className="text">Contatti</span>
                        </a>
                    </div>
                </div>

                <div id="img-background" className={`${darkClass}`}></div>
            </div>
            
            <hr className={`divisor ${darkClass}`} />

        </>
    );
}
