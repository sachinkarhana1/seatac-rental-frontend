import { ImageBehindCar } from "../components/imageBehindCar.js";
import carImage from "../assets/how-seatac-works-design-car.png";
import backgroundImage from "../assets/how-seatac-works-design-bg.png";

const seatacDesignFirstOccurence = new ImageBehindCar(
  carImage,
  backgroundImage
);
seatacDesignFirstOccurence.carScale = .9;

seatacDesignFirstOccurence;
document.getElementById("design-seatac").innerHTML =
  seatacDesignFirstOccurence.display();


