const container = document.querySelector(".container");

function createGrid (squareNumber) {
    container.textContent = "";

    for (let i = 0; i < (squareNumber * squareNumber); i++) {
        if (squareNumber > 100) {
            break;
        } else {
            let div = document.createElement("div");
            div.style.width = `${960 / squareNumber}px`;
            div.style.height = `${960 / squareNumber}px`;
            div.style.border = "solid black";
            container.appendChild(div);

            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "purple";
            });
        }
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let square = prompt("How many squares per side for the grid? (Max 100)");
    let squareNumber = Number(square);
    createGrid(squareNumber);
});