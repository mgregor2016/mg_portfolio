/*toggle nav*/

(function($) {

  $(document).ready(function(){
    $('.toggle-nav').on('click', function() {
      toggleNavigation($(this), $('.nav-pane'));
      changeLetters($(this));
    });

    function toggleNavigation(btn, nav) {
      btn.toggleClass('open');
      nav.toggleClass('open');
    }
// to make the nav pane.open close...
    $('.nav-pane a').on('click', function() {
      $('.nav-pane').removeClass('open');
      // change button too
    });

    function changeLetters(btn) {
      var m = $('.toggle-nav span.m');
      var e = $('.toggle-nav span.e');
      var n = $('.toggle-nav span.n');
      var u = $('.toggle-nav span.u');

      e.toggleClass('btn-close');

      if(btn.hasClass('open'))
      {
        m.text("E");
        n.text("I");
        u.text("T");
      }
      else
      {
        m.text("M");
        n.text("N");
        u.text("U");
      }
    }
  });

})(jQuery);

/*scrolling and other key functions*/
/* new fullpage('#fullpage', {
    sectionsColor: ['', '', '', ''],
  });*/
  
  var currentsection = 1;
  
  // NEED TO GET THESE FUNCTIONS WORKING
  function goUp() {
    console.log("Run Function Go Up!");
    
    var prevsection = currentsection - 1;
    var prevanchor = '#section' + prevsection;
    var upanchor = document.querySelector(prevanchor);     
    scroll.animateScroll(upanchor);
    currentsection = prevsection;
    console.log('Current Section is ' + currentsection);
    
  };
  
   
  
  function goDown() {
    //document.querySelector('.selection2');
    console.log("Run Function Go Down!");
    
    var nextsection = currentsection + 1;
    var nextanchor = '#section' + nextsection;
    //console.log(nextsection);
    //console.log(nextanchor);
    var downanchor = document.querySelector(nextanchor);     
    scroll.animateScroll(downanchor);
    currentsection = nextsection;
    console.log('Current Section is ' + currentsection);
    
  };
  
  document.addEventListener('keydown',press);
  function press(e){
    if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
      // up
      console.log("Key Pressed Up, so Go Up!");
      goUp();
    }
    if (e.keyCode === 39 /* down */ || e.keyCode === 68 /* d */){
      //right
      console.log("Key Pressed Right, so Go Down!");
      goDown();
    }
    if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
      //down
      console.log("Key Pressed Down, so Go Down!");
      goDown();
    }
    if (e.keyCode === 37 /* up */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
      //left
      console.log("Key Pressed Left, so Go Up!");
      goUp();
    }
  }
  
  // smooth scroll init
  var scroll = new SmoothScroll('a[href*="#"]');

