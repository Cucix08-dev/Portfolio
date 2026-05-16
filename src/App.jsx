import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Progetti from './pages/Progetti.jsx';
import Contatti from './pages/Contatti.jsx';

function App() {
    const [page, setPage] = useState(0);
    const [darkMode, setDarkMode] = useState(true);

    const darkClass = darkMode ? "dark" : "light";

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        document.body.classList.toggle("light", !darkMode);
    }, [darkMode]);

    return (
        <>
            <Header setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className={darkClass}>
                {page === 0 && <Home setPage={setPage} darkClass={darkClass} />}
                {page === 1 && <About setPage={setPage} darkClass={darkClass} />}
                {page === 2 && <Progetti setPage={setPage} darkClass={darkClass} />}
                {page === 3 && <Contatti setPage={setPage} darkClass={darkClass} />}
            </main>
        </>
    );
}

export default App;
