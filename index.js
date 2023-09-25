// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor){
    const multiplier = function (fare){ return fare * factor; }
    return multiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, selection){
    return selection(drivers);
}
