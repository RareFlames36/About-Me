// Function to change text size
function changeTextSize(selector, size) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = size;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Adjust the size of the 'click-duty-img'
    var clickDutyImg = document.getElementById('click-duty-img');
    clickDutyImg.style.width = '60%'; // Adjust size as needed
    clickDutyImg.style.height = 'auto';
    clickDutyImg.style.position = 'relative'; // Use 'absolute' for positioning relative to the first positioned ancestor
    clickDutyImg.style.left = '132.25px'; // Move the image 20px to the right from its original position
    clickDutyImg.style.top = '170px'; // Move the image 40px down from its original position
  
    // Adjust the size of the 'about-me-img'
    var aboutMeImg = document.getElementById('about-me-img');
    aboutMeImg.style.width = '50%'; // Adjust size as needed
    aboutMeImg.style.height = 'auto';
    aboutMeImg.style.position = 'relative'; // Adjust positioning mode as needed
    aboutMeImg.style.left = '-10px'; // Example positioning adjustment
    aboutMeImg.style.top = '15px'; // Example positioning adjustment
  
    // Example usage: Change the size of all <p> elements inside the .about-me section
    changeTextSize(".about-me p", "17px");
  });
  