import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as lotsServices from "../services/parkingLotServices";

const Lots = ()=>{  
    const [parkingLots,setParkingLots] = useState([]);
    const navigate = useNavigate();    
    
    useEffect(()=>{
        fetchLots();
    },[]);

    const fetchLots = async()=>{
        var lots = await lotsServices.getParkingLots();
        setParkingLots(lots);        
    }
    return(
        <>                               
        <div className="container">
            <h1>Parking Lots Available</h1>
            <div className="parking-lot">
                {parkingLots.length 
                ?  parkingLots.map(lot=>{
                    return <div key={lot.lotId} 
                                className="parking-lot-box"
                                onClick={()=>{
                                    navigate(`/Lots/${lot.lotId}`);
                                }  }>
                                <div className="">
                                    <label>Parking Lot: {lot.lotName}</label>
                                    <br />
                                    <label>Capacity: 20</label>
                                </div>         
                            </div>
                })
                :""}        
            </div>
        </div>
        
        </>
    )
}

export default Lots;