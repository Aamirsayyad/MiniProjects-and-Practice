const currLine = document.getElementById("current-line"); // reprsetns current input line on the terminal
const terminalBody = document.getElementById("terminal-body"); //the terminal's input's body
const previousContainer = document.getElementById("previous-lines"); //holds a container of previous inputs as paragraph
const terminalContainer = document.getElementById("terminal-container"); //holds the entire terminal(terminal menu + terminal body)
const maximizeButton = document.getElementById("maximize"); //reference to maximize button
const minimizeButton = document.getElementById("minimize"); //refernce to minimize button
const closeButton = document.getElementById("close"); //reference to close button
const openButton = document.getElementById("open-terminal-button"); // a button to reopen closed terminal
let previousTextArray = []; //holds a list of last typed texts (most recent to least recent)
let prevArrayIdx = 0; //points to current previous text in previousTextArray
let maximized = false; //flag for checking the terminal is maximized or not

// commands object stores all the valid Luci Terminal Commands available
const commands = [



    /* BASIC STRUCTURE OF ANY COMMAND
    {
        id: unique_num,          
        name: "any_name",
        cmd: "the exceutable command",
        description: "describes the command's action",
        output: () => {
            //what it does
            document.getElementById("previous-lines").replaceChildren("");
            previousTextArray.length=0;
            prevArrayIdx = 0;
        }
    }
    
    */
    {
        id: 0,
        name: "clear-screen",
        cmd: "cls",
        description: "Clears all the Text from the terminal",
        output: () => {
            document.getElementById("previous-lines").replaceChildren("");
            previousTextArray.length = 0;
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
        description: "print to console",
        output: (...args) => {
            let helpTextElement = document.createElement("p");
        }
    }

]

// ARROW UP eventListener
currLine.addEventListener("keydown", (event) => {
    switch (event.key) {

        // Arrow Up Event
        case "ArrowUp":
            if (prevArrayIdx > 0) { //out of bounds safety
                prevArrayIdx--;
                currLine.value = previousTextArray[prevArrayIdx];//update currline
            }
            break;

        // Arrow Down Event
        case "ArrowDown":
            if (prevArrayIdx < previousTextArray.length - 1) {//out of bounds saftey
                prevArrayIdx++;
                currLine.value = previousTextArray[prevArrayIdx];
            }
            else {//if out of bounds display empty i.e. going down to curr line
                prevArrayIdx = previousTextArray.length;
                currLine.value = "";
            }
            break;

        //Enter Event
        case "Enter":
            const lastLine = document.createElement("p"); //create new p
            lastLine.textContent = `> ${currLine.value}`; //save the input in this p
            lastLine.classList.add("done"); //update class to done so it appears done
            previousContainer.appendChild(lastLine); //update to DOM

            if (currLine.value != "") { validateInput(); } //validate input
            currLine.value = "";
            break;
    }
})

//logic for maximzation of terminal window
maximizeButton.addEventListener("click", () => {
    maximized = !maximized; //toggle the flag
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

//generic minimization/maximization function
function minimize(switchVal) {
    if (switchVal) {
        terminalContainer.style.display = "none";
        openButton.style.display = "flex";
    }
    else {
        terminalContainer.style.display = "flex";
        openButton.style.display = "none";
    }

}

//logic for minimizing the terminal window (doesnt clear history)
minimizeButton.addEventListener("click", () => {
    minimize(true);
});

//logic for closing the terminal and clearing it all
closeButton.addEventListener("click", () => {
    minimize(true);
    currLine.value = "";
    document.getElementById("previous-lines").replaceChildren(""); //empty the previous history
});

//to reopen the terminal (remembers state)
openButton.addEventListener("click", () => {
    minimize(false);
});


//command validation function
function validateInput(){
    let currText=(currLine.value).trim().split(/\s+/);
    let arguments=[currText.slice()]
    const currCommand = currText[0]; //store the command
    const test = commands.find((cmd) => { //try to find it in the Commands Array of Objects
        return currCommand === cmd.cmd; // found return object or return undef
    })
    if (test !== undefined) {
        test.output();  //if  found simply execute the corresponding action
    }
    else {
        const errorMsg = document.createElement("p");
        errorMsg.classList.add("error"); //add error styling
        errorMsg.textContent = `${currLine.value} is not recognized as a valid Luci command`; //prompt user
        previousContainer.append(errorMsg); //add to dom
    }
    if (currCommand !== "cls") {
        previousTextArray.push(currCommand);  //push to the array
        prevArrayIdx = previousTextArray.length;//reset index to last elemnent
    }
}


