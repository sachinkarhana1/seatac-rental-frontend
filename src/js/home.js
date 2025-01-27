import imageBehindCar from "../components/imageBehindCar";
import searchBar from "../components/searchBar";
import carImage from "../assets/any_occassion_car_model.png";
import backgroudImage from "../assets/any_occassion_car_model_background.png";

document.getElementById("search-bar").innerHTML = searchBar();

const seatacs = document.getElementsByTagName("seatac-img-behind-car");
seatacs[0].innerHTML = imageBehindCar(backgroudImage, carImage);
