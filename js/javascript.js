function inclusive()
   {
document.body.style.backgroundImage = 'none';
document.body.style.backgroundColor = "black";
document.getElementsByClassName("opinion").style.color = "white";
document.getElementsByClassName("titulo2").style.color = "black";
}

function creator()
{alert("Sitio creado por Gonzalo Mateo Navarro. navarrogonzalo128@gmail.com");}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
