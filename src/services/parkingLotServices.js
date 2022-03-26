import appConfig from "../config/appConfig";
import * as apiServices from "./apiServices";

const getParkingLots = async ()=>{    
    const response = await apiServices.SendRequest(`${appConfig.ApiUrl}/ParkingLot`,apiServices.HTTPVERBS.Get,null);
    return response;
}

export {getParkingLots}