import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages";
import Spots from "./pages/parking-spots";
import Lots from "./pages/parking-lots";
import ErrorPage from "./pages/error-page";
import Navbar from "./components/navbar/header";

const App = () =>{
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Lots" element={<Lots />} />
                <Route path="/Lots/:lotId" element={<Spots />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
        
    )
}
export default App;