function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector(".container");

function createGrid (squareNumber) {
    container.textContent = "";

    for (let i = 0; i < (squareNumber * squareNumber); i++) {
        if (squareNumber > 100) {
            break;
        } else {
            let div = document.createElement("div");
            div.style.width = `${Math.floor(960 / squareNumber)}px`;
            div.style.height = `${Math.floor(960 / squareNumber)}px`;
            div.style.border = "solid black";
            container.appendChild(div);

            let randomColor = randomRGB();

            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = randomColor;
            });
        }
    }
}

createGrid(16);

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let square = prompt("How many squares per side for the grid? (Max 100)");
    let squareNumber = Number(square);
    createGrid(squareNumber);
});