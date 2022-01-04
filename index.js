const returnFirstTwoDrivers = function (newArr) {
       return newArr.slice(0,2)
}

const returnLastTwoDrivers = function (newArr) {
    return newArr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (fare) {return num * fare};
}
const fareDoubler = function (num) {
    return num * 2
}
const fareTripler = function (num) {
    return num * 3
}
function selectDifferentDrivers(arrayOfDrivers, fun) {
    return    fun(arrayOfDrivers)
}