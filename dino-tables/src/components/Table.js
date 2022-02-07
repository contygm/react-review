import React from "react"
import ReadonlyCell from "./ReadonlyCell"
import FormCell from "./FormCell"
import Button from 'react-bootstrap/Button';

const Rows = props => {
	return props.data.map((row, i) => {
		const rowData = (props.editDinoData && row.id === props.editDinoData.id )? props.editDinoData : row;
		return <tr key={i}>
			{getCells(rowData, props.isDino, props.editDinoData, props.handleEditDinoChange)}

			{props.isDino && <td>
				
				<Buttons rowData={rowData} row={row} editDinoData={props.editDinoData} handleEditClick={props.handleEditClick} deleteRow={props.deleteRow} handleCancelClick={props.handleCancelClick} handleSaveClick={props.handleSaveClick}/>
			
			</td>}
		</tr>
	})
}

const Buttons = props => {
	return props.editDinoData && props.row.id === props.editDinoData.id  ?
		<div>
			<Button onClick={(e) => props.handleSaveClick(e, "edit")}>Save</Button>
			<Button onClick={(e) => props.handleCancelClick(e)}>Cancel</Button>
		</div>
		: 
		<div>
			<Button onClick={(e) => props.handleEditClick(e, props.rowData)}>Edit</Button>
			<Button onClick={(e) => props.deleteRow(e, props.row.id)}>Delete</Button>
		</div>
		
}

function getCells(row, isDino, editDinoData, handleEditDinoChange) {
	let cells = [];
	const currentlyEditing = editDinoData && row.id === editDinoData.id;
	if(!isDino || !currentlyEditing) { // readonly rows
		Object.keys(row).forEach(key => {
			const cell = row[key];
			if(typeof cell === "object" && !Array.isArray(cell)) {
				return Object.keys(cell).forEach(subKey => {
					cells.push(<ReadonlyCell key={`${key}-${subKey}-${cell[subKey]}`} value={cell[subKey]}/>)
				})
			}
			cells .push(<ReadonlyCell key={`${key}-${key}-${row[key]}`} value={row[key]}/>)
		})
	} else { // editable rows
		Object.keys(row).forEach(key => {
			const cell = row[key];
			if(typeof cell === "object" && !Array.isArray(cell)) {
				return Object.keys(cell).forEach(subKey => {
					cells.push(<FormCell key={`${subKey}-${cell[subKey]}`} value={cell[subKey]} name={key} handleEditDinoChange={handleEditDinoChange}/>)
				})
			}
			cells.push(<FormCell key={`${key}_${row[key]}`} value={row[key]} name={key} handleEditDinoChange={handleEditDinoChange}/>)
		})
	}

	return cells;
}

const AddDino = props => {
	return <div>
		{props.addDinoData && props.addDinoData.id ?
			<div>
				<Button onClick={(e) => props.handleSaveClick(e, "add")}>Save</Button>
				<Button onClick={(e) => props.handleCancelClick(e)}>Cancel</Button>
				{props.headers.map(h => 
					<div class="form-group">
						<label for={h}>{h}</label>
						<input name={h} type="text" class="form-control" onChange={(e) => props.handleAddDinoChange(e)} />
					</div>
				)}
			</div>
		: 
			<Button onClick={(e) => props.handleAddClick(e)}>Add</Button>
		}
		</div>
	
}

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
	
	const headers = getKeyArray(props.data) ?? "";
	const isDino = props.tableName === "dinosaurs";

    return (
       <div>
	   		<h1>{props.tableName}</h1>
			{isDino && <AddDino addDinoData={props.addDinoData} setAddDinoData={props.setAddDinoData} handleAddClick={props.handleAddClick} handleAddDinoChange={props.handleAddDinoChange} handleCancelClick={props.handleCancelClick} headers={headers} handleSaveClick={props.handleSaveClick} />}
			{props.data.length !== 0 ? <table className="table table-striped">
				<thead>
					<tr>
						{headers.map((h, i) => <th key={`${i}-${h}`} scope="col">{h}</th>)}
						{isDino && <th scope="col">Actions</th>}
					</tr>
				</thead>
				<tbody>
					<Rows data={props.data} isDino={isDino} editDinoData={props.editDinoData} handleEditClick={props.handleEditClick} deleteRow={props.deleteRow} handleEditDinoChange={props.handleEditDinoChange} handleCancelClick={props.handleCancelClick} /> 
				</tbody>
			</table> : "No rows"}
		</div>
    )
}