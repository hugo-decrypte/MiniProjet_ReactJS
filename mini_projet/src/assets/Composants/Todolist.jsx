import React, { Fragment, useState } from "react";
import '../CSS/TodoList.css'



function Todolist() {
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);
    const existe_tache = todos.some(todo => todo.title.toLowerCase() === newItem.toLowerCase());


    //ajout d'une tache dans la liste
    function handleSubmit(e) {
        e.preventDefault();

        //si la tâche est vide
        if (newItem.trim() === "") {
            alert("La tâche est vide, entrez une tâche valide");
            return;
        }

        //si la tâche existe_tache deja
        if (existe_tache) {
            alert("Cette tâche existe deja.");
            return;
        }



        setTodos(currentTodos => [
            ...currentTodos,
            {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false
            },
        ]);
        // Réinitialise l'input après l'ajout
        setNewItem("");
    }

    function DeleteTache(id) {
        setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
    }

    function handleCocher(id) {
        setTodos(currentTodos =>
            currentTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form">
                    <h1>Todo List</h1>
                    <label htmlFor="item"> Nouvelle tâche </label><br/>
                    <input
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text"
                        id="item"
                    /><br/><br/>
                    <button className="button-ajout">Add</button>
                </div>
            </form>


            <ul className="list">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input onChange={() => handleCocher(todo.id)} type="checkbox" checked={todo.completed} />
                            {todo.title}
                        </label>


                        <button onClick={() => DeleteTache(todo.id)} className="btn btn-danger">Delete</button>

                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todolist;
