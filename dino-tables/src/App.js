import React from "react"
import data from './fs-sample-data.json';
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import Split from "react-split"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default function App() {
    // const [dino, setDino] = React.useState(data.dinosaurs);
    // const [loot, setLoot] = React.useState(data.loot);
    // const [habitat, setHabitat] = React.useState(data.habitats);
    const [allData, setAllData] = React.useState(data);
    const [currentTable, setCurrentTable] = React.useState('all');
    const tableNames = Object.keys(allData);

    return (
        <div>
            <Split 
                sizes={[20, 80]} 
                direction="horizontal" 
                className="split"
                gutterSize={5}
            >
                
                <Sidebar tableNames={tableNames} setCurrentTable={setCurrentTable}/>
                <TableView data={allData} currentTable={currentTable}/>
            
            </Split>
        </div>
        
    )
}