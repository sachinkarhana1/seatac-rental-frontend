import footerImageLogo from "../assets/seatac-logo-light-theme.png";

export default function footer() {
  return `
    <div class="w-full grid grid-cols-5 grid-rows-2 px-4 pt-8 pb-8 gap-4 bg-secondary text-white lg:flex-row lg:py-12 md:grid-cols-7 md:grid-rows-1 md:px-20  lg:px-40">
        <div class="col-span-2">
            <img class="w-full" src="${footerImageLogo}" />
            <div class="flex gap-4">
                <div class="flex w-12 aspect-square">
                x</div>
                <div class="flex w-12 aspect-square">f</div>
                <div class="flex w-12 aspect-square">y</div>
            </div>
        </div>
        <div class="flex flex-col w-full gap-6 col-span-2  row-start-2 md:col-span-1 md:row-start-1 md:col-start-3 ">
            <p class="font-medium uppercase text-lg leading-4">Quick Link</p>
            <ul class="list-none flex flex-col gap-1 text-[13px]">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Rent Car</li>
                <li>Features</li>
                <li>Blog</li>
            </ul>
        </div>
        <div class="col-span-3  flex flex-col gap-6 h-fit text-[13px] md:col-span-2 md:px-[5%] md:border-x-[1px] md:border-white md:border-opacity-40 ">
            <p class="font-medium uppercase text-lg leading-4">Contact Now</p>
            <ul class="list-none flex flex-col gap-6">
                <li>Address:<br>
                    Mauris ultricies tincidunt sollicitudin. Maecenas finibus convallis elit, vestibulum consectetur justo ornare in.
                </li>
                <li>Call Now: 988 045 678</li>
                <li>Email: Info@oneratehomes.com</li>
            </ul>
        </div>
        <div class="col-span-3 flex flex-col gap-6 text-[13px] font-normal md:col-span-2">
            <p class="font-medium uppercase text-lg leading-4">Explore seatac</p>
            <p class="leading-6">Nullam condimentum condimentum orci eget auctor. Pellentesque ultrices ornare massa, hendrerit dignissim mi finibus et. Praesent dictum bibendum nulla, </p>
            <p class="leading-6">Nullam condimentum condimentum orci eget auctor. Pellentesque ultrices ornare massa.</p>
        </div>
    </div>
    `;
}
