const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.style.border = " 2px solid black";
    div.style.padding = "51px";
    container.appendChild(div);

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "purple";
    });
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    prompt("How many squares per side for the grid?");
});