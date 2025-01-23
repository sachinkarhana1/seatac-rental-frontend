




export default function searchBar(){
    return `
     <div class="bg-orange-800" id="search-bar">
          <div class="input-groupp bg-slate-500">
            <label for="location">Where</label>
            <input
              type="text"
              id="location"
              placeholder="City, airport, address "
            />
          </div>
          <div class="input-groupp">
            <label for="from">From</label>
            <input
              placeholder="14/12/24       10:00"
              type=""
              id="from"
              value=""
            />
          </div>
          
          <div class="input-group pl-4">
            <label for="until ">Until</label>
            <input
              placeholder="14/12/24       10:00"
              type=""
              id="until"
              value=""
            />
          </div>

          <button class="searchbarimg">
            <img
              src="src/assets/hedarSearch-removebg-preview.png"
              alt="Search Icon"
            />
          </button>
        </div>
      </div>
    </div>
    </div>
    `
}