import React from "react"
import './App.css';
import {Routes , Route} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./IndexPage";
import LabMember from "./Components/LabMember";
import Project from "./Components/Project";
import Publication from "./Components/Publication";
import Collaborations from "./Components/Collaboration";
import AwardsAndHonors from "./Components/AwardsAndHonors";

function App() {
    return (
        <Routes>
            <Route path="/" element = {<Layout />}>
                <Route index element = {<IndexPage />} />
                <Route path = "/people" element = {<LabMember />} />
                <Route path = "/project" element = {<Project />} />
                <Route path = "/publication" element = {<Publication />} />
                <Route path = "/collaboration" element = {<Collaborations />} />
                <Route path = "/award" element = {<AwardsAndHonors />} />
            </Route>
        </Routes>
    )
}

export default App;