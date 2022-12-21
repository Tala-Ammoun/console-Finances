let finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682, 458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];


//total number of months
let totalMonths = finances.length
console.log("Total Months: " + totalMonths)

//net total
let netTotalArray = []
let netTotal = 0 //to initialize a variable is to assign it an initial value. 
                 //Initialization must be done before the variable is used, otherwise it will hold a value of "undefined" or "null".
for (let i = 0; i < totalMonths; i++){
    let innerArrayNumbers = finances[i][1] //targeting the numbers in each sub-array
    netTotal += innerArrayNumbers // this is the total profit for each period
    netTotalArray.push(netTotal)
}
let netTotalNumb =  netTotalArray[netTotalArray.length - 1] //this targets the last element of the netTotalArray, which is the sum for the entire period. Another way is let netTotalNumb =  netTotalArray.slice(-1)[0] 
console.log("Total " + "$" + netTotalNumb)

//Average change for the entire period
let changesArray = [] //this is an empty array where we can store the values resulting from (current - previous)
let changesTotal = 0 //this is the sum of all the change in profits from month to month

for (let x = 0; x < totalMonths; x++) {
    let current = finances[x][1] //we target the 2nd element in each sub-array
    if (x >= 1) { //since the sub-arrays start at index 0, we are starting at 1 so that we could get the value of 1 - 0. 
        let previous = finances[x - 1][1] // we target the 2nd element in each previous sub-array 
        changesArray.push(current - previous)
    }
}

for (let y = 0; y < changesArray.length; y++) {
    let element = changesArray[y];
    changesTotal = changesTotal + element //this is total change for the entire period
}

let averageChange = changesTotal / totalMonths
console.log("Average change: " + "$" + parseFloat(averageChange).toFixed(2)) //using parseFloat and toFixed(2) we keep two decimal numbers after the point.

//The greatest increase in profits (date and amount) over the entire period.
let increaseArray = []
for (let a = 0; a < changesArray.length; a++) {
    if (a >= 1) {
        let previous = finances[a - 1][1]
        let increaseDate = finances[a][0] //this targets all the dates in finances
        if (changesArray[a] / previous > 0) { // the [a] targets all the elements within the changesArray. We are targeting all +ve numbers ==> increases.
            let increaseConstant = changesArray[a] / previous //this is the operation to calculate the increase for each period
            increaseArray.push([increaseDate, increaseConstant]) // we store the increases and their corresponding dates in a new array.
        }
    }
}
console.log(increaseArray)

let greatestIncrease = increaseArray[0][1] // we are targeting the 2nd element in the first array. To initialize something is to give it an initial value.
let greatestIncDate = increaseArray[0][0] // we are targeting the 1st element in the first array. 
for (let c = 0; c < increaseArray.length; c++) { //everytime the loop iterates over a value in the increaseArray
    if (greatestIncrease < increaseArray[c][1]) { //if the 2nd value it iterates over is bigger than the previous value it iterated over
        greatestIncrease = increaseArray[c][1] //let the second value be the maximum. Once the loop finds the maximum value with nothing higher, the condition becomes false and the loop stops
        greatestIncDate = increaseArray[c][0] //let the date be the one of the same array as the maximum value.
    }}

for (let i = 0; i < finances.length; i++) {
    let financesArray = finances[i][0] //we target the dates in all the finances arrays
    let targetArray = financesArray.includes(greatestIncDate) //we target the array that includes greatestIncDate 
    if (targetArray == true){ //once array is found
        //console.log (i) // display array number
        console.log("Greatest Increase in Profits: " + finances[i][0] + " (" + "$" + finances[i][1] + ")")
    }}

// The greatest decrease in losses (date and amount) over the entire period.
let decreaseArray = []
for (let a = 0; a < changesArray.length; a++) {
    if (a >= 1) {
        let previous = finances[a - 1][1]
        let decreaseDate = finances[a][0] //this targets all the dates in finances. 
        if (changesArray[a] / previous < 0) { // the [a] targets all the elements within the changesArray. We are targeting all -ve numbers ==> decreases.
            let decreaseConstant = changesArray[a] / previous //this is the operation to calculate the decrease for each period
            decreaseArray.push([decreaseDate, decreaseConstant])
        }
    }
}

let greatestDecrease = decreaseArray[0][1] // we are targeting the 2nd element in the first array. To initialize something is to give it an initial value.
let greatestDecDate = decreaseArray[0][0] // we are targeting the 1st element in the first array.
for (let c = 0; c < decreaseArray.length; c++) { //everytime the loop iterates over a value in the decreaseArray
    if (greatestDecrease > decreaseArray[c][1]) { //if the 2nd value it iterates over is less than the previous value it iterated over
        greatestDecrease = decreaseArray[c][1] //let the second value be the minimum. Once the loop finds the minimum value with nothing lower, the condition becomes false and the loop stops
        greatestDecDate = decreaseArray[c][0] //let the date be the one of the minimum value.
    } 
}

for (let i = 0; i < finances.length; i++) {
    let financesArray = finances[i][0] //we are targeting the 1st element/the dates in all the arrays within finances 
    let targetArray = financesArray.includes(greatestDecDate) //we target the array that includes greatestDecDate 
    if (targetArray == true){ //once array is found
        //console.log (i) // display array number
        console.log("Greatest Decrease in Profits: " + finances[i][0] + " (" + "$" + finances[i][1] + ")")
    }}
