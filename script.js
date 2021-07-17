
        // Get the modal
        var modal1 = document.getElementById("myModal1");
        var modal2 = document.getElementById("myModal2");
        
        // Get the button that opens the modal
        var btn1 = document.getElementById("mysignup");
        
        var btn2 = document.getElementById("mylogin");
        
        // Get the <span> element that closes the modal
        var span1 = document.getElementsByClassName("close")[0];
        var span2 = document.getElementsByClassName("close")[1];
        
        // When the user clicks the button, open the modal 
        btn1.onclick = function() {
          modal1.style.display = "block";
        }
        btn2.onclick = function() {
          modal2.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span1.onclick = function() {
          modal1.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal1) {
            modal1.style.display = "none";
          }
        }
        span2.onclick = function() {
          modal2.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal2) {
            modal2.style.display = "none";
          }
        }

        var slideIndex = 1;
        showSlides(slideIndex);
        
        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }
        function validateForm1() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["password"].value;
  if (x == "" || y=="") {
    alert("All the filelds must be filled out");
  }
  else{
    alert("signup successful");
  }
}
function validateForm2() {
  var x = document.forms["myForm2"]["uname"].value;
  var y = document.forms["myForm2"]["password2"].value;
  if (x == "" || y=="") {
    alert("All the filelds must be filled out");
  }
  else{
    alert("login successful");
  }
}


  


