burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')




burger.addEventListener('click',()=>{
   rightNav.classList.toggle('A-class-resp');
   navList.classList.toggle('A-class-resp');
   navbar.classList.toggle('h-nav-resp')

})
