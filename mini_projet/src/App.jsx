import React, { useState } from "react";
import Profile from "./assets/Composants/Profile.jsx";
import Todolist from "./assets/Composants/Todolist.jsx";
import { ThemeProvider, ThemeContext } from "./assets/Contexts/ThemeContext.jsx"; // Import du ThemeContext et ThemeProvider
import "./assets/CSS/App.css";

function App() {
    const [activeTab, setActiveTab] = useState("profile"); // Onglet actif

    return (
        <ThemeProvider>
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => ( // Accède au thème et à la fonction de basculement
                    <div className={`App ${theme}`}>
                        {/* Bouton pour changer le thème en haut à droite */}
                        <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
                            Changer le thème ({theme === "light" ? "Sombre" : "Clair"})
                        </button>

                        {/* Menu de navigation */}
                        <nav className="navbar">
                            <button className={`tab-button ${theme}`} onClick={() => setActiveTab("profile")}>
                                Profil
                            </button>
                            <button className={`tab-button ${theme}`} onClick={() => setActiveTab("todolist")}>
                                To-Do List
                            </button>
                        </nav>

                        <div className="content">
                            {activeTab === "profile" && <Profile />}
                            {activeTab === "todolist" && <Todolist />}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        </ThemeProvider>
    );
}

export default App;
