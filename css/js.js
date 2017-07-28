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
    
    
    const friendTemp = `
    <div id="li-item">
    <li>
    <strong> Name: </strong> ${friend.name} <strong> Age: </strong> ${friend.age} 
    </li> 
    <button data-id="" class="btn btn-danger" id="remove">Delete</button>
    </div>
    `;

    function addFriend (friendTemp){
        $friends.append(friendTemp);
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
    
    let $li = $(this).closest('li');
    $.ajax({
  type: 'DELETE',
  url: 'http://rest.learncode.academy/api/johnbob/friends/'+$(this).attr('data-id'), 
  success: function() {
    $li.remove();
  }
});
});



