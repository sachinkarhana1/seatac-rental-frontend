import headerlogo from '../assets/SEATTAC.LOGO_1.png'
import humburger from '../assets/humburgerAllThreeIcon.jpg.png'
import user  from '../assets/usermainn.png'


export default function header() {
    return `
    <header>
    <div class="logo">
     <img src="${headerlogo}"  alt="header logo" />
    </div>
    <div class="headerUserBox">
    
      <div class="HeaderHumburger">
         <img src="${humburger}" alt="huburger logo">
      </div>
      <div class="HeaderUserLogo">
        <img src="${user}"   alt="user logo">
      </div>
      <div class="button">CREATE AN ACCOUNT FOR GUEST </div>
    </div>
</header>
    `;
}