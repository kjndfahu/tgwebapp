import './App.css';
import {useState} from "react";
import Home from "./components/Home";
import Beneficious from "./components/Benficious";
import Clasificaciom from "./components/Clasificaciom";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";
import MainWindow from "./components/MainWindow";

function App() {
    return (
        <div className="flex flex-col overflow-x-hidden items-center text-center gap-4 h-[100vh]">
            <MainWindow/>
        </div>)
}

export default App;
