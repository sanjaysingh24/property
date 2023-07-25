
function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
     
      
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
   
    
   



  }


function mfunction(){
  let content = document.getElementById("dropdown-con");
   
   if(content.style.display =="none"){
    content.style.display = "block";
   }
   else{
    content.style.display = "none";
   }

  

}


// code for static navbar for fixed 
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 



//js code for slider for mobile view
$(document).ready(function(){
  $(".SlickCarousel-mobile").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:5000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:1, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:true,
   responsive:true,
    responsive: [
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
  })
})

//for desktop
$(document).ready(function(){
  $(".SlickCarousel").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:5000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:3, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:true,
   responsive:true,
    responsive: [
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
  })
})