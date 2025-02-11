export default function menu() {
  return `
        <div class="w-auto flex flex-col items-end gap-4 px-4 py-2 md:flex-row md:items-center">
            <a href="/" class="md:px-5 hover:underline transition-all ">Home</a>
            <a href="/about" class="md:px-5 hover:underline">About</a>
            <a href="/" class="md:px-5 hover:underline">Why Seactac</a>
            <a href="/car-lists" class="md:mx-5 setac-primary-button">Booked Now</a>
          </div>   
    `;
}
