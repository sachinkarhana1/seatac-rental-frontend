import search from "../assets/search-image.png";
import "./css/searchBar.css";
export default function searchBar() {
  return `
     <div class="flex w-full h-16 shadow-[0px_0px_10px_rgba(0,0,0,0.25)] bg-white rounded-full  justify-between items-center p-2">
     <div class="w-[90%] px-8 flex">
        <div class="flex flex-col w-1/3 px-4 justify-center">
            <label class="text-[13px] px-2 font-bold text-[#414141] leading-[14px]" for="location">Where</label>
            
            <input
            class="focus:outline-none border-b-2 text-[#797979] border-gray-300 focus:border-blue-500 transition px-2 rounded-none text-[13px]"
              type="text"
              id="location"
              placeholder="City, airport, address "
            />
          </div>
          <div class="flex flex-col w-1/3 px-4 justify-center h-12 border-x-[2px] border-gray-300">
            <label class="text-[13px] px-2 font-bold text-[#414141] leading-[14px]" for="from">From</label>
            <div class="text-[13px] flex justify-start">
              <input
              class="focus:outline-none box-content focus:border-0 focus:border-b-2 focus:border-solid transition-all border-b-primary text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
              type="date"

              />
              <input
              class="focus:outline-none focus:border-0 focus:border-b-2 focus:border-solid transition-all border-b-primary text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
              type="time"
              value=""
              />
            </div>
          </div>
          
          <div class="flex flex-col w-1/3 px-4 justify-center">
            <label class="text-[13px] px-2 font-bold text-[#414141] leading-[14px]" for="until ">Until</label>
            <div class="text-[13px] flex justify-start">
              <input
              class="focus:outline-none focus:border text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
              type="date"
              />
              <input
              class="focus:outline-none focus:border text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
              type="time"
              />
            </div>
          </div>
     </div>     
    

      <div class="rounded-full flex justify-center items-center bg-primary aspect-square h-full">
        <img class="scale-75" src="${search}"/>
      </div>
    </div>
 `;
}
