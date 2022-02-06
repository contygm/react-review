import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import './index.css';

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [win, setWin] = React.useState(false);
 
    function makeNewDie() {
        return { 
            value: Math.ceil(Math.random() * 6 ),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        return Array.from(
            {length: 10}, 
            () => makeNewDie()
        );
    }

    function rollDice() {
        setDice(prevDice =>
            prevDice.map((d) => {
                return d.isHeld ? d : makeNewDie();
            })
        )
    }

    function toggleSelected(id) {
        setDice(prevDice =>
            prevDice.map((d) => {
                return d.id === id ? 
                    {...d, isHeld: !d.isHeld} : 
                    d;
            })
        )
    }

    React.useEffect(() => {
        const allHeld = dice.every(d => d.isHeld);
        const allSameValue = dice.every(d => d.value === dice[0].value);
        if(allHeld && allSameValue) {
            setWin(true);
            console.log("YOU WIN")
        }
    }, [dice])

    return (
        <main>
            <div className="dice-container">
                {dice.map((die)=> {
                    return <Die 
                        key={die.id} 
                        value={die.value} 
                        isHeld={die.isHeld}
                        toggleSelected={() => toggleSelected(die.id)}
                    />
                })}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}