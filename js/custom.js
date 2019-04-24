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

//------ logo motion ------//

  if($('#viewer').length){
    var setImg = '#viewer';
    var counter = 0;
    thisOffsetLogo = $('#viewer').offset().top + $('#viewer').outerHeight();
    $(window).scroll(function(){
    if( $(window).scrollTop() + $(window).height() > thisOffsetLogo && counter == '0' ){
      moveLogo(setImg);
      counter++;
    } else {
    // 特定の要素を超えていない
    }

    });
  }


//------ drop motion ------//
if($('#motion').length){
  thisOffset = $('#motion').offset().top + $('#motion').outerHeight();
  $(setImg).children('img').css({opacity:'0'});
  $(window).scroll(function(){
    if( $(window).scrollTop() + $(window).height() > thisOffset){
      setTimeout('move01()', 6000);
      setTimeout('move02()', 6500);
      setTimeout('move03()', 7000);
      setTimeout('move04()', 8000);
    } else {
      // 特定の要素を超えていない
    }
  });
}
//------ drop motion ------//
$('.havemenu').hover(
    function() {
        //マウスカーソルが重なった時の処理
        $('.inner_menu').slideDown();
    },
    function() {
        //マウスカーソルが離れた時の処理
        $('.inner_menu').slideUp();
    }
);


//----- movie switch -------//
  $('#btn_stop').click(function(){
    var alt = $(this).attr('alt');
    var v = document.getElementById("video");
    if(alt == 'stop') {
      pauseVideo(v);
      $(this).attr('src','./images/start.png');
      $(this).attr('alt','start');
    } else {
      playVideo(v);
      $(this).attr('src','./images/stop.png');
      $(this).attr('alt','stop');

    }
  });
  $('#btn_off').click(function(){
    var alt = $(this).attr('alt');
    var v = document.getElementById("video");
    if(alt == 'off') {
      v.muted = false;
      $(this).attr('src','./images/on.png');
      $(this).attr('alt','on');
    } else {
      v.muted = true;
      $(this).attr('src','./images/off.png');
      $(this).attr('alt','off');

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
function move04() {
  $('.move_05').addClass('apper');
  $('.move_04').addClass('disapper');
  $('.move_04').removeClass('none');
}

//----- movie switch -------//
function pauseVideo(v) {
	//動画を一時停止
	v.pause();
}
function playVideo(v) {
	v.play();
}

function moveLogo (setImg) {
  //var setImg = '#viewer';
  var fadeSpeed = 500;
  var switchDelay = 500;
  var cnt = 0;

  $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
    setInterval(function(){
    if(cnt == '7') {
      return false;
    }
    if($(setImg + ' :first-child').hasClass('o0')) {
      $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    } else {
      $(setImg + ' :first-child').next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    }
  cnt ++;
  },switchDelay);
}

//----- //FUNCTION--------//
