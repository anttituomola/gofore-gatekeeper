
import {columns, rows, squareSide} from "../helpers/Draw.js"
import Draw from "./Draw.js"
const draw = new Draw()


export default class GetInput {
    getInput() {
        // Remove line breaks from the content to get real length
        const inputValue = document.getElementById("inputCanvas").value
        const trimmedCanvasContent = inputValue.replace(/(\r\n|\n|\r)/gm, "")
        let canvasArray = trimmedCanvasContent.split("")

        // Get the ID out of the input
        const canvasId = canvasArray.slice(0, 7)

        // Get the canvas out of the input
        canvasArray = canvasArray.splice(7, canvasArray.length)

        const canvasWidth = canvasArray.length / (columns / squareSide)
        const canvasHeight = canvasArray.length / (rows / squareSide)

        draw.drawCanvas(canvasArray, canvasId, canvasWidth, canvasHeight)

    }
}

