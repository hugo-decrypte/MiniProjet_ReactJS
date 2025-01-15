import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext.jsx";
import "../CSS/TodoList.css";

function Todolist() {
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);

    const { theme, choisirTheme } = useContext(ThemeContext); // Utilisation du contexte
    const existe_tache = todos.some(todo => todo.title.toLowerCase() === newItem.toLowerCase());

    // Charger les tâches depuis localStorage au démarrage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    // Sauvegarder les tâches dans localStorage chaque fois qu'elles sont modifiées
    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            localStorage.removeItem("todos");
        }
    }, [todos]);


    // Ajouter une tâche
    function handleSubmit(e) {
        e.preventDefault();

        if (newItem.trim() === "") {
            alert("La tâche est vide, entrez une tâche valide.");
            return;
        }

        if (existe_tache) {
            alert("Cette tâche existe déjà.");
            return;
        }

        setTodos(currentTodos => [
            ...currentTodos,
            {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false,
            },
        ]);
        setNewItem("");
    }

    // Supprimer une tâche
    function DeleteTache(id) {
        setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
    }

    // Cocher/Décocher une tâche
    function handleCocher(id) {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <div className={`todolist-container ${theme}`}>
            <button onClick={choisirTheme} className="theme-toggle">
                Changer le thème ({theme === "clair" ? "Sombre" : "Clair"})
            </button>

            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form">
                    <h1 className={`title ${theme}`}>Todo List</h1>
                    <label htmlFor="item">Nouvelle tâche</label>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
                    <button className="button-ajout">Ajouter</button>
                </div>
            </form>

            <ul className="list">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input onChange={() => handleCocher(todo.id)} type="checkbox" checked={todo.completed}
                            />
                            {todo.title}
                        </label>
                        <button onClick={() => DeleteTache(todo.id)} className="button-delete">Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
