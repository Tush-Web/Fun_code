/* Javascript for websouk */

/* Slide Show */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}

/* Body */
var a = 5;
var b = 5;

if (a === b) {
  console.log("true");
} else {
  console.log(" false");
}
var c = 3;

while (c < 10) {
  console.log(c + " Web Souk");
  c++;
}
for (i = 2; i < 10; i++) {
  console.log(i + " Best Service");
  if (i == 4) {
    console.log("We Have Reached 4");
    continue;
  }
  if (i == 7) {
    break;
  }
}
function myfunction(x, y, z) {
  console.log(x + y + z);
}
var somedata = [10, 20, 50, 30, 40, 60];
var newdata = somedata.sort();
console.log(newdata);

var images = document.getElementsByTagName("img");
console.log(images);

var phrase = document.getElementsByTagName("p");
console.log(phrase);

var anchor = document.getElementsByTagName("a");
console.log(anchor);

alert("Welcome To Web Souk!!");

function runme()
{
    alert("Contact Us For Any Query!!");
}
setTimeout( runme, 6000 )

function runyou()
{
    console.log("Welcome To Web Souk");
}
setInterval( runyou, 10000 )

var cname = document.myform.cname;
var messagee = document.getElementById('messagee');

function runHe()
{
  if( cname.value.length < 3 )
  {
    messagee.innerHTML = "Minimum 3 Characters";
    messagee.style.color = "red";
  }else if( cname.value.length == 4 )
  {
    messagee.innerHTML = "Nice!!";
    messagee.style.color = "green";
  }else if( cname.value.length == 5 )
  {
    messagee.innerHTML = "";
    cname.style.backgroundColor = "white";
    cname.style.color = "black";
  }
  

}