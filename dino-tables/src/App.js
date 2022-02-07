import React from "react"
import data from './fs-sample-data.json';
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import Split from "react-split"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default function App() {
    const [currentTable, setCurrentTable] = React.useState('all');
    const tableNames = Object.keys(data);

    return (
        <div>
            <Split 
                sizes={[20, 80]} 
                direction="horizontal" 
                className="split"
                gutterSize={5}
            >
                <Sidebar tableNames={tableNames} setCurrentTable={setCurrentTable}/>
                <TableView allData={data} currentTable={currentTable} />
            </Split>
        </div>
        
    )
}