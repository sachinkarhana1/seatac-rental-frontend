import headerlogo from "../assets/SEATAC-RENTAL-LOGO.png";
import humburger from "../assets/humburgerAllThreeIcon.jpg.png";
import user from "../assets/user.png";

export default function header() {
  return `
    <div class="px-40 flex justify-between h-full">
    <div class="h-full">
     <img class=" h-full -translate-x-6" src="${headerlogo}"  alt="header logo" />
    </div>
    <div class=" flex items-center gap-2">
    
      <div class="">
         <img src="${humburger}" alt="huburger logo">
      </div>
      <div class="bg-[#6DDBBB] w-10 cursor-pointer aspect-square rounded-full flex justify-center items-center">
        <img src="${user}" alt="huburger logo">
      </div>
      <div class="setac-primary-button">create an account for guest </button> </div>
    </div>
</div>
    `;
}
