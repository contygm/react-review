import React from "react"
import Hero from "./components/Hero";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import './index.css';

export default function App() {
    return (
        <div>
          <Navbar />
          <Hero />
          <Card />
        </div>
    )
}