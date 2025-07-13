const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.style.border = "solid black";
    div.style.padding = "51px";
    container.appendChild(div);
}