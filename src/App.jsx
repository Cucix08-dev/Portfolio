import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Progetti from './pages/Progetti.jsx';
import Contatti from './pages/Contatti.jsx';
import BackgroundCanvas from './BackgroundCanvas.jsx';

function App() {
    const [page, setPage] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const [englishLanguage, setEnglishLanguage] = useState(false);


    const darkClass = darkMode ? "dark" : "light";

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        document.body.classList.toggle("light", !darkMode);
    }, [darkMode]);

    useEffect(() => {
    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(el => {
        if (!el.dataset.it) {
            el.dataset.it = el.innerHTML;
        }

        el.innerHTML = englishLanguage
            ? el.dataset.en
            : el.dataset.it;
        });
    }, [englishLanguage, darkClass]);

    return (
        <>
            <BackgroundCanvas darkMode={darkMode} />
            <Header setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} englishLanguage={englishLanguage} setEnglishLanguage={setEnglishLanguage}/>

            <main className={darkClass}>
                {page === 0 && <Home setPage={setPage} darkClass={darkClass} englishLanguage={englishLanguage}/>}
                {page === 1 && <About setPage={setPage} darkClass={darkClass} englishLanguage={englishLanguage}/>}
                {page === 2 && (
                    <Progetti
                        setPage={setPage}
                        darkClass={darkClass}
                        englishLanguage={englishLanguage}
                    />
                )}
                {page === 3 && <Contatti setPage={setPage} darkClass={darkClass} englishLanguage={englishLanguage}/>}
            </main>
        </>
    );
}

export default App;
