import { useState } from "react";

export default function Progetti({ darkClass }) {
    const projects = [
        {
            title: "Task Manager", 
            description: `Task Manager e' un programma da terminale in C++ che permette di creare, 
                          visualizzare, modificare e cancellare attivita' tramite un menu interattivo
                          e salvare le task via task.csv.`
        },
        {
            title: "Calcolatrice", 
            description: `
                Calcolatrice scientifica che puo' calcolare: coseno, seno, tangente, cotangente, cosecante, secante, logaritmo in base 10, 
                puo' elevare la potenza, puo' sommare, sottrare, moltiplicare e dividere numeri. Tutto come una calcolatrice normalissima, 
                semplicemente puo' cambiare lo stile della calcolatrice da modalita' Dark a modalita' Light, ovvero cambiare il theme 
                della calcolatrice.
            `
        },
        {
            title: "Orologio", 
            description: `
                Sito web che ha un orologio digitale, orologio analogico, analogico romano, analogico matematico e 
                orologio programmatore.
            `
        },
        {
            title: "Invito al diciottesimo", 
            description: `
                Questo e' un progetto che ho fatto, come bigliettino digitale, 
                per gli invitati al mio diciottesimo usando three.js per lo sfondo.
            `
        },
        {
            title: "Local Audio Player", 
            description: `
                Un riproduttore musicale progettato per ascoltare canzoni senza pubblicità, 
                a condizione che l'utente scarichi i brani desiderati e li inserisca nella cartella songs.
            `
        },
        {
            title: "Geometric Manipulation", 
            description: `
                Un sito web che permette all'utente di divertirsi il piu' possibile con un game engine 2D, distruggendo e creando forme.
            `
        }
    ]

    return (
        <>
            <div id="progetti">
                <div id="grid-project">
                    {projects.map((item, index) => (
                        <div
                        key={item.title}
                        className={`project-container ${darkClass}`}
                        onClick={(e) => { e.stopPropagation(); handlePage(index); }}
                        >
                            <img src={`../../imgs/${item.title}.png`} alt=""/>
                            <span className="text title-project">{item.title}</span>
                            <p className={`description ${darkClass}`}><br/>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}