import headerlogo from "../assets/SEATAC-RENTAL-LOGO.png";
import humburger from "../assets/humburgerAllThreeIcon.jpg.png";
import user from "../assets/user.png";

export default function header() {
  return `
    <div class="px-5 flex justify-between h-full md:px-20 lg:px-40">
    <div class="h-full">
     <img class=" h-full -translate-x-6" src="${headerlogo}"  alt="header logo" />
    </div>
    <div class=" flex items-center gap-2">
    
      <div class="">
         <img src="${humburger}" alt="huburger logo">
      </div>
      <div class="hidden bg-[#6DDBBB] w-10 cursor-pointer aspect-square rounded-full md:flex justify-center items-center">
        <img src="${user}" alt="huburger logo">
      </div>
      <div class="hidden setac-primary-button md:flex">create an account for guest </button> </div>
    </div>
</div>
    `;
}
