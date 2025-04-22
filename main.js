let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remov("scroll-on")
    }
}
// 
// const filterButtons = document.querySelectorAll(".filter-buttons button");
// const gridWrapper = document.querySelectorAll(".grid-wrapper photo");

// const filterCards = e => {
//     document.querySelector(".active").classList.remove("active");
//     e.target.classList.add("active");

//     gridWrapper.forEach(photo => {
//         photo.classList.add("hide")
//         if(photo.CDATA_SECTION_NODE.name == e.target.dataset.name || e.target.dataset.name === "all"){
//             photo.classList.remove("hide")
//         }
//     })
    
// };

filterButtons.forEach(button => button.addEventListener("click", filterCards))