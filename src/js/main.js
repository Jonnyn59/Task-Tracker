let createButton = document.getElementById("enter")
let textInput = document.getElementById("textIn")
let list = document.getElementById("list")

createButton.addEventListener("click" , function(){
    console.log("func started")
    var betta = textInput.value
    if (betta.length > 0){
        let elemMain = document.createElement("div")
        elemMain.classList.add("task");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        elemMain.appendChild(checkbox);
        let Ntext = document.createElement("p");
        Ntext.innerText = textInput.value;
        elemMain.appendChild(Ntext);
        let delBtn = document.createElement("button");
        delBtn.style.backgroundImage = "/src/img/bin.png";
        delBtn.id = "del";
        elemMain.appendChild(delBtn);
        list.appendChild(elemMain)
        delBtn.addEventListener("click" , function(){
            elemMain.remove();
        })
        if (textInput.value.length > 40){
            Ntext.style.fontSize = "8px"
        }
        var clicked = false
        checkbox.addEventListener("click" , function(){
            if (clicked == false){
                clicked = true
                Ntext.style.textDecoration = "line-through";
                Ntext.style.color = "rgba(0, 0, 0,0.5)"
            }else {
                clicked = false
                Ntext.style.textDecoration = "none";
                Ntext.style.color = "rgba(0, 0, 0,1)"
            }
            console.log(clicked)
        })
        console.log("added")
    }
})

textInput.addEventListener("keypress" , function(keypress){
    console.log(keypress.key)
    if (keypress.key == "Enter") {
        console.log("func started")
        var betta = textInput.value
        if (betta.length > 0){
            let elemMain = document.createElement("div")
            elemMain.classList.add("task");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "checkbox";
            elemMain.appendChild(checkbox);
            let Ntext = document.createElement("p");
            Ntext.innerText = textInput.value;
            elemMain.appendChild(Ntext);
            let delBtn = document.createElement("button");
            delBtn.style.backgroundImage = "/src/img/bin.png";
            delBtn.id = "del";
            elemMain.appendChild(delBtn);
            list.appendChild(elemMain)
            delBtn.addEventListener("click" , function(){
                elemMain.remove();
            })
            if (textInput.value.length > 40){
                Ntext.style.fontSize = "8px"
            }
            var clicked = false
            checkbox.addEventListener("click" , function(){
                if (clicked == false){
                    clicked = true
                    Ntext.style.textDecoration = "line-through";
                    Ntext.style.color = "rgba(0, 0, 0,0.5)"
                }else {
                    clicked = false
                    Ntext.style.textDecoration = "none";
                    Ntext.style.color = "rgba(0, 0, 0,1)"
                }
                console.log(clicked)
            })
            console.log("added")
            textInput.innerText = ""
        }
    }
})