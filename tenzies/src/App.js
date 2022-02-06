import React from "react"
import Die from "./components/Die"
import './index.css';

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function allNewDice() {
        return Array.from(
            {length: 10}, 
            () => ({ 
                "value": Math.ceil(Math.random() * 6 ),
                "isHeld": false,
                "id": nanoid()
            })
        );
    }

    function rollDice() {
        setDice(allNewDice());
    }

    function toggleSelected(_, id) {
        setDice(prevDice =>
            prevDice.map((d) => {
                if(d.id === id) {
                    return {...d, "isHeld": !d.isHeld}
                }
                return d;
            })
        )

        console.log(dice)
    }

    function holdDice

    return (
        <main>
            <div className="dice-container">
                {dice.map((die, i)=> {
                    return <Die 
                        key={die.id} 
                        id={die.id}
                        value={die.value} 
                        isHeld={die.isHeld}
                        toggleSelected={toggleSelected}
                    />
                })}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}