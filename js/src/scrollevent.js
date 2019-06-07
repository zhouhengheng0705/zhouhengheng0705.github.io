// SCROLL EVENT
$(window).scroll(
  function()
  {
    var documentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if( documentScroll > 500)
    {
      //$('topmenu').removeClass('hide');
      $('#topmenu').css('backgroundColor','rgba(0,128,0,0.9)');
    }
    else
    {
      //$('topmenu').addClass('hide');
      $('#topmenu').css('backgroundColor','rgba(0,0,0,0)');
    }
  }
);
