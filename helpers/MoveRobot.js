import { canvasFill, columns, squareSide, startingPoint } from "./Draw.js"

let count = 0
let robotDirection = "up"
let robotPath = []

export default class MoveRobot {
    // What's under the robot now?
    decideRobotAction(robotLocation, canvasArray, canvasId) {
        if (canvasArray[robotLocation] === ".") {
            robotPath.push(robotLocation)
            this.moveRobot(robotLocation, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "#") {
            robotPath.push(robotLocation)
            this.turnRobot(robotLocation, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "S") {
            robotPath.push(robotLocation)
            this.moveRobot(startingPoint, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "E") {
            robotPath.push(robotLocation)
            const canvasIdString = canvasId.join("")

            document.getElementById("answer").innerHTML = `
            <h1>Steps needed: ${count}</h1>
            <p>Copy the aswer: ${canvasIdString}:${count}</p>
            `
            this.drawRobotPath(robotPath)
        }
    }

    // Move robot
    moveRobot(robotLocation, canvasArray, canvasId) {
        if (count < 4000 || canvasArray[robotLocation === "E"]) {
            if (robotDirection === "up") {
                robotLocation -= columns
            } else if (robotDirection === "right") {
                robotLocation += 1
            } else if (robotDirection === "down") {
                robotLocation += columns
            } else if (robotDirection === "left") {
                robotLocation -= 1
            }
            count++

            this.decideRobotAction(robotLocation, canvasArray, canvasId)
        } else if (count >= 4000) {
            document.getElementById("answer").innerHTML = `Tried ${count} times, no luck!`
        }
    }

    // Turn robot
    turnRobot(robotLocation, canvasArray, canvasId) {
        if (robotDirection === "up") {
            robotDirection = "right"
        } else if (robotDirection === "right") {
            robotDirection = "down"
        } else if (robotDirection === "down") {
            robotDirection = "left"
        } else if (robotDirection === "left") {
            robotDirection = "up"
        }
        this.moveRobot(robotLocation, canvasArray, canvasId)
    }


    // Turn index into location coordinates and draw robot path
    drawRobotPath(path) {
        path.forEach((point, index) => {
            setTimeout(() => {
                const remainder = point % columns
                const rowCount = (point - remainder) / columns

                const yLocation = rowCount * squareSide
                const xLocation = remainder * squareSide

                canvasFill.fillStyle = "black"
                canvasFill.fillRect(xLocation, yLocation, squareSide, squareSide)
                canvasFill.strokeRect(xLocation, yLocation, squareSide, squareSide)
            }, index * 10)
        })
        count = 0
        robotDirection = "up"
        robotPath = []

    }
}
