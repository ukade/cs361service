function dropIt() {
    document.getElementById("mydrop").classList.toggle("show");
  }
  
  // Close the dropdown menu when user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) { //if event doesn't match dropbutton (clicking anywhere except dropbutton)
      var dropdowns = document.getElementsByClassName("menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) { //if block is visible
          openDropdown.classList.remove('show'); //remove block
        }
      }
    }
  }
  // drop down menu w3schools.com