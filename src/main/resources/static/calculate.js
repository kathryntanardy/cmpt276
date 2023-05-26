var grades = [];
var boundaries = [100.00, 95.00, 90.00, 85.00, 80.00, 75.00, 70.00, 65.00, 60.00, 55.00, 50.00, 0];
var histogramNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var boundariesLength = boundaries.length;
var histogramLength = histogramNum.length;
const idOfTd = ['aplus', 'a', 'aminus', 'bplus', 'b', 'bminus', 'cplus', 'c', 'cminus', 'd', 'f']
var barLength = idOfTd.length;


var newGradeInput = document.getElementById('ng')
newGradeInput.addEventListener('keypress', function (evt) {
    if (evt.key == "Enter") {
        evt.preventDefault()
        var num = newGradeInput.value
        if (num < boundaries[11] || num > boundaries[0]) {
            window.alert('Invalid Number')
            return;
        }
        else {
            grades.push(num)
            checkNum(num)
        }
    }
})

function changeBoundaries(element, index) {
    let newBoundary = element.value
    if (index == 0) {
        if (boundaries[index + 1] == newBoundary)
            window.alert('No overlapping grades: Please re-enter number')
        else if (boundaries[index + 1] > newBoundary)
            window.alert('Number cannot be smaller than the next lower bound: Please re-enter number')
        else
            boundaries[0] = parseInt(newBoundary);
    }
    else if (index == (boundariesLength - 1)) {
        if (boundaries[index - 1] == newBoundary)
            window.alert('No overlapping grades')
        else if (boundaries[index - 1] < newBoundary)
            window.alert('Number cannot be larger than the next upper bound: Please re-enter number')
        else if (newBoundary < 0)
            window.alert('Grades cannot be negative: Please re-enter number')
        else
            boundaries[11] = parseInt(newBoundary)
    }
    else {
        if ((boundaries[index + 1] == newBoundary) || (boundaries[index - 1] == newBoundary))
            window.alert('No overlapping grades: Please re-enter number')
        else if (boundaries[index + 1] > newBoundary)
            window.alert('Number cannot be smaller than the next lower bound: Please re-enter number')
        if (boundaries[index - 1] < newBoundary)
            window.alert('Number cannot be larger than the next upper bound: Please re-enter number')
        else {
            boundaries[index] = parseInt(element.value);
            updateHistogram();
        }
    }
}


function updateHistogram() {
    for (let j = 0; j < histogramLength; j++) {
        histogramNum[j] = 0;
    }

    for (let k = 0; k < grades.length; k++) {
        checkNum(grades[k])
    }

    for (let m = 0; m < barLength; m++) {
        let bar = document.getElementById(idOfTd[m])
        bar.innerHTML = "";
    }

    for (let n = 0; n < barLength; n++) {
        let count = histogramNum[n];
        for (let h = 0; h < count; h++)
            testInserting(n)
    }
}

function checkNum(newNumber) {
    for (let i = 1; i < boundariesLength; i++) {
        if (newNumber >= boundaries[i]) {
            changeNum(i - 1)
            return
        }
    }
}

function changeNum(index) {
    var num = histogramNum[index] + 1;
    histogramNum[index] = num;
    testInserting(index);
}

function testInserting(index) {
    let testing = document.getElementById(idOfTd[index])
    testing.innerHTML += 'aa'
}

