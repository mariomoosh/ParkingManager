import appConfig from "../config/appConfig";
import * as apiServices from "./apiServices";

const getParkingSpotsByLotId = async (lotId)=>{    
    const response = await apiServices.SendRequest(`${appConfig.ApiUrl}/ParkingSpot?lotId=${lotId}`,apiServices.HTTPVERBS.Get,null);
    return response;
}

export {getParkingSpotsByLotId}