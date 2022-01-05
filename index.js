const canvas = document.getElementById("lostRobot")
const canvasFill = lostRobot.getContext("2d")
let kokoPaska = `
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
const trimmedCanvasContent = kokoPaska.replace(/(\r\n|\n|\r)/gm, "")
const canvasArray = trimmedCanvasContent.split("")
const obstacles = []

const boardBorder = "red"
const boardFill = "grey"
const robotFill = "red"
let canvasWidth = trimmedCanvasContent.length / 3
let canvasHeight = trimmedCanvasContent.length / 5

findStartingPoint()

function findStartingPoint() {
    // Find the point in the canvas with "S"
    startingPoint = "S"
    startingIndex = [canvasArray.indexOf("S")]

    handleCanvas(startingIndex)
}

function handleCanvas() {
    let x = 0
    let y = 0
    let index = -1

    // canvas background color

    // go through every square, keep track of the index
    while (x <= canvasWidth && y <= canvasHeight) {
        canvasFill.fillStyle = boardFill
        canvasFill.fillRect(x, y, 10, 10)
        canvasFill.strokeRect(x, y, 10, 10)
        x += 10
        index++
        // If at end of the row, move to the next one
        if (x === canvasWidth && y !== canvasHeight) {
            y += 10
            x = 0
        }

        // draw the robot
        if (index === startingIndex[0]) {
            canvasFill.fillStyle = robotFill
            canvasFill.fillRect(x, y, 10, 10)
            canvasFill.strokeRect(x, y, 10, 10)
            x += 10
            index++
        }
    }
}

function drawObstacles() {
    // Find obstacles
    canvasArray.map((element, index) => {
        if (element === "#") {
            obstacles.push(index)
        }
    })
    console.log(obstacles)

    // draw obstacles
    indexFound = obstacles.some(el => el === index)
    if (indexFound) {
        canvasFill.fillStyle = "green"
        canvasFill.fillRect(x, y, 10, 10)
        canvasFill.strokeRect(x, y, 10, 10)
        x += 10
        if (x === canvasWidth && y !== canvasHeight) {
            y += 10
            x = 0
        }
    }
}



// Find the S index with filter() and store it to variable
// let robotLocation = canvasS
// Start moving thr robot upwards: robotLocation = canvas[robotLocation-30]
// from there, use conditional to check what's under the robot: if dot or S, move onwards, if #, turn right, if E, stop.
// add count in each step, expect if S
// handle direction somehow
