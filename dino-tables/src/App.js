import React from "react"
import data from './fs-sample-data.json';
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import Split from "react-split"
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
            <Split 
                sizes={[20, 80]} 
                direction="horizontal" 
                className="split"
                gutterSize={5}
            >
                <Sidebar/>
                <TableView />
            {/* <Table data={dino} deleteDino={deleteDino}/>
            <Table data={habitat} />
            <Table data={loot} /> */}
            </Split>
        </div>
        
    )
}