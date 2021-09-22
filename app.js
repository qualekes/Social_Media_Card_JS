let data = {
   fullName: 'Jennifer Smith',
   position: 'UX/UI Designer',
   socials: [{
         id: 'fb',
         service: 'Facebook',
         url: 'https//www.facebook.com/',
         icon: 'fa fa-facebook'
      },
      {
         id: 'twitter',
         service: 'Twitter',
         url: 'https//www.twitter.com',
         icon: 'fa fa-twitter'
      },
      {
         id: 'ig',
         service: 'Instagram',
         url: 'https//www.instagram.com',
         icon: 'fa fa-instagram'
      },
      {
         id: 'gl',
         service: 'Google',
         url: 'https//www.google.com',
         icon: 'fa fa-google'
      }
   ]
};

let body = document.getElementsByTagName('body')[0];
let root = document.createElement('div');
let style = document.createElement('style');
let card = document.createElement('section');


let cssStyles = `

   .card {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(9px);
   }

   .card__wrapper {
    
      padding: 20px 20px 3rem 20px;
      max-width: 300px;
      width: 100%;
      background: white;
      box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, .22);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .card__user-img {
      border: 2px solid #2c5eff;
      height: 70px;
      width: 70px;
      margin: 2rem 0 1.5rem;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
   }

   .card-info{
      margin-bottom: 2rem;
   }

   .card__name {
      text-align: center;
      display: block;
      font-weight: 600;
      font-size: 1.2rem;
      margin-bottom: .5rem;
   }

   .card_title {
      display: block;
      font-size: .7rem;
      margin-bottom: 2rem;
      text-align: center;
   }

   .card__icon {
      width: 200px;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid #000;
      margin-bottom: .4rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      transition: background .3s ease-in-out, color .3s ease-in-out;
      cursor: pointer;
   }

   .card__icon-box {
      width: 25px;
      display: inline-block;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .card__icon-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
   }

   .card__icon--fb {
      color: #2c5eff;
      border: 1px solid #2c5eff;
   }

   .card__icon--fb:hover {
   background: #2c5eff;
   color: white;
   }

   .card__icon--gl:hover {
      background: #4285F4;
      color: white;
      }

      .card__icon--gl {
         color: #4285F4;
         border: 1px solid #2c5eff;
      }

   .card__icon--ig {
      color: #773fe7;
      border: 1px solid #773fe7;
   }

   .card__icon--ig:hover {
   background: #773fe7;
   color: white;
   }

   .card__icon--twitter {
      color: #1DA1F2;
      border: 1px solid #1DA1F2;
   }

   .card__icon--twitter:hover {
   background: #1DA1F2;
   color: white;
   }
   
   a {      
      text-decoration: none;
   }



`;
let html = `

<div class="card__wrapper">
<img src="https://randomuser.me/api/portraits/women/26.jpg" alt="" class="card__user-img">
<div class="card__info">
   <span class="card__name">${data.fullName}</span>
   <span class="card_title">
        ${data.position}
   </span>
</div>
<div class="card__socials">
   
   
</div>
</div>


`

body.prepend(root);

root.classList.add('root');

root.prepend(card);

card.classList.add('card');




root.style.cssText = `
background: url(https://c4.wallpaperflare.com/wallpaper/574/417/275/aesthetic-vaporwave-wallpaper-preview.jpg);
background-size: cover;
 background-position: center;
`;
root.prepend(style);
style.innerHTML = cssStyles;
document.getElementsByClassName('card')[0].innerHTML = html;
let cardSocials = card.getElementsByClassName('card__socials')[0];
let temp = `

<div class="card__icon card__icon--fb">
      <span class="card__icon-box">
         <a style="color: #2c5eff;" href="#" class="fa fa-facebook"></a>

      </span>
      <span class="card__icon-title">
         Facebook
      </span>
   </div>
`
data.socials.forEach((item, index) => {
 let  tempNode = document.createElement('div')
   tempNode.classList.add('card__icon', `card__icon--${item.id}`)
   tempNode.innerHTML = `
   <span class="card__icon-box">

   <a style="color: #2c5eff;" href="#" class =${item.icon}></a>

</span>
<span class="card__icon-title">
  ${item.service}
</span>
   `
   cardSocials.append(tempNode)
})
