import { BusStop } from "../../types/busTracking";

class BusTrackingService{
    claculateLeftovers(busStops: BusStop[]){
        if(!Array.isArray(busStops)){
          console.error("Input should be an array of bus stops");
          throw TypeError('Invalid input: Expected a bus stops array');
        }

        let currentPassengers = 0;
        for (let i =0; i< busStops.length; i++){
            currentPassengers += busStops[i].in;
            currentPassengers -= busStops[i].out;
        }

        console.log(`found ${currentPassengers} sleeping passengers`);
        return currentPassengers;
    }
}

export const busTrackingService = new BusTrackingService();