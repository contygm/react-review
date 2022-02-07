import React from "react"

// TODO: sends changes
export default function FormCell(props) {
	return (
		<td key={props.id} >
			<input
				type="text"
				required="required"
				name={props.name}
				value={props.value}
				// onChange={handleEditFormChange}
			></input>
		</td>
	)
}