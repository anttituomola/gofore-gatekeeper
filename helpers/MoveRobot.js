import { canvasFill, columns, squareSide, startingPoint } from "./Draw.js"

let count = 0
let robotDirection = "up"
let robotPath = []
const maxTries = 5000 // No specific reason for this number, just on top of my head

export default class MoveRobot {
    // What's under the robot now?
    decideRobotAction(robotLocation, canvasArray, canvasId) {
        if (canvasArray[robotLocation] === ".") {
            robotPath.push(robotLocation)
            this.moveRobot(robotLocation, canvasArray, canvasId)
        // If steps on obstacle, go back
        } else if (canvasArray[robotLocation] === "#") {
            if (robotDirection === "up") {
                robotLocation += columns
            } else if (robotDirection === "right") {
                robotLocation -= 1
            } else if (robotDirection === "down") {
                robotLocation -= columns
            } else if (robotDirection === "left") {
                robotLocation += 1
            }
            this.turnRobot(robotLocation, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "S") {
            robotPath.push(robotLocation)
            console.log("starting point:", robotLocation)
            this.moveRobot(startingPoint, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "E") {
            robotPath.push(robotLocation)
            console.log("Finnish:", robotLocation)
            const canvasIdString = canvasId.join("")

            document.getElementById("answer").innerHTML = `
            <h1>Steps needed: ${count}</h1>
            <p>Copy the aswer: ${canvasIdString}:${count}</p>
            `
            console.log("total count:", count)
            const drawPath = robotPath.slice(1)
            this.drawRobotPath(drawPath)
        }
    }

    // Move robot
    moveRobot(robotLocation, canvasArray, canvasId) {
        if (count < maxTries || canvasArray[robotLocation === "E"]) {
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
        } else if (count >= maxTries) {
            document.getElementById("answer").innerHTML = `Tried ${count} times, no luck!`
            count = 0
            robotDirection = "up"
            robotPath = []
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
        console.log(path)
        count = 0
        robotDirection = "up"
        robotPath = []
    }
}
