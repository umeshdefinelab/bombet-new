$(document).ready(function() {
  $('.bet-filter-btn').click(function() {
    $('.bet-filter-btn').removeClass('active');
    
    $(this).addClass('active');
    
    var buttonId = $(this).attr('id');
    switch(buttonId) {
      case 'lagaiBet-tab':
        $(this).css('background-color', '#FF5733'); 
        break;
      case 'khaiBet-tab':
        $(this).css('background-color', '#33FF57'); 
        break;
      case 'allBet-tab':
        $(this).css('background-color', '#5733FF'); 
        break;
    
    }
  });

  $('.open-menu-icon').click(function(){
    $('.menu-holder').addClass('show-menu');
  });
  $('.close-menu-icon').click(function(){
    $('.menu-holder').removeClass('show-menu');
  });

  oversScrollToEnd();
});



/* Slider Ready Function START */
$(document).ready(function(){

$('.slider-1').slick({
  dots: false,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-2').slick({
  dots: false,
  prevArrow: false,
  nextArrow: false,
  infinite: false,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});



});
/* Slider Ready Function CLOSE */


let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.overs-outer');
if(slider){
  const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }
  
  const stopDragging = (e) => {
    mouseDown = false;
  }
  
  const move = (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  }
  
  // Add the event listeners
  slider.addEventListener('mousemove', move, false);
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}

function showInfoModal(_modalId){
  var _infoModal = document.getElementById(_modalId);
  _infoModal.show()
}

function oversScrollToEnd(){
  var _oversScroll = document.querySelector(".overs-outer");
  if(_oversScroll){
    _oversScroll.scrollLeft = _oversScroll.scrollWidth;
  }
}