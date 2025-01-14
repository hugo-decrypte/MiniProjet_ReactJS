import React, { createContext, useEffect, useState } from "react";

// Création du contexte
export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) { // Changer "enfants" par "children"
    const [theme, setTheme] = useState("sombre");

    // Charger le thème depuis le localStorage au démarrage
    useEffect(() => {
        const garder_theme = localStorage.getItem("theme");
        if (garder_theme) {
            setTheme(garder_theme);
        }
    }, []);

    // Sauvegarder le thème et l'appliquer au body
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    //pour changer le background du body de la page
    useEffect(() => {
        document.body.className = "";
        document.body.classList.add(theme);
    }, [theme]);


    // Fonction pour changer le thème
    const choisirTheme = () => {
        setTheme((prevTheme) => (prevTheme === "clair" ? "sombre" : "clair"));
    };

    return (
        <ThemeContext.Provider value={{ theme, choisirTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
