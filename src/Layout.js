import React from "react"
import './App.css'
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
        </div>
    )
};
export default Layout;