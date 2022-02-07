import React from "react"

export default function Table(props) {
	
	// function getKeyArray(dataArray) {
    //     return Object.keys(dataArray[0]).map(key => {
	// 		if(typeof dataArray[0][key] === 'object' && !Array.isArray(dataArray[0][key])) {
	// 			let nested = [key];
	// 			console.log("key", key)
	// 			dataArray.forEach(loo => {
	// 				nested.push(...Object.keys(loo[key]))
	// 			})
				
	// 			return [...Array.from(new Set(nested))];
	// 		}

    //     return key;
    // })}

	// function makeCols(keyArray)  {
	// 	let res = [];
	// 	keyArray.forEach(key => {
	// 		if(Array.isArray(key)) {
	// 			const header = key.shift();
	// 			res.push(...key.map(k => ({
	// 				Header: k.charAt(0).toUpperCase() + k.slice(1),
	// 				accessor: `${header}.${k}`
	// 			})))
				
	// 		} else {
	// 			res.push({
	// 				Header: key.charAt(0).toUpperCase() + key.slice(1),
	// 				accessor: key
	// 			}) 
	// 		}

	// 	});

	// 	return res;
	// }

	// const Buttons = () => (
	// 	<div>
	// 		<button onClick={(e) => props.deleteDino(id)}>Delete</button>
	// 		<button>Edit</button>
	// 	</div>
	// )

    return (
       <div>
	   		{props.tableName}
		</div>
    )
}