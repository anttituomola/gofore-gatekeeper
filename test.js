const canvas = document.getElementById("lostRobot")
const canvasFill = lostRobot.getContext("2d")
let copyPaste = `
##################################################
#................................................#
#.......................#............#...........#
#..................#......#................#.....#
#.............................................#..#
#......................#.........................#
#.................................#..........#...#
#.............................................#..#
#...........#.....#..............................#
#.......................#........#...........#...#
#............................#............#......#
#.................#.................#............#
#..........................................#.....#
#................................................#
#................................................#
#................................................#
#..........#..........................#..........#
#..................................#..........#..#
#...................#.......#....................#
#.................E..........................#...#
#................................................#
#...................................#............#
#.........................................#......#
#..................#.............................#
#.................S.#....#...........#...........#
#..........................#................#....#
#..................#....#........................#
#......................#..#......................#
#................................................#
##################################################`

//remove line breaks from the content to get real length
const trimmedCanvasContent = copyPaste.replace(/(\r\n|\n|\r)/gm, "")
const canvasArray = trimmedCanvasContent.split("")

const boardBorder = "red"
const boardFill = "grey"
const robotFill = "red"
const obstacleColor = "purple"
let canvasWidth = trimmedCanvasContent.length / 3
let canvasHeight = trimmedCanvasContent.length / 5
let startingPoint = 0
let robotDirection = "up"
let robotLocation
let count = 0


drawCanvas()

function drawCanvas() {
    let x = 0
    let y = 0
    let drawIndex = 0

    while (drawIndex < trimmedCanvasContent.length) {
        for (const el of canvasArray) {
            if (el === ".") {
                canvasFill.fillStyle = boardFill
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
            }
            else if (el === "#") {
                canvasFill.fillStyle = obstacleColor
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
            }
            else if (el === "S") {
                canvasFill.fillStyle = "green"
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
                startingPoint = drawIndex
            }
            else if (el === "E") {
                canvasFill.fillStyle = "pink"
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
            }

            x += 10
            drawIndex++
            if (x === canvasWidth && y !== canvasHeight) {
                y += 10
                x = 0
            }
        }
    }
    decideRobotAction(startingPoint)
}

// What's under the robot now?
function decideRobotAction(robotLocation) {
    if (canvasArray[robotLocation] === ".") {
        moveRobot(robotLocation)
    }
    else if (canvasArray[robotLocation] === "#") {
        turnRobot(robotLocation)
    }
    else if (canvasArray[robotLocation] === "S") {
        moveRobot(robotLocation)
    }
    else if (canvasArray[robotLocation] === "E") {
        console.log(count)
        return count
    }
}

// Move robot
function moveRobot(robotLocation) {
    if (count < 1000) {
        if (robotDirection === "up") {
            robotLocation -= 50
        }
        else if (robotDirection === "right") {
            robotLocation += 1
        }
        else if (robotDirection === "down") {
            robotLocation += 50
        }
        else if (robotDirection === "left") {
            robotLocation -= 1
        }
        count++
        figureOutLocationFromIndex(robotLocation)
        decideRobotAction(robotLocation)
    } else if (count >= 1000) {
        console.log(`Tried ${count} times, no luck!`)
    }
}

// Turn robot
function turnRobot(robotLocation) {
    if (robotDirection === "up") {
        robotDirection = "right"
    }
    else if (robotDirection === "right") {
        robotDirection = "down"
    }
    else if (robotDirection === "down") {
        robotDirection = "left"
    }
    else if (robotDirection === "left") {
        robotDirection = "up"
    }
    moveRobot(robotLocation)
}



function figureOutLocationFromIndex(index) {
    const rows = 30
    const colums = 50
    let x = 0 
    let y = 0
    const remainder = index % colums
    const rowCount = (index - remainder) / colums
    y = rowCount * 10
    x = remainder * 10
    canvasFill.fillStyle = "black"
    canvasFill.fillRect(x, y, 10, 10)
    canvasFill.strokeRect(x, y, 10, 10)
}