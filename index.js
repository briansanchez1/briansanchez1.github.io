document.addEventListener('DOMContentLoaded', function() {
    // Get all the menu section headings
    const menuSectionHeadings = document.querySelectorAll('.menu-section-heading');
  
    // Add event listeners to each menu section heading
    menuSectionHeadings.forEach((heading) => {
      heading.addEventListener('click', () => {
        // Toggle the 'expanded' class on the corresponding menu item details
        const menuItemDetails = heading.nextElementSibling;
        menuItemDetails.classList.toggle('expanded');
      });
    });
  });
  