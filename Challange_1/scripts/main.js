// alert("It works!");

// Footer display
function myFunction() {
    var x = document.getElementById("footer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
$(window).on('load', function() {
    $('#startmodal').modal('show');
});
