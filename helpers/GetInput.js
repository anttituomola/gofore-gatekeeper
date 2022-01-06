const inputValue = document.getElementById("inputCanvas").value

// Remove line breaks from the content to get real length
const trimmedCanvasContent = inputValue.replace(/(\r\n|\n|\r)/gm, "")
let canvasArray = trimmedCanvasContent.split("")

const canvasId = 0
const canvasWidth = 0
const canvasHeight = 0


export class GetInput {
    getinput() {
        // Get the ID out of the input
        this.canvasId = canvasArray.slice(0, 7)

        // Get the canvas out of the input
        canvasArray = canvasArray.splice(7, canvasArray.length)

        this.canvasWidth = canvasArray.length / (rows / squareSide)
        this.canvasHeight = canvasArray.length / (colums / squareSide)

        drawCanvas(canvasArray, canvasId)

    }
}