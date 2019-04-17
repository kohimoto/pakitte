$(function(){
  //-----slick--------//
  $('.slick-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [ //レスポンシブの設定
    {
      breakpoint: 480, //ブレークポイント1の値
      settings: { //480px以下では1画像表示
      slidesToShow: 1
      }
    }]
  });

  //------ scroll top ------//
  $('.go_top a').click(function(){
    $('body,html').animate({scrollTop:0}, 1000, 'swing');
    return false;
  });

  //------ drop motion ------//
  thisOffset = $('#motion').offset().top + $('#motion').outerHeight();

  $(window).scroll(function(){
    if( $(window).scrollTop() + $(window).height() > thisOffset){
      setTimeout('move01()', 1000);
      setTimeout('move02()', 2000);
      setTimeout('move03()', 3000);
    } else {
      // 特定の要素を超えていない
    }
  });

});

//------- FUNCTION -------//
//----- drop motion -------//
function move01() {
  $('.move_02').addClass('apper');
  $('.move_01').addClass('disapper');
}
function move02() {
  $('.move_03').addClass('apper');
  $('.move_02').addClass('disapper');
  $('.move_02').removeClass('none');
}
function move03() {
  $('.move_04').addClass('apper');
  $('.move_03').addClass('disapper');
  $('.move_03').removeClass('none');
}
//----- //FUNCTION--------//
