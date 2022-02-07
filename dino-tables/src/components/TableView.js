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

	function handleAddDinoChange(event) {
		event.preventDefault();

		const key = event.target.getAttribute("name");
		const value = event.target.value;

		const newFormData = { ...addDinoData };
		newFormData[key] = value;
		console.log(newFormData, key, value)
		setAddDinoData(newFormData);
	};

	function handleSaveClick(event, type) {
		event.preventDefault();
		if(type === "add") {
			setDino(prevDinos => [...prevDinos, addDinoData])
			setAddDinoData({});
		} else {

			setDino(dino.map(d => d.id === editDinoData.id ? editDinoData : d));
			setEditDinoData({});
		}
	}

	const handleEditClick = (event, dinoObj) => {
		event.preventDefault();
		setEditDinoData(dinoObj);
	};

	const handleAddClick = (event, dinoObj) => {
		event.preventDefault();
		setAddDinoData({
			id: dino.length,
            name: "",
            description:"",
            habitats: [],
            image:"",
            price:"",
            level_unlock:"",
            active_time:"",
            loot:"",
            loot_interval:""
		});
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
						addDinoData={addDinoData}
						setAddDinoData={setAddDinoData}
						handleEditClick={handleEditClick} 
						handleCancelClick={handleCancelClick}
						handleEditDinoChange={handleEditDinoChange}
						handleAddClick={handleAddClick}
						handleAddDinoChange={handleAddDinoChange}
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
					addDinoData={addDinoData}
					setAddDinoData={setAddDinoData}
					handleEditClick={handleEditClick} 
					handleCancelClick={handleCancelClick}
					handleEditDinoChange={handleEditDinoChange}
					handleAddClick={handleAddClick}
					handleSaveClick={handleSaveClick}
				/> : 
				<Table data={props.allData[props.currentTable]} tableName={props.currentTable} deleteRow={deleteRow}/>
		}

		

		</section>
	)
}