const cells = document.querySelectorAll(".cell");
const noOfMines = 3;
const result = document.getElementById("result");

let counter = 0;
let gameOver = false;

const Mines = [];
let playerChoices = [];

cells.forEach(cell => {
    cell.addEventListener("click", function (event) {

        if (gameOver) return;

        let value = String(event.target.id);
        value = value.replace("cell", "");
        value = Number(value);

        if (Mines.includes(value)) {

            displayMine(event);

            console.log("Boom");

            result.style.display = "flex";
            result.textContent = "You Lost!";
            result.style.backgroundColor = "rgba(255, 8, 8, 0.895)";

            gameOver = true;
        }
        else {

            // Prevent counting the same cell multiple times
            if (playerChoices.includes(value)) return;

            playerChoices.push(value);

            counter++;

            displaySafe(event);

            console.log("You're safe");

            if (counter === (16 - noOfMines)) {

                showWinMessage();

                gameOver = true;
            }
        }
    });
});

function revealCell(event, imagePath) {

    event.target.textContent = "";

    event.target.style.backgroundImage = `url('${imagePath}')`;
    event.target.style.backgroundSize = "cover";
    event.target.style.backgroundPosition = "center";
    event.target.style.backgroundRepeat = "no-repeat";
}

function displayMine(event) {
    revealCell(event, "/images/mine.webp");
}

function displaySafe(event) {
    revealCell(event, "/images/safe.webp");
}

function showWinMessage() {

    result.style.display = "flex";
    result.textContent = "You Won!";
    result.style.backgroundColor = "rgba(45, 255, 8, 0.9)";
}

function generateMines() {

    while (Mines.length < noOfMines) {

        const mine = Math.floor(Math.random() * 16) + 1;

        if (!Mines.includes(mine)) {
            Mines.push(mine);
        }
    }

    console.clear();
    console.log(Mines);
}

function reset() {

    Mines.length = 0;
    playerChoices.length = 0;

    generateMines();

    counter = 0;
    gameOver = false;

    result.style.display = "none";

    let count = 1;

    cells.forEach(cell => {

        cell.textContent = count++;

        cell.style.backgroundImage = "none";
    });
}

generateMines();