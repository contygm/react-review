import React from "react"
import Die from "./components/Die"
import './index.css';

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function allNewDice() {
        return Array.from({length: 10}, () => Math.ceil(Math.random() * 6));
    }

    function rollDice() {
        setDice(allNewDice());
    }

    return (
        <main>
            <div className="dice-container">
                {dice.map((die, i)=> {
                    return <Die key={i} value={die} />
                })}

                
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}