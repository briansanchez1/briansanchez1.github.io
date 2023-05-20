var menuSections = document.querySelectorAll('.menu-section');

menuSections.forEach(function (menuSection) {
  menuSection.addEventListener('mouseover', function () {
    this.classList.add('active');
  });
});
