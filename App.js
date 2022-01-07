import GetInput from "./helpers/GetInput.js"
const handler = new GetInput()

document.getElementById("inputButton").addEventListener("click", handler.getInput)
