
  var age = prompt("Please enter your Age",15);
  if (age <= 16) {
    document.getElementById("demo").innerHTML =
    "redirecting to google.com";
    window.location.href = "https://www.google.com/";
  }else{
    document.getElementById("demo").innerHTML =
    "your age is "+age; 
  }



