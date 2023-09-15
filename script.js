let redraw = (N) => {
  const container = document.querySelector(".container");
  container.replaceChildren();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const div = document.createElement("div");
      div.addEventListener("mouseover", () => {
        if (getComputedStyle(div).backgroundColor === "rgba(0, 0, 0, 0)") {
          div.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )})`;
        } else {
          let color = getComputedStyle(div).backgroundColor;
          let codes = color.substring(4, color.length - 1);
          color = codes.split(", ");
          div.style.backgroundColor = `rgb(${Math.floor(
            color[0] * 0.9
          )}, ${Math.floor(color[1] * 0.8)}, ${Math.floor(color[2] * 0.8)})`;
        }
      });
      div.classList.toggle("grid");
      div.style.width = 100 / N + "%";
      div.style.height = 100 / N + "%";
      container.appendChild(div);
    }
  }
};
const gridSizeBtn = document.querySelector("#gridSize");
gridSizeBtn.addEventListener("click", () => {
  let p;
  do {
    p = prompt("Enter grid size (Max 100): ");
  } while (p > 100);
  redraw(p);
  gridSizeBtn.textContent = `Grid size: ${p}x${p}`;
});
const clearBtn = document.querySelector("#clearGrid");
clearBtn.addEventListener("click", () => {
  let list = document.querySelector(".container").children;
  for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
redraw(4);
