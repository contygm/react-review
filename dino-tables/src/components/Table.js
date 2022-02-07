import React from "react"
import {nanoid} from "nanoid"
import Button from 'react-bootstrap/Button';

export default function Table(props) {
	
	function getKeyArray(dataArray) {
		if(dataArray.length === 0) {
			return [];
		}
		let keys = [];
		console.log(dataArray)
       	Object.keys(dataArray[0]).forEach(key => {
			if(typeof dataArray[0][key] === 'object' && !Array.isArray(dataArray[0][key])) {
				let nested = [];
				dataArray.forEach(loo => {
					nested.push(...Object.keys(loo[key]))
				})
				keys.push(...Array.from(new Set(nested)));
			} else {
				keys.push(key);
			}

    	})
		return keys;
	}

	// addRow
	// editableRow
	// readonlyRow

	function getRows(row, isDino) {
		let rows = [];
		if(!isDino) {
			Object.keys(row).forEach(key => {
				const cell = row[key];
				if(typeof cell === "object" && !Array.isArray(cell)) {
					return Object.keys(cell).forEach(subKey => {
						rows.push(<td key={nanoid()} >{cell[subKey]}</td>)
					})
				}
				rows.push(<td key={nanoid()} >{row[key]}</td>)
			})
		} else {
			Object.keys(row).forEach(key => {
				const cell = row[key];
				if(typeof cell === "object" && !Array.isArray(cell)) {
					return Object.keys(cell).forEach(subKey => {
						rows.push(
							<td key={nanoid()} >
								<input
									type="text"
									required="required"
									name={subKey}
									value={cell[subKey]}
									// onChange={handleEditFormChange}
									></input>
							</td>
						)
					})
				}
				rows.push(
					<td key={nanoid()} >
						<input
							type="text"
							required="required"
							name={key}
							value={row[key]}
							// onChange={handleEditFormChange}
						></input>
					</td>
				)
			})
		}

		return rows;
	}

	const isDino = props.tableName === "dinosaurs";

	const headers = getKeyArray(props.data) ?? "";
    return (
       <div>
	   		<h1>{props.tableName}</h1>
			{isDino && <Button>Add</Button>}
			{props.data.length !== 0 ? <table className="table table-striped">
				<thead>
					<tr>
						{headers.map((h, i) => <th key={nanoid()} scope="col">{h}</th>)}
						{isDino && <th scope="col">Actions</th>}
					</tr>
				</thead>
				<tbody>
					{props.data.map((row, i) => {
						return <tr key={nanoid()}>
							{getRows(row, isDino)}
							{isDino && <td>
								<Button>Edit</Button>
								<Button onClick={(e) => props.deleteRow(e, row.id)}>Delete</Button>
							</td>}
						</tr>
					})}
				</tbody>
			</table> : "No rows"}
		</div>
    )
}