
//pour scroller 
 document.querySelectorAll('.navbar a').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
     e.preventDefault(); // Prevent default anchor click behavior

     const targetId = this.getAttribute('href'); // Get the href attribute
     const targetSection = document.querySelector(targetId); // Select the target section

     // Scroll to the target section
     targetSection.scrollIntoView({
         behavior: 'smooth', // Smooth scrolling
         block: 'start' // Align to the top of the viewport
     });
 });
}); 