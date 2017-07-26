$(function(){

    let width = 1000;
    let animationSpeed = 3000;
    let pause = 500;
    let currentSlide = 1;

    let $slider = $('#slider');
    let $slideContainer = $slider.find('.slides');
    let $slides = $slideContainer.find('.slide');

    let interval;
    
    function startSlider(){
       interval = setInterval(function(){
            $slideContainer.animate({'margin-left':'-='+width}, animationSpeed, function(){
                currentSlide++;
                if(currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
   }

function pauseSlider(){
    clearInterval(interval);
}
    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();
  
});