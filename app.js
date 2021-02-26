//preload
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

// const images = document.querySelectorAll("#gallery ul li");
// images.forEach((image,index)=>{
//     image.addEventListener('click',function (){
//         images[index].style.width="100%";
//         images[index].style.height="100%";
//         smoothScroll(images[index]);
//     });
// });
// window.smoothScroll = function(target) {
//     var scrollContainer = target;
//     do { //find scroll container
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);

//     var targetY = 0;
//     do { //find the top of target relatively to the container
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);

//     scroll = function(c, a, b, i) {
//         i++; if (i > 15) return;
//         c.scrollTop = a + (b - a) / 15 * i;
//         setTimeout(function(){ scroll(c, a, b, i); }, 20);
//     }
//     // start scrolling
//     scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
// }

const first_ = document.getElementById("avatar");
const first_2 = document.getElementById("intro-name");
const about_ = document.getElementById("about");
const gallery_ = document.getElementById("gallery");
const contact_ = document.getElementById("contact");

window.addEventListener("load", () => {
  about_.style.display = "none";
  gallery_.style.display = "none";
  contact_.style.display = "none";
});

function first() {
  first_.style.display = "block";
  first_2.style.display = "block";
  about_.style.display = "none";
  gallery_.style.display = "none";
  contact_.style.display = "none";
}
function about() {
  first_.style.display = "none";
  first_2.style.display = "none";
  about_.style.display = "block";
  gallery_.style.display = "none";
  contact_.style.display = "none";
}
function gallery() {
  first_.style.display = "none";
  first_2.style.display = "none";
  about_.style.display = "none";
  gallery_.style.display = "block";
  contact_.style.display = "none";
}
function contact() {
  first_.style.display = "none";
  first_2.style.display = "none";
  about_.style.display = "none";
  gallery_.style.display = "none";
  contact_.style.display = "block";
}
