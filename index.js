const returnFirstTwoDrivers = function(array) {
    const a1 = [];
    for (let i = 0; i <= array.length - 3; i++) {
        a1[i] = array[i];
    }
    return a1;
}
const returnLastTwoDrivers = function(array) {
    const a2 = [];
    for (let i = 3; i > 1; i--) {
        a2[i-2] = array[i];
    }
    return a2;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
    return function(fare) {
        let money = integer * fare;
        return money;
    }
}
function fareDoubler(fare) {
    const double = createFareMultiplier(2)(fare);
    return double;
}
function fareTripler(fare) {
    const triple = createFareMultiplier(3)(fare);
    return triple;
}
function selectDifferentDrivers(arrayOfDrivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}