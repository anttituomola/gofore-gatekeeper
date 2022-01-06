const lostRobot = document.getElementById("lostRobot")
const canvasFill = lostRobot.getContext("2d")

document.getElementById("inputButton").addEventListener("click", getInput)

// Initial values
let canvasWidth = 0
let canvasHeight = 0
let startingPoint = 0
let robotDirection = "up"
let count = 0
const squareSide = 10
const colums = 50
const rows = 30
let canvasId = 0

function getInput() {
    const inputValue = document.getElementById("inputCanvas").value

    // Remove line breaks from the content to get real length
    const trimmedCanvasContent = inputValue.replace(/(\r\n|\n|\r)/gm, "")
    let canvasArray = trimmedCanvasContent.split("")

    // Get the ID out of the input
    canvasId = canvasArray.slice(0, 7)

    // Get the canvas out of the input
    canvasArray = canvasArray.splice(7, canvasArray.length)

    canvasWidth = canvasArray.length / (rows / squareSide)
    canvasHeight = canvasArray.length / (colums / squareSide)

    drawCanvas(canvasArray, canvasId)
}

function drawCanvas(canvasArray) {
    let x = 0
    let y = 0
    let drawIndex = 0

    while (drawIndex < canvasArray.length) {
        for (const el of canvasArray) {
            if (el === ".") {
                canvasFill.fillStyle = "grey"
                canvasFill.fillRect(x, y, squareSide, squareSide)
                canvasFill.strokeRect(x, y, squareSide, squareSide)
            } else if (el === "#") {
                canvasFill.fillStyle = "purple"
                canvasFill.fillRect(x, y, squareSide, squareSide)
                canvasFill.strokeRect(x, y, squareSide, squareSide)
            } else if (el === "S") {
                canvasFill.fillStyle = "green"
                canvasFill.fillRect(x, y, squareSide, squareSide)
                canvasFill.strokeRect(x, y, squareSide, squareSide)
                startingPoint = drawIndex
            } else if (el === "E") {
                canvasFill.fillStyle = "pink"
                canvasFill.fillRect(x, y, squareSide, squareSide)
                canvasFill.strokeRect(x, y, squareSide, squareSide)
            }

            x += squareSide
            drawIndex++
            if (x === canvasWidth && y !== canvasHeight) {
                y += squareSide
                x = 0
            }
        }
    }
    decideRobotAction(startingPoint, canvasArray, canvasId)
}

// What's under the robot now?
function decideRobotAction(robotLocation, canvasArray) {
    if (canvasArray[robotLocation] === ".") {
        moveRobot(robotLocation, canvasArray)
    } else if (canvasArray[robotLocation] === "#") {
        turnRobot(robotLocation, canvasArray)
    } else if (canvasArray[robotLocation] === "S") {
        moveRobot(robotLocation, canvasArray)
    } else if (canvasArray[robotLocation] === "E") {
        const canvasIdString = canvasId.join("")

        document.getElementById("answer").innerHTML = `
        <h1>Steps needed: ${count}</h1>
        <p>Copy the aswer: ${canvasIdString}:${count}</p>
        `
    }
}


// Move robot
function moveRobot(robotLocation, canvasArray) {
    if (count < 10000) {
        if (robotDirection === "up") {
            robotLocation -= colums
        } else if (robotDirection === "right") {
            robotLocation += 1
        } else if (robotDirection === "down") {
            robotLocation += colums
        } else if (robotDirection === "left") {
            robotLocation -= 1
        }
        count++
        figureOutLocationFromIndex(robotLocation, canvasArray)
        decideRobotAction(robotLocation, canvasArray)
    } else if (count >= 1000) {
        document.getElementById("answer").innerHTML = `Tried ${count} times, no luck!`
    }
}

// Turn robot
function turnRobot(robotLocation, canvasArray) {
    if (robotDirection === "up") {
        robotDirection = "right"
    } else if (robotDirection === "right") {
        robotDirection = "down"
    } else if (robotDirection === "down") {
        robotDirection = "left"
    } else if (robotDirection === "left") {
        robotDirection = "up"
    }
    moveRobot(robotLocation, canvasArray)
}


// Turn index into location coordinates
function figureOutLocationFromIndex(index) {
    let x = 0
    let y = 0
    const remainder = index % colums
    const rowCount = (index - remainder) / colums

    y = rowCount * squareSide
    x = remainder * squareSide
    canvasFill.fillStyle = "black"
    canvasFill.fillRect(x, y, squareSide, squareSide)
    canvasFill.strokeRect(x, y, squareSide, squareSide)
}
