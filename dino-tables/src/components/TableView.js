import React from "react"
import Table from "./Table";

export default function TableView(props) {
	const [dino, setDino] = React.useState(props.allData["dinosaurs"]);

    function deleteRow(e, id) {
        e.stopPropagation()
        console.log("delete", id)
        
        setDino(prevData => prevData.filter(entry => entry.id !== id));
    }

	return( 
		<section className="table-view">

		{props.currentTable === "all" ?
			Object.keys(props.allData).map(key => {
				console.log(key)
				return key === "dinosaurs" ? 
					<Table key={key} data={dino} tableName="dinosaurs" deleteRow={deleteRow}/> :
				 	<Table key={key} data={props.allData[key]} tableName={key} deleteRow={deleteRow}/>
			})
		:
			props.currentTable ===  "dinosaurs" ?
				<Table data={dino} tableName={props.currentTable} deleteRow={deleteRow}/> : 
				<Table data={props.allData[props.currentTable]} tableName={props.currentTable} deleteRow={deleteRow}/>
		}

		

		</section>
	)
}