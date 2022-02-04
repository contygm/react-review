import React from "react"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import './index.css';

export default function App() {
    return (
        <div>
          <Navbar />
          <Hero />
        </div>
    )
}