import React from "react"
import Hero from "./components/Hero";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import data from "./data"
import './index.css';

export default function App() {
    const cards = data.map(item => {
      return <Card 
        key = {item.id}
        {...item}
      />
    });

    return (
        <div>
          <Navbar />
          <Hero />
          <section className="card-list">
            {cards}
          </section>
        </div>
    )
}