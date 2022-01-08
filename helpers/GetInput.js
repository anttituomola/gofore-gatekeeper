
import {columns, rows, squareSide} from "../helpers/Draw.js"
import Draw from "./Draw.js"
const draw = new Draw()


export default class GetInput {
    getInput() {
        const validInputLength = 1507
        // Remove line breaks from the content to get real length
        const inputValue = document.getElementById("inputCanvas").value
        const trimmedCanvasContent = inputValue.replace(/(\r\n|\n|\r)/gmu, "")
        let canvasArray = trimmedCanvasContent.split("")

        // Make sure input is valid in length
        if (canvasArray.length === validInputLength) {
            // Get the ID out of the input
            const canvasId = canvasArray.slice(0, 7)
    
            // Get the canvas out of the input
            canvasArray = canvasArray.splice(7, canvasArray.length)
    
            const canvasWidth = canvasArray.length / (columns / squareSide)
            const canvasHeight = canvasArray.length / (rows / squareSide)
    
            draw.drawCanvas(canvasArray, canvasId, canvasWidth, canvasHeight)
        } else if (canvasArray.length < validInputLength) {
            document.getElementById("answer").innerHTML = `<p>You input was too short. Did you include the ID number as well?</p>`
        } else if (canvasArray.length > validInputLength) {
            document.getElementById("answer").innerHTML = `<p>You input was too long, please check your copy-paste.</p>`
        }
    }
}

