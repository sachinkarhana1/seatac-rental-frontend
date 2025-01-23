export default function searchBar() {
  return `
     <div class="flex w-full h-16 shadow-[0px_0px_10px_rgba(0,0,0,0.25)] bg-white rounded-full  justify-between items-center p-1" id="search-bar">
     <div class="w-[90%] px-8  flex">
        <div class="flex flex-col w-1/3">
            <label for="location">Where</label>
            <input
              type="text"
              id="location"
              placeholder="City, airport, address "
            />
          </div>
          <div class="flex flex-col w-1/3">
            <label for="from">From</label>
            <input
              placeholder="14/12/24       10:00"
              type=""
              id="from"
              value=""
            />
          </div>
          
          <div class="flex flex-col w-1/3">
            <label for="until ">Until</label>
            <input
              placeholder="14/12/24       10:00"
              type=""
              id=""
              value=""
            />
          </div>
     </div>     
    

      <div class="rounded-full flex justify-center items-center bg-green-500 aspect-square h-full">
        1
      </div>
    </div>
 `;
}
