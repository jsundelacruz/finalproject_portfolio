


    $(document).ready(function(){





        // Random Justine facts
        var justineFacts = new Array();
        justineFacts[0] = "Justine has an affinity for maps and parks.";
        justineFacts[1] = "Justine is traveling to South America for the first time this year.";
        justineFacts[2] = "Justine is currently taking a front-end web development course.";
        justineFacts[3] = "Justine will continue spelling 'colour' instead of 'color' while she's in the states.";
        justineFacts[4] = "Justine enjoys matcha-flavoured things, collecting postcards while traveling and traversing the DOM.";

        var myRandom = Math.floor(Math.random()*justineFacts.length);
        $('.justineFact').html(justineFacts[myRandom]).show();


        // Prevent console.log from generating errors in IE for the purposes of the demo
        if ( ! window.console ) console = { log: function(){} };
        // SINGLE PAGE NAV PLUGIN
        $('.single-page-nav').singlePageNav({
            offset: $('.single-page-nav').outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function() {
                console.log('begin scrolling');
            },
            onComplete: function() {
                console.log('done scrolling');
            }
        });


        // Shrink navbar
        $(function(){
          $('.single-page-nav').data('size','big');
        });

        $(window).scroll(function(){
          if($(document).scrollTop() > 0)
        {
            if($('.single-page-nav').data('size') == 'big')
            {
                $('.single-page-nav').data('size','small');
                $('.single-page-nav').stop().animate({
                    height:'30px'
                },600);
            }
        }
        else
          {
            if($('.single-page-nav').data('size') == 'small')
              {
                $('.single-page-nav').data('size','big');
                $('.single-page-nav').stop().animate({
                    height:'50px'
                },600);
              }  
          }
        });


}); //end ready
