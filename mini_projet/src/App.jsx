import './App.css'
import {Fragment} from "react";

function App() {


    const handleClick = () => {
        alert("j'ai cliqué sur le titre")
    }

    return <Fragment>
        <h1 onClick={handleClick} id="title" className="title">Bonjour tout le monde</h1>
        <input type="text"/><br/><br/>
        <button className="button">bonjour</button>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
        </p>
    </Fragment>
}

export default App