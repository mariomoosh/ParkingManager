import React from "react";
import { useState } from "react";

const ParkingSpot = (props)=>{    
    const [empty,setEmpty] = useState(props.empty);
    const {direction,spot,addCar,removeCar} = props;       
    const handleAssignation = ()=>{
        setEmpty(!empty);        
        if(empty) addCar(); else removeCar();
    }
    return(
        <>
        <div onClick={handleAssignation} className={`parkingSpot text-center spot-${direction} ${empty?"spot-empty":"spot-occupied"}`}>
            {empty
                ?null
                :(<img src="/resources/img/car.png" />)}
            <label>{spot}</label>
        </div>
        </>
    );
}

export default ParkingSpot;