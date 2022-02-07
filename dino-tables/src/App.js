import React from "react"
import data from './fs-sample-data.json';
import Table from "./components/Table";
import './index.css';


export default function App() {
    const [dino, setDino] = React.useState(data.dinosaurs);
    const [loot, setLoot] = React.useState(data.loot);
    const [habitat, setHabitat] = React.useState(data.habitats);

    function editDino() {

    }

    function deleteDino(e, id) {
        setDino(prevDino => prevDino.map(dino => dino.id !== id));
    }

    function addDino() {

    }
    
    return (
        <div>
            <h2>Loot: {loot.length}</h2>
            <h2>Dino: {dino.length}</h2>
            <h2>Habitat: {habitat.length}</h2>
            
            <button>Add</button>
            <button>Delete</button>
            <button>Edit</button>
            <Table data={dino} editable={true} deleteDino={deleteDino}/>
            <Table data={habitat} editable={false}/>
            <Table data={loot} editable={false}/>

        </div>
        
    )
}