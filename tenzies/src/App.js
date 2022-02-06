import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
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
        if(win) {
            setDice(allNewDice())
            setWin(false);
        } else {
            setDice(prevDice =>
                prevDice.map((d) => {
                    return d.isHeld ? d : makeNewDie();
                })
            );
        }
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
        }
    }, [dice])

    return (
        <main>
            <div className="dice-container">
                {win && <Confetti />}
                {dice.map((die)=> {
                    return <Die 
                        key={die.id} 
                        value={die.value} 
                        isHeld={die.isHeld}
                        toggleSelected={() => toggleSelected(die.id)}
                    />
                })}
            </div>
            <button className="roll-dice" onClick={rollDice}>{win ? "New Game" : "Roll"}</button>
        </main>
    )
}