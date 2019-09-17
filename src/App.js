import React from 'react'
import "./App.css"
import Nav from './Components/Nav'
import Aside from "./Components/App2"
import Main from "./Components/Main"

const App = () => {
    return (
        <div>
            <Nav/>
            <main className="Any">
            <Main/>  
            <Aside/>
            </main>
        </div>
    )
}

export default App
