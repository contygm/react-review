import React from "react"

export default function Table(props) {
	
	function getKeyArray(dataArray) {
		let keys = [];
		console.log(dataArray)
       	Object.keys(dataArray[0]).forEach(key => {
			if(typeof dataArray[0][key] === 'object' && !Array.isArray(dataArray[0][key])) {
				let nested = [];
				dataArray.forEach(loo => {
					nested.push(...Object.keys(loo[key]))
				})
				console.log("nested ", nested)
				keys.push(...Array.from(new Set(nested)));
			} else {
				keys.push(key);
			}

    	})
		return keys;
	}

	const headers = getKeyArray(props.data);
	function getRows(row) {
		let rows = [];

		Object.keys(row).forEach((key, j) => {
			const cell = row[key];
			if(typeof cell === "object" && !Array.isArray(cell)) {
				return Object.keys(cell).forEach((subKey, i) => {
					rows.push(<td key={i} >{cell[subKey] === undefined ? "N/a" : cell[subKey]}</td>)
				})
			}
			rows.push(<td key={j} >{row[key]}</td>)
		})
		return rows;
	}

    return (
       <div>
	   		<h1>{props.tableName}</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						{headers.map((h, i) => <th key={i} scope="col">{h}</th>)}
					</tr>
				</thead>
				<tbody>
					{props.data.map((row, i) => {
						return <tr key={i}>
							{getRows(row)}
							
						</tr>
					})}
				</tbody>
			</table>
		</div>
    )
}