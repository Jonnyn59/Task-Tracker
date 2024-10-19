let createButton = document.getElementById("enter")
let textInput = document.getElementById("textIn")

createButton.addEventListener("click" , function(){
    if (textInput.lenght > 0){
        let div = document.createElement("div")
        div.classList.add("task")
        let checkbox = document.createElement("input")
        checkbox.checkbox = true
        checkbox.id = "checkbox"
        div.appendChild(checkbox)
        let Ntext = document.createElement("p")
        Ntext.innerText = textInput.value
        div.appendChild(Ntext)
        let delBtn = document.createElement("button")
        delBtn.style.backgroundImage = "/src/img/bin.png"
        delBtn.id = "del"
        div.appendChild(delBtn)

        delBtn.addEventListener("click" , function(){
            div.remove()
        })
        checkbox.addEventListener("change" , function(){
            
        })
        console.log("added")
    }
})