export class ImageBehindCar {
  #carImage;
  #background;
  #carScale;
  constructor(car_image, background_image) {
    this.#carImage = car_image;
    this.#background = background_image;
    this.#carScale = 1;
  }

  set carScale(scale) {
    this.#carScale = scale;
  }

  display() {
    return `
    <div class="relative flex flex-col justify-center items-center">
          <div
            class="absolute h-[400px] left-6 -top-[8%] rounded-tl-[60px] rounded-tr-[60px] w-4/5 md:w-3/5 bg-primary"
          ></div>
          <img
            class="scale-[80%]"
            src="${this.#background}"
            alt=""
          />
          <img
            class="absolute bottom-0 md:-bottom-[10%] scale-[${this.#carScale}]"
            src="${this.#carImage}"
            alt=""
          />
        </div>
    `;
  }
}
