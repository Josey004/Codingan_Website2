// NAVBAR
const toggle_Btn = document.querySelector('.toggle_btn');
const toggle_BtnIcon = document.querySelector('.toggle_btn i');
const dropDown_Menu = document.querySelector('.dropdown_menu');

toggle_Btn.onclick = function () {
  dropDown_Menu.classList.toggle('open');
  const isOpen = dropDown_Menu.classList.contains('open');

  toggle_BtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  }
// NAVBAR

// SCROLL TO TOP
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 100) { // Adjust the value to determine when the button should appear
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
// SCROLL TO TOP
