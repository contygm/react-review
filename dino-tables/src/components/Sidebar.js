
import React from "react"
import {Nav} from "react-bootstrap";

export default function Sidebar(props) {

	return( 
		<section className="sidebar flex-column">
			<div className="sidebar-header">
				<h3>Tables</h3>
			</div>
			<Nav className="flex-column" activeKey="#">
                
            <Nav.Item key="all" className="nav-item" onClick={() => props.setCurrentTable("all")}>
				<Nav.Link href="#">View All</Nav.Link>
			</Nav.Item>
			{
				props.tableNames.map(name => {
					return <Nav.Item key={name} onClick={() => props.setCurrentTable(name)}>
						<Nav.Link href="#">{name}</Nav.Link>
					</Nav.Item>
				})
			}
        </Nav>
		</section>
		
	)
	
}
