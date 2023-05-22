var menuSections = document.querySelectorAll('.menu-section');

menuSections.forEach(function (menuSection) {
  menuSection.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }
  });
});
