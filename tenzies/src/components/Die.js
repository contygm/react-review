import React from "react"

export default function Die(props) {
    return (
        <div
			className={`die-face ${props.isHeld ? "green": "white"}`} 
			onClick={(e) => props.toggleSelected(e, props.id)}
		>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}