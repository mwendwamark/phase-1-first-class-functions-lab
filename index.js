// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari','Mo']
const returnFirstTwoDrivers = function (array){
    return array.slice(0,2)
}
const returnLastTwoDrivers= function(array){
let [a,b,...rest]   = array
return rest 
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function (dist){
        return fare*dist
    }

}
const calcFare=createFareMultiplier(3)
function fareDoubler (num){
    return num * 2
}
function fareTripler (num){
    return num * 3
}

 function selectDifferentDrivers(driverArray, returnFirstTwo) {
   return returnFirstTwo(driverArray);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));