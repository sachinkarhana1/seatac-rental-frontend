import { tns } from "tiny-slider";

import leftArrow from "/src/assets/previous-arrow.png";
import rightArrow from "/src/assets/next-arrow.png";
const next = `
  <div class="p-3 flex justify-center items-center rounded-full aspect-square border-solid boder-white border-[1px]">
    <img src="${rightArrow}" />
  </div>
`;

const previous = `
  <div class="p-3 flex justify-center items-center rounded-full aspect-square border-solid boder-white border-[1px]">
    <img src='${leftArrow}'/>
  </div>
`;

export var slider = tns({
  container: "#browse-by-make-slider",
  responsive: {
    450: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  controlsPosition: "bottom",
  nav: false,
  controlsText: [previous, next],
  mouseDrag: true,
  speed: 600,
  autoHeight: true,
});
