import { ImageBehindCar } from "../components/imageBehindCar";
import searchBar from "../components/searchBar";
import carImage from "../assets/any_occassion_car_model.png";
import backgroudImage from "../assets/any_occassion_car_model_background.png";

document.getElementById("search-bar").innerHTML = searchBar();

const seatacDesignFirstOccurence = new ImageBehindCar(carImage, backgroudImage);
seatacDesignFirstOccurence.carScale = 1.1;
document.getElementById("design-car-rental").innerHTML =
  seatacDesignFirstOccurence.display();
