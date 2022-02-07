import React from "react"
import Table from "./Table";


export default function TableView(props) {
	const [dino, setDino] = React.useState(props.allData["dinosaurs"]);
	const [addDinoData, setAddDinoData] = React.useState({});
	const [editDinoData, setEditDinoData] = React.useState({});

	function handleEditDinoChange(event) {
		event.preventDefault();

		const key = event.target.getAttribute("name");
		const value = event.target.value;

		const newFormData = { ...editDinoData };
		newFormData[key] = value;
		console.log(newFormData, key, value)
		setEditDinoData(newFormData);
	};

	function handleSaveClick(event, type) {
		event.preventDefault();
		if(type === "add") {
			setDino(prevDinos => {
				prevDinos.map(dino => dino.id === addDinoData.id ? addDinoData : dino)
			})
			setAddDinoData({});
		} else {
			console.log(editDinoData.id)
			console.log(dino.map(d => d.id === editDinoData.id ? editDinoData : d))

			setDino(dino.map(d => d.id === editDinoData.id ? editDinoData : d));
			setEditDinoData({});
		}
	}

	const handleEditClick = (event, dinoObj) => {
		event.preventDefault();
		setEditDinoData(dinoObj);
	};

	const handleCancelClick = (event) => {
		event.preventDefault();
		setEditDinoData({});
		setAddDinoData({});
	};

    function deleteRow(e, id) {
        e.stopPropagation()        
        setDino(prevData => prevData.filter(entry => entry.id !== id));
    }

	return( 
		<section className="table-view">

		{props.currentTable === "all" ?
			Object.keys(props.allData).map(key => {
				return key === "dinosaurs" ? 
					<Table 
						key={key} 
						data={dino} 
						tableName="dinosaurs" 
						editDinoData={editDinoData}
						deleteRow={deleteRow} 
						handleEditClick={handleEditClick} 
						handleCancelClick={handleCancelClick}
						handleEditDinoChange={handleEditDinoChange}
						handleSaveClick={handleSaveClick}
					/> :
				 	<Table key={key} data={props.allData[key]} tableName={key} deleteRow={deleteRow}/>
			})
		:
			props.currentTable ===  "dinosaurs" ?
				<Table 
					data={dino} 
					tableName={props.currentTable} 
					deleteRow={deleteRow} 
					editDinoData={editDinoData}
					handleEditClick={handleEditClick} 
					handleCancelClick={handleCancelClick}
					handleEditDinoChange={handleEditDinoChange}
					handleSaveClick={handleSaveClick}
				/> : 
				<Table data={props.allData[props.currentTable]} tableName={props.currentTable} deleteRow={deleteRow}/>
		}

		

		</section>
	)
}