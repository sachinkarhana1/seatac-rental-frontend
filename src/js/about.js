<<<<<<< HEAD
import imageBrhindCar from "../components/imageBehindCar.js";


=======
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
>>>>>>> b8a410aee509c04f041095009427b5967ba5b879
