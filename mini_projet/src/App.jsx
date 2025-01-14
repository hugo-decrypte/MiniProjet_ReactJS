import React, { useState } from 'react';
import Profile from './assets/Composants/Profile.jsx';
import Todolist from './assets/Composants/Todolist.jsx';
import './assets/CSS/App.css';


function App() {
    const [activeTab, setActiveTab] = useState('profile'); // Onglet actif

    return (
        <div className="App">
            {/* Menu de navigation */}
            <nav className="navbar">
                <button onClick={() => setActiveTab('profile')}>Profil</button>
                <button onClick={() => setActiveTab('todolist')}>To-Do List</button>
            </nav>

            {/* Contenu dynamique basé sur l'onglet actif */}
            <div className="content">
                {activeTab === 'profile' && <Profile />}
                {activeTab === 'todolist' && <Todolist />}
            </div>
        </div>
    );
}

export default App;
