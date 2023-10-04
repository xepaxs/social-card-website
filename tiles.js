// assume tile size is 100px 100px
let columns = Math.floor(document.body.clientWidth / 100) + 1;
let rows = Math.floor(document.body.clientHeight / 100) + 1;

let toggled = false;
// for change color on click on tile
// const colors = ["#AF3800", "#595358", "#CADF9E", "#00CFC1", "#A4AC96"];
// let count = -1;

const toggle = () => {
  toggled = !toggled;
  document.body.classList.toggle("toggled");
};

const tileClicked = (index) => {
  toggle();
  //   count = count + 1;
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    // backgroundColor: colors[count % colors.length], //for change color
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const tileWappper = document.querySelector(".tiles");
tileWappper.style.setProperty("--columns", columns);
tileWappper.style.setProperty("--rows", rows);
const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.onclick = (e) => tileClicked(index);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    tileWappper.appendChild(createTile(index));
  });
};

createTiles(columns * rows);

const createGird = () => {
  tileWappper.innerHTML = "";
  let columns = Math.floor(document.body.clientWidth / 100) + 1;
  let rows = Math.floor(document.body.clientHeight / 100) + 1;
  tileWappper.style.setProperty("--columns", columns);
  tileWappper.style.setProperty("--rows", rows);
  createTiles(columns * rows);
};

window.onresize = () => createGird();