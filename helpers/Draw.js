import MoveRobot from "./MoveRobot.js"

const lostRobot = document.getElementById("lostRobot")
const canvasFill = lostRobot.getContext("2d")

export let startingPoint = 0

// Base values
export const squareSide = 10
export const rows = 30
export const columns = 50

export default class Draw {
    drawCanvas(canvasArray, canvasId, canvasHeight, canvasWidth) {
        const robot = new MoveRobot()

        let xLocation = 0
        let yLocation = 0
        let drawIndex = 0

        while (drawIndex < canvasArray.length) {
            for (const el of canvasArray) {
                if (el === ".") {
                    canvasFill.fillStyle = "grey"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                } else if (el === "#") {
                    canvasFill.fillStyle = "purple"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                } else if (el === "S") {
                    canvasFill.fillStyle = "green"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                    startingPoint = drawIndex
                } else if (el === "E") {
                    canvasFill.fillStyle = "pink"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                }

                xLocation += squareSide
                drawIndex++
                if (xLocation === canvasWidth && yLocation !== canvasHeight) {
                    yLocation += squareSide
                    xLocation = 0
                }
            }
        }
        robot.decideRobotAction(startingPoint, canvasArray, canvasId)
    }

    // Turn index into location coordinates and draw robot path
    drawRobotPath(index) {
        const remainder = index % columns
        const rowCount = (index - remainder) / columns

        let yLocation = rowCount * squareSide
        let xLocation = remainder * squareSide

        canvasFill.fillStyle = "black"
        canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
        canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
    }
}

