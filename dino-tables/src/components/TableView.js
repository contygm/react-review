import React from "react"
import Table from "./Table";

export default function TableView(props) {

	return( 
		<section className="table-view">
		{/* {
			props.data.map((table, i) => {
				console.log(table)
				return <Table key={i}/>
			})
		} */}
		{props.currentTable}
			
			{/* <Table data={dino} deleteDino={deleteDino}/>
            <Table data={habitat} />
            <Table data={loot} /> */}
		</section>
	)
}