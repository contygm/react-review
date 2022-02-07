import React from "react"

export default function ReadonlyCell(props) {
	return (
		<td key={props.id} >{props.value}</td>
	)
}