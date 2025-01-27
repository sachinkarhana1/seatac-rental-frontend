export default function imageBehindCar(background_image, car_image) {
  return `<div class="relative flex flex-col justify-center items-center">
          <div
            class="absolute h-[400px] left-6 -top-[8%] rounded-tl-[60px] rounded-tr-[60px] w-3/5 bg-primary"
          ></div>
          <img
            class="scale-[85%]"
            src="${background_image}"
            alt=""
          />
          <img
            class="absolute -bottom-[10%] scale-[1.1]"
            src="${car_image}"
            alt=""
          />
        </div>`;
}

const seatacImgBehind = document.querySelector("seatac-img-behind-car");
const background = seatacImgBehind.getAttribute("data-background");
const car = seatacImgBehind.getAttribute("data-car");
const carImageScale = seatacImgBehind.getAttribute("data-car-size");
seatacImgBehind.innerHTML = imageBehindCar(background, car);
