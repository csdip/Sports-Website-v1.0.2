  const mainMenu=document.querySelector('.main-menu');
  const navBtn=document.querySelector('.nav-btn');

  navBtn.addEventListener('click',()=>{
    mainMenu.classList.toggle('active');
  });

  document.querySelectorAll('.media__wrapper img').forEach(image =>{
    image.onclick=()=>{
      document.querySelector('.popup-image').style.display="block"
      document.querySelector('.popup-image img').src=image.getAttribute('src')
    }
  })

  document.querySelector('.popup-image span').onclick=()=>{
    document.querySelector('.popup-image').style.display="none"
  }