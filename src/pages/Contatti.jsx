import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contatti({ darkClass }) {
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
            <div id="contact" className="container">
                <h1 className={`title-section ${darkClass}`}>
                    Contattami :)
                </h1>

                <div id="contact">
                    <div className={`form-group ${darkClass}`}>
                        <label className={`text ${darkClass}`} htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={`text container-text ${darkClass}`}
                            placeholder="la-tua@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={`form-group ${darkClass}`}>
                        <label className={`text ${darkClass}`} htmlFor="subject">Oggetto</label>
                        <input
                            id="subject"
                            type="text"
                            className={`text container-text ${darkClass}`}
                            placeholder="Oggetto del messaggio"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className={`form-group ${darkClass}`}>
                        <label className={`text ${darkClass}`} htmlFor="message">Messaggio</label>
                        <textarea
                            id="message"
                            className={`text container-text ${darkClass}`}
                            placeholder="Scrivi il tuo messaggio..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div
                        className={`button-nav-extra ${darkClass}`}
                        onClick={handleSubmit}
                    >
                        <span className={`important ${darkClass}`}>Invia</span>
                    </div>
                </div>
            </div>
        </>
    );
}