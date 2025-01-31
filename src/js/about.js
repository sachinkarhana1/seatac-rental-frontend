import { ImageBehindCar } from "../components/imageBehindCar.js";
import carImage from "../assets/abouthomecar.png";
import backgroundImage from "../assets/abouthomebg.png";

const seatacDesignFirstOccurence = new ImageBehindCar(
  carImage,
  backgroundImage
);

seatacDesignFirstOccurence;
document.getElementById("design-seatac").innerHTML =
  seatacDesignFirstOccurence.display();
