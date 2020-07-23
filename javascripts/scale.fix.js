var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

// var header = document.getElementById("myTopnav");
// var btns = header.getElementsByClassName("menu");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace("active", "");
//   this.className += " active";
//   });
// }



// $(document).ready(function () {
//   $(document).on("scroll", onScroll);
  
//   //smoothscroll
//   $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");
      
//       $('a').each(function () {
//           $(this).removeClass('active');
//       })
//       $(this).addClass('active');
    
//       var target = this.hash,
//           menu = target;
//       $target = $(target);
//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top+2
//       }, 500, 'swing', function () {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//       });
//   });
// });

// function onScroll(event){
//   var scrollPos = $(document).scrollTop();
//   $('.topnav a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//           $('.menu').removeClass("active");
//           currLink.addClass("active");
//       }
//       else{
//           currLink.removeClass("active");
//       }
//   });
// }



let modal = [document.getElementById("myModal-1"),
              document.getElementById("myModal-2"),
              document.getElementById("myModal-3"),
              document.getElementById("myModal-4"),
              document.getElementById("myModal-5"),
              document.getElementById("myModal-6")];

let btn = [document.getElementById("btn-1"),
              document.getElementById("btn-2"),
              document.getElementById("btn-3"),
              document.getElementById("btn-4"),
              document.getElementById("btn-5"),
              document.getElementById("btn-6")];

for(let i = 0; i<btn.length; ++i){
  // When the user clicks anywhere outside of the modal, close it

  btn[i].onclick = function() {
    modal[i].style.display = "block";
  }
  
}

window.onclick = function(event) {
  for(let i = 0; i < modal.length; ++i){
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

var close = document.getElementsByClassName("closeButton");


// When the user clicks on <span> (x), close the modal
for(let i = 0; i<span.length; ++i){
  span[i].onclick = function() {
    modal[i].style.display = "none";
    // modal_3.style.display = "none";


  }
}

for(let i = 0; i<close.length; ++i){
  close[i].onclick = function() {
    modal[i].style.display = "none";
    // modal_3.style.display = "none";

  }
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

// while(header.clientHeight > window.innerHeight) {
  // let top = header.clientHeight - window.innerHeight
  
  // header.style.top = `-${top}px`
// }

function myFunction() {
  if (window.pageYOffset > sticky && window.innerWidth > 960) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  
}
if(header.clientHeight > window.outerHeight && window.innerWidth > 960){
  let top = header.clientHeight - window.innerHeight
  header.style.top = `-${top}px`
}
window.onresize = function() {
  if(header.clientHeight > window.outerHeight && window.innerWidth > 960){
    let top = header.clientHeight - window.innerHeight
    header.style.top = `-${top}px`
  }
  
}



// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }