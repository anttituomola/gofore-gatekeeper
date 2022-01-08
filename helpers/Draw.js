import MoveRobot from "./MoveRobot.js"
const robot = new MoveRobot()

const lostRobot = document.getElementById("lostRobot")

export const canvasFill = lostRobot.getContext("2d")

export let startingPoint = 0

// Base values
export const squareSide = 10
export const rows = 30
export const columns = 50

export default class Draw {
    drawCanvas(canvasArray, canvasId, canvasHeight, canvasWidth) {

        let xLocation = 0
        let yLocation = 0
        let drawIndex = 0

        while (drawIndex < canvasArray.length) {
            for (const el of canvasArray) {
                if (el === ".") {
                    canvasFill.fillStyle = "#f3f6f7"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                } else if (el === "#") {
                    canvasFill.fillStyle = "#fed1e5"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                } else if (el === "S") {
                    canvasFill.fillStyle = "#325c79"
                    canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                    canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
                    startingPoint = drawIndex
                } else if (el === "E") {
                    canvasFill.fillStyle = "#ff7200"
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
}

