import React from "react"
import { useTable } from 'react-table'

export default function Table(props) {
	const cols = Object.keys(props.data[0]).map(key => ({
		Header: key.charAt(0).toUpperCase() + key.slice(1),
        accessor: key
	}));
	const data = React.useMemo(() => props.data ,[]);
	const columns = React.useMemo(() => cols,[]);
	console.log(cols)
	console.log(data)
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