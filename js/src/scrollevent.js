// SCROLL EVENT
window.onscroll=function(){
  var documentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if( documentScroll > 80){
    $('topmenu').removeClass('hide');

  } else {
    $('topmenu').addClass('hide');
  }
}
