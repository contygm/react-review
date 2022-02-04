import React from "react"

export default function Card(props) {
    return (
        <div className="card">
			<img src={`../images/${props.img}.png`} className="card-img"/>
			<div className="card-stats">
				<img src="../images/star.png" className="card-star"/>
				<span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray"> {props.country}</span>
			</div>
			
			
			<p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
		</div>
    )
}