
//OUR PARTNER SLIDE
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0:{
          slidesPerView:1,
      },
      520:{
          slidesPerView:2,
      },
      950:{
          slidesPerView:3,
      },
  }
});

var swiper = new Swiper(".slider-content", {
  autoplay: {
    delay: 3000, // waktu dalam milidetik antara setiap transisi
    disableOnInteraction: false, // mengaktifkan autoplay saat pengguna berinteraksi dengan slider
  },
});

// there is one more way to create mepty object

// // ABOUT
// var images = [
//     "assets/container-img1.png",
//     "assets/container-img2.png",
//     "assets/container-img3.png",
//     "assets/container-img4.png"
//   ];
//   var imageIndex = 0;
//   var imageElement = document.getElementById("image");
  
//   function changeImage() {
//     imageElement.style.backgroundImage = "url(" + images[imageIndex] + ")";
//     imageIndex = (imageIndex + 1) % images.length;
//   }
  
//   setInterval(changeImage, 4000);
// // ABOUT
