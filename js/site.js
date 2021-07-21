//this is a comment
function comparebuildings() {
    let one = document.getElementById("building1").value
    let two = document.getElementById("building2").value
    let three = document.getElementById("building3").value
    let four = document.getElementById("building4").value
    let five = document.getElementById("building5").value
    let six = document.getElementById("building6").value

    let display = ["Building 1"];
    let display2 = []

    if (two > one) {
        display.push("Building 2")
    } else {
        display2.push("Building 2")
    }
    if (three > two && three > one) {
        display.push("Building 3")
    } else {
        display2.push("Building 3")
    }
    if (four > three && four > two && four > one) {
        display.push("Building 4")
    } else {
        display2.push("Building 4")
    }
    if (five > four && five > three && five > two && five > one) {
        display.push("Building 5")
    } else {
        display2.push("Building 5")
    }
    if (six > five && six > four && six > three && six > two && six > one) {
        display.push("Building 6")
    } else {
        display2.push("Building 6")
    }

    output2.innerHTML = display2
    output.innerHTML = display
}