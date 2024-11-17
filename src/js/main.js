let createButton = document.getElementById("enter")
let textInput = document.getElementById("textIn")
let list = document.getElementById("list")

function createTask() {
    let text = textInput.value.trim();
    if (text.length > 0) {
        let elemMain = document.createElement("div")
        elemMain.classList.add("task");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        elemMain.appendChild(checkbox);
        let Ntext = document.createElement("p");
        Ntext.innerText = text;
        elemMain.appendChild(Ntext);
        let delBtn = document.createElement("button");
        delBtn.style.backgroundImage = "/src/img/bin.png";
        delBtn.id = "del";
        elemMain.appendChild(delBtn);
        list.appendChild(elemMain)
        delBtn.addEventListener("click", function () {
            elemMain.remove();
        })
        if (text.length > 40) {
            Ntext.style.fontSize = "8px"
        }
        let clicked = false
        checkbox.addEventListener("click", function () {
            if (clicked == false) {
                clicked = true
                Ntext.style.textDecoration = "line-through";
                Ntext.style.color = "rgba(0, 0, 0,0.5)"
            } else {
                clicked = false
                Ntext.style.textDecoration = "none";
                Ntext.style.color = "rgba(0, 0, 0,1)"
            }
        })
        textInput.value = ""
    }
}

createButton.addEventListener("click", createTask)

textInput.addEventListener("keypress", function (keypress) {
    if (keypress.key == "Enter") {
        createTask()
    }
})