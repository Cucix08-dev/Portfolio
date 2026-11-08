import { useState } from "react";
import "./contatti.css";
import emailjs from "@emailjs/browser";

export default function Contatti({ darkClass, englishLanguage }) {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (!email || !subject || !message) {
            alert("Compila tutti i campi.");
            return;
        }

        const templateParams = {
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs
            .send(
                "service_gi01wxd",
                "template_y3ffdrq",
                templateParams,
                "l2csH_qjB-onmvWN1"
            )
            .then(() => {
                alert("Messaggio inviato!");
                setEmail("");
                setSubject("");
                setMessage("");
            })
            .catch((err) => {
                console.error(err);
                alert("Errore nell'invio. Riprova.");
            });
    };

    return (
        <>
            <section id="contact" className="container">
                <h1 className={`title-section ${darkClass}`}>
                    {
                        englishLanguage? 
                        <>Contact me :)</> :
                        <>Contattami :)</>
                    }
                </h1>

                <div id="contact">
                    <div className={`form-group ${darkClass}`}>
                        <label className={`text ${darkClass}`} htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={`text container-text ${darkClass}`}
                            placeholder={
                                englishLanguage
                                    ? "your-email@email.com"
                                    : "la-tua-email@email.com"
                            }
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={`form-group ${darkClass}`}>
                        <label className={`text ${darkClass}`} htmlFor="subject" data-en="Object">Oggetto</label>
                        <input
                            id="subject"
                            type="text"
                            className={`text container-text ${darkClass}`}
                            placeholder={englishLanguage ?
                                "Object of message" :    
                                "Oggetto del messaggio"
                            }
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className={`form-group ${darkClass}`}>
                        <label className={`text ${darkClass}`} htmlFor="message" data-en="Message">Messaggio</label>
                        <textarea
                            id="message"
                            className={`text container-text ${darkClass}`}
                            placeholder={
                                englishLanguage
                                    ? "Write your message..."
                                    : "Scrivi il tuo messaggio..."
                            }
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div
                        className={`button-nav-extra ${darkClass}`}
                        onClick={handleSubmit}
                    >
                        <span className={`important ${darkClass}`}>
                            {
                                englishLanguage?
                                <>Send</> :
                                <>Invia</>
                            }
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}