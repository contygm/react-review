import React from "react"
import Table from "./Table";

export default function TableView(props) {

	return( 
		<section className="table-view">

		{props.currentTable === "all" ?
			Object.keys(props.data).map(key => {
				console.log(key)
				return <Table key={key} data={props.data[key]} tableName={key}/>
			})
		:
			<Table data={props.data[props.currentTable]} tableName={props.currentTable}/>
		}

		</section>
	)
}