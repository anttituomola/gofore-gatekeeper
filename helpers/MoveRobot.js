import Draw, { columns, startingPoint } from "./Draw.js"

let count = 0
let robotDirection = "up"

export default class MoveRobot {
    // What's under the robot now?
    decideRobotAction(robotLocation, canvasArray, canvasId) {
        if (canvasArray[robotLocation] === ".") {
            this.moveRobot(robotLocation, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "#") {
            this.turnRobot(robotLocation, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "S") {
            this.moveRobot(startingPoint, canvasArray, canvasId)
        } else if (canvasArray[robotLocation] === "E") {
            const canvasIdString = canvasId.join("")

            document.getElementById("answer").innerHTML = `
        <h1>Steps needed: ${count}</h1>
        <p>Copy the aswer: ${canvasIdString}:${count}</p>
        `
        }
    }

    // Move robot
    moveRobot(robotLocation, canvasArray, canvasId) {
        const draw = new Draw()

        if (count < 10000 || canvasArray[robotLocation === "E"]) {
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

            (function timeout() {
                window.setTimeout(draw.drawRobotPath, 1000, robotLocation)
            }())
            this.decideRobotAction(robotLocation, canvasArray, canvasId)
        } else if (count >= 1000) {
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
}
