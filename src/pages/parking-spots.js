import React,{useState,useEffect} from "react";
import ParkingSpot from "../components/ui/parking-spot";
import { useParams } from "react-router-dom";
import * as spotsServices from "../services/parkingSpotServices";

const Spots = ()=>{    
    const [spots,setSpots] = useState([]);
    const [totalCars,setTotalCars] = useState(0);
    const qParams = useParams();
    const lotId = qParams.lotId;

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const spotsPayload = await spotsServices.getParkingSpotsByLotId(lotId);
        setSpots(spotsPayload);        
    }
    return(
        <>            
        <div className="container">
            <h1>Parking Lot</h1>
            <h2>Total Cars parked: {totalCars}</h2>
            {spots.length 
            ?
             (
                 ()=>{                    
                    const res = spots.reduce((acc, _, i) =>
                    (i % 3)
                      ? acc
                      : [...acc, spots.slice(i, i + 3)]
                  , []);                    
                    return res.map((row,i)=>{
                        return <div key={i} className="parking-row">
                                {row.map((item,idx)=>{return <ParkingSpot 
                                                                key={idx} 
                                                                direction={i%2?"up":"down"} 
                                                                empty={item.empty} 
                                                                spot={item.spot}
                                                                addCar={()=>{ setTotalCars(totalCars+1)}}
                                                                removeCar={()=>{setTotalCars(totalCars-1)}}  />} )}
                                </div>;
                    }) 
                 }
             )()                                
            :""}
            
        </div>
        
        </>
    )
}

export default Spots;