const removeEl = document.querySelector("#thingToDelete")
const containerEl = document.querySelector("#container")
const deleteButton = document.querySelector("#deleteButton")

deleteButton.addEventListener("click", () => {
    containerEl.removeChild(removeEl)
})
// containerEl.removeChild(removeEl)


const removeElTwo = document.querySelector("#thingToDelete2")
const containerElTwo = document.querySelector("#container2")
const deleteButtonTwo = document.querySelector("#deleteButton2")

deleteButtonTwo.addEventListener("click", () => {
    containerElTwo.removeChild(removeElTwo)
})