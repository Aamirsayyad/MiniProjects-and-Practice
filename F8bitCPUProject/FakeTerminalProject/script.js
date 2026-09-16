const currLine = document.getElementById("current-line");
const terminalBody = document.getElementById("terminal-body");
const previousContainer = document.getElementById("previous-lines");
const terminalContainer = document.getElementById("terminal-container");
const maximizeButton = document.getElementById("maximize");
const minimizeButton = document.getElementById("minimize");
const closeButton = document.getElementById("close");
const openButton = document.getElementById("open-terminal-button");
let previousTextArray = [];
let prevArrayIdx=0;
let maximized = false;

const commands = [
    {
        id: 0,
        name: "clear-screen",
        cmd: "cls",
        description: "Clears all the Text from the terminal",
        output: () => {
            document.getElementById("previous-lines").replaceChildren("");
            previousTextArray.length=0;
            prevArrayIdx = 0;
        }
    },
    {
        id: 1,
        name: "help",
        cmd: "help",
        description: "Show the valid available Luci Terminal commands",
        output: () => {
            let helpTextElement = document.createElement("p");
            helpTextElement.textContent = "Available Commands";
            helpTextElement.style.color = "white";
            previousContainer.appendChild(helpTextElement);
            commands.forEach((cmd) => {
                helpTextElement = document.createElement("p");
                helpTextElement.style.color = "white";
                helpTextElement.textContent = `ID: ${cmd.id} | Keyword: ${cmd.cmd} | Description: ${cmd.description}`;
                previousContainer.appendChild(helpTextElement);
            });
        }
    },
    {
        id: 2,
        name: "echo",
        cmd: "echo",
        description: "Show the valid available Luci Terminal commands",
        output: () => {
            let helpTextElement = document.createElement("p");
            helpTextElement.textContent = "Available Commands";
            helpTextElement.style.color = "white";
            previousContainer.appendChild(helpTextElement);
            commands.forEach((cmd) => {
                helpTextElement = document.createElement("p");
                helpTextElement.style.color = "white";
                helpTextElement.textContent = `ID: ${cmd.id} | Keyword: ${cmd.cmd} | Description: ${cmd.description}`;
                previousContainer.appendChild(helpTextElement);
            });
        }
    }

]


currLine.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        if(prevArrayIdx>0){
            prevArrayIdx--;
            currLine.value=previousTextArray[prevArrayIdx];
        }
    }
})
currLine.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        if(prevArrayIdx<previousTextArray.length-1){
            prevArrayIdx++;
            currLine.value=previousTextArray[prevArrayIdx];
        }
        else{
            prevArrayIdx = previousTextArray.length;
            currLine.value = "";
        }
    }
})


currLine.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        const lastLine = document.createElement("p");
        lastLine.textContent = `> ${currLine.value}`;
        lastLine.classList.add("done");
        previousContainer.appendChild(lastLine);
       
        if (currLine.value != "") { validateInput(); }
        currLine.value = "";

    }
});

maximizeButton.addEventListener("click", () => {
    maximized = !maximized;
    if (maximized) {
        terminalContainer.style.width = "100%";
        terminalContainer.style.height = "100%";
        maximizeButton.style.backgroundImage = `url("icons/maxtomin.png")`;
    }
    else {
        terminalContainer.style.width = "70%";
        terminalContainer.style.height = "65%";
        maximizeButton.style.backgroundImage = `url("icons/maxtomax.png")`;
        // maximizeButton.style.backgroundSize = "10%";
    }

});

minimizeButton.addEventListener("click", () => {
    terminalContainer.style.display = "none";
    openButton.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    terminalContainer.style.display = "none";
    openButton.style.display = "flex";
    currLine.value = "";
    document.getElementById("previous-lines").replaceChildren("");

});

openButton.addEventListener("click", () => {
    terminalContainer.style.display = "flex";
    openButton.style.display = "none";
});



function validateInput() {
    const currCommand = currLine.value;
    const test = commands.find((cmd) => {
        return currCommand === cmd.cmd;
    })
    if (test !== undefined) {
        test.output();
    }
    else {
        const errorMsg = document.createElement("p");
        errorMsg.classList.add("error");
        errorMsg.textContent = `${currLine.value} is not recognized as a valid Luci command`;
        previousContainer.append(errorMsg);
    }
    if(currCommand!=="cls"){
         previousTextArray.push(currCommand);
        prevArrayIdx=previousTextArray.length;//rest index to last elemnent
    }
}


