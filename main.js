const button = document.getElementById("myButton")

button.addEventListener("click", (event) => {
    console.log("click")
    console.debug("[EVENT]: ", event)
    const newButton = document.createElement("button")
    newButton.innerText = "New Button"
    document.body.appendChild(newButton)
    console.log("document contains new button: ", document.contains(newButton))
})