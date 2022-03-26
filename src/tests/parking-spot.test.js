import React from "react";
import renderer from "react-test-renderer";
import ParkingSpot from "../components/ui/parking-spot";

test("Testing Parking Spot doesn't have an image if empty",()=>{
    const component = renderer.create(
        <ParkingSpot empty={true} direction="down" spot={1} />
    );
    const instance = component.root;
    const tree = component.toJSON();
    
    expect(tree).toMatchSnapshot();
    expect(instance.findAllByType("img")).toStrictEqual([]);    
});

test("Testing Parking Spot must have an image if occupied",()=>{
    const component = renderer.create(
        <ParkingSpot empty={false} direction="up" spot={1} />
    );
    const instance = component.root;    
    expect(instance.findAllByType("img").length).toBe(1);    
});