import React from "react"
import { useTable } from 'react-table'

export default function Table(props) {
	

	function getKeyArray(dataArray) {
        return Object.keys(dataArray[0]).map(key => {
			if(typeof dataArray[0][key] === 'object' && !Array.isArray(dataArray[0][key])) {
				let nested = [key];
				dataArray.forEach(loo => {
					nested.push(...Object.keys(loo[key]))
				})
				
				return Array.from(new Set(nested));
			}

        return key;
    })}

	function makeCols(keyArray)  {
		return keyArray.map(key => {
			if(Array.isArray(key)) {
				console.log("1 make cols ", key[0])
				const header = key.shift();
				return {
					Header: header,
					accessor: `${header}`,
					columns: [
						key.map(k => {
							return {
								Header: k.charAt(0).toUpperCase() + k.slice(1),
								accessor: `${k}`,
							}
						})
					]
				}
			} 
			
			return {
				Header: key.charAt(0).toUpperCase() + key.slice(1),
				accessor: key
			}

		});
	}
	// 	return keyArray.map(key => ({
	// 		Header: key.charAt(0).toUpperCase() + key.slice(1),
	// 		accessor: key
	// 	}));
	// }

	const data = React.useMemo(() => props.data ,[]);
	const colHeaderArray = getKeyArray(props.data);
	const cols = makeCols(colHeaderArray);
	
	const columns = React.useMemo(() => cols,[]);
		console.log("2. ", columns)
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