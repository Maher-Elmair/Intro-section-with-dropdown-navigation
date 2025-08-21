// Global Variables
let tag = document.querySelector("header")
let navLink = document.querySelectorAll('.nav-link')
let hamburger = document.querySelector('.burger')
let closeIcon = document.querySelector('.close')


// for (let i = 0; i < navLink.length; i++) {
//     navLink[i].addEventListener("click", function () {
//         for (let n = 0; n < navLink.length; n++) {
//             navLink[n].classList.remove("active");
//         }
//         this.classList.add("active");
//     });
// }

navLink.forEach((nav)=>{
    nav.addEventListener("click" ,()=>{
        nav.classList.toggle("active")
    })
})

hamburger.addEventListener("click" ,()=>{
tag.classList.add("nav-column")
})
closeIcon.addEventListener("click" ,()=>{
    tag.classList.remove("nav-column")
    })