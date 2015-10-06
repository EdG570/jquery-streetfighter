$(document).ready(function(){
    $('.ryu').mouseenter(function(){
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    })

    .mouseleave(function(){
      $('.ryu-ready').hide();
      $('.ryu-still').show();
      $('.hadouken').hide();
    })

    .mousedown(function(){
      playHadouken();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show().animate(
        {'left': '1020px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '600px');
        }
      );
     
    })

    .mouseup(function(){
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    });

    var playing = false;

    $(document).on('keydown', function(e){
      
      if(e.which == 88){
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
        $('body').css('background-color', 'red');
        if(playing === false){
        playHaters(); 
        }
        
        playing = true;
      }
        
    })


    .keyup(function(){
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $('#haters-sound')[0].pause();
      $('body').css('background-color', '#000');
      playing = false;

    });
      
    function playHadouken() {
      $('#hadouken-sound')[0].volume=0.5;
      $('#hadouken-sound')[0].load();
      $('#hadouken-sound')[0].play();
    }

    function playHaters() {
      $('#haters-sound')[0].volume=0.5;
      $('#haters-sound')[0].load();
      $('#haters-sound')[0].play();
    }



});