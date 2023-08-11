const changeColorBtn = document.getElementById("changeColorBtn");
const bgColor = document.getElementById("bgColor");

changeColorBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 266);
  const g = Math.floor(Math.random() * 276);
  const b = Math.floor(Math.random() * 296);

  const newColor = `rgb(${r}, ${g}, ${b})`;
  bgColor.style.backgroundColor = newColor;
});