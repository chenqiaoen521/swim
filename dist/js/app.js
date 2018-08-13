$(function(){
	var result = window.matchMedia('(max-width: 767px)');
  isMoreDevice();
	result.addListener(isMoreDevice);
  function isMoreDevice(){
    if (result.matches) {
      $(window.document.body).removeClass('desktop').addClass('small_sen');
    } else {
      $(window.document.body).removeClass('small_sen').addClass('desktop');
    }
  }
});