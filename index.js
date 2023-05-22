var menuSections = document.querySelectorAll('.menu-section');

menuSections.forEach(function (menuSection) {
  menuSection.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      this.classList.add('inactive');
    } else {
      this.classList.remove('inactive');
      this.classList.add('active');

    }
  });
});
