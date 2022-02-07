import React from "react"
import { useTable } from 'react-table'

export default function Table(props) {
	
	function getKeyArray(dataArray) {
        return Object.keys(dataArray[0]).map(key => {
			if(typeof dataArray[0][key] === 'object' && !Array.isArray(dataArray[0][key])) {
				let nested = [key];
				console.log("key", key)
				dataArray.forEach(loo => {
					nested.push(...Object.keys(loo[key]))
				})
				
				return [...Array.from(new Set(nested))];
			}

        return key;
    })}

	function makeCols(keyArray)  {
		let res = [];
		keyArray.forEach(key => {
			if(Array.isArray(key)) {
				const header = key.shift();
				res.push(...key.map(k => ({
					Header: k.charAt(0).toUpperCase() + k.slice(1),
					accessor: `${header}.${k}`
				})))
				
			} else {
				res.push({
					Header: key.charAt(0).toUpperCase() + key.slice(1),
					accessor: key
				}) 
			}

		});
		console.log("res", res)

		return res;
	}

	const data = React.useMemo(() => props.data ,[]);
	const colHeaderArray = getKeyArray(props.data);
	console.log("1. ", colHeaderArray)
	const cols = makeCols(colHeaderArray);
	console.log("2. ", cols)
	const columns = React.useMemo(() => cols,[]);
		console.log("3. ", columns)
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
   } = useTable({ columns, data });

    return (
       <div>
			<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
			<thead>
				{headerGroups.map(headerGroup => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map(column => (
					<th
						{...column.getHeaderProps()}
						style={{
						borderBottom: 'solid 3px red',
						background: 'aliceblue',
						color: 'black',
						fontWeight: 'bold',
						}}
					>
						{column.render('Header')}
					</th>
					))}
				</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(row => {
				prepareRow(row)
				return (
					<tr {...row.getRowProps()}>
					{row.cells.map(cell => {
						return (
						<td
							{...cell.getCellProps()}
							style={{
							padding: '10px',
							border: 'solid 1px gray',
							background: 'papayawhip',

							}}
						>
							{cell.render('Cell')}
						</td>
						)
					})}
					</tr>
				)
				})}
			</tbody>
			</table>
		</div>
    )
}