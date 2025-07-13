const container = document.querySelector(".container");

function createGrid (squareNumber) {
    for (let i = 0; i < (squareNumber * squareNumber); i++) {
        if (squareNumber > 100) {
            break;
        } else {
            let div = document.createElement("div");
            div.style.border = "2px solid black";
            div.style.padding = `${squareNumber}px`;
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