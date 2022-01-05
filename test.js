const canvas = document.getElementById("lostRobot")
const canvasFill = lostRobot.getContext("2d")
let copyPaste = `
##################################################
#.................#.#.......#.............#......#
#.................E...........................#..#
#..................#.............................#
#..........................#.....................#
#................................................#
#................#...............................#
#........................................#.......#
#................................................#
#.....................................#..........#
#.......................S....................#...#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
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


drawCanvas()

function drawCanvas() {
    let x = 0
    let y = 0
    let index = 0
    
    while (index < trimmedCanvasContent.length) {
        for (const el of canvasArray) {
            if (el === ".") {
                canvasFill.fillStyle = boardFill
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
            }
            if (el === "#") {
                canvasFill.fillStyle = obstacleColor
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
            }
            if (el === "S") {
                canvasFill.fillStyle = "green"
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
                startingPoint = index
            }
            if (el === "E") {
                canvasFill.fillStyle = "pink"
                canvasFill.fillRect(x, y, 10, 10)
                canvasFill.strokeRect(x, y, 10, 10)
            }
            x += 10
            index++
            if (x === canvasWidth && y !== canvasHeight) {
                y += 10
                x = 0
            }
        }
    }
    decideRobotAction(startingPoint)
}

function turnRobot() {
    if (robotDirection === "up") {
        robotLocation += 1
        robotDirection = "right"
    }
    if (robotDirection === "right") {
        robotLocation += 30
        robotDirection = "down"
    }
    if (robotDirection === "down") {
        robotLocation -= 1
        robotDirection = "left"
    }
    if (robotDirection === "left") {
        robotLocation -= 30
        robotDirection = "up"
    }
    moveRobot()
}

function moveRobot(robotLocation) {
    if (robotDirection === "up") {
        robotLocation += 1
    }
    if (robotDirection === "right") {
        robotLocation += 30
    }
    if (robotDirection === "down") {
        robotLocation -= 1
    }
    if (robotDirection === "left") {
        robotLocation -= 30
    }
}

function decideRobotAction(robotLocation) {
    if (canvasArray[robotLocation] === ".") {
        moveRobot()
    }
    if (canvasArray[robotLocation] === "#") {
        turnRobot()
    }
    if (canvasArray[robotLocation] === "S") {
        moveRobot(robotLocation)
    }
    if (canvasArray[robotLocation] === "E") {
        alert("HERE")
    }
}