$(function(){

    let width = 500;
    let animationSpeed = 3000;
    let pause = 1000;
    let currentSlide = 1;
    
    let $slider = $('#slider');
    let $slideContainer = $slider.find('.slides');
    let $slides = $slideContainer.find('.slide');

    let interval;

    $('#hide').on('click', function(){
        $('#slider').toggle(500);
    })

   
    
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
    
    const $name = $('#name');
    const $age = $('#age');
    const $friends = $('#friends');


    const friendTemp = $('#friend-template').html();




    function addFriend (friend){
        $friends.append(Mustache.render(friendTemp, friend));
    }
   
$.ajax({
  type: 'GET',
  url: 'http://rest.learncode.academy/api/johnbob/friends',
  success: function(friends) {
      $.each(friends, function(i, friend){
          addFriend(friend);
      });
  },
  error: function(){
      alert('Err');
  } 
});


$('#add-friend').on('click', function(){
    let friend = {
        name: $name.val(),
        age: $age.val()
    };

    $.ajax({
  type: 'POST',
  url: 'http://rest.learncode.academy/api/johnbob/friends',
  data: friend,
  success: function(newFriend) {
    addFriend(newFriend);
  },

  error: function(){
      alert('error add');
  }
});



});




$friends.delegate('#remove', 'click', function(){
    
    let $div = $(this).closest('div');
    $.ajax({
  type: 'DELETE',
  url: 'http://rest.learncode.academy/api/johnbob/friends/'+ $(this).attr('data-id'), 
  success: function() {
    $div.fadeOut(10, function(){
        $(this).remove();
    });
  }
});
});



