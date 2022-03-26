import * as lotServices from "../services/parkingLotServices";

jest.mock("../services/apiServices",()=>{
        return {
            SendRequest: jest.fn(()=>{return [{lotId:1,lotName:"dallas downtown"},{lotId:2,lotName:"dallas uptown"}]}),
            HTTPVERBS: jest.fn(()=>{return "Get"})
        }
    }
)

test("Should fetch parking lots",async ()=>{           
    const list  = await lotServices.getParkingLots();
    expect(list.length).toBe(2);
});
