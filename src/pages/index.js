import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/header";
const Home = () =>{      
    return(
        <>            
            <div className="content">
                <main>
                    <Outlet />
                </main>                
            </div>
        </>
       
    )
}

export default Home;