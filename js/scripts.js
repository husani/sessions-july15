$(document).ready(function(){

	//background -- static images or video?
 	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		//static images
 		$('.for-video').css('display', 'none');
 		$.backstretch(
 			['/img/backgrounds/1.jpg', '/img/backgrounds/2.jpg', '/img/backgrounds/3.jpg', '/img/backgrounds/4.jpg', '/img/backgrounds/5.jpg', '/img/backgrounds/6.jpg', '/img/backgrounds/7.jpg', '/img/backgrounds/8.jpg', '/img/backgrounds/9.jpg', '/img/backgrounds/10.jpg', '/img/backgrounds/11.jpg', '/img/backgrounds/12.jpg', '/img/backgrounds/13.jpg', '/img/backgrounds/14.jpg', '/img/backgrounds/15.jpg', '/img/backgrounds/16.jpg', '/img/backgrounds/17.jpg', '/img/backgrounds/18.jpg', '/img/backgrounds/19.jpg', '/img/backgrounds/20.jpg', '/img/backgrounds/21.jpg', '/img/backgrounds/22.jpg', '/img/backgrounds/23.jpg', ],
 			{duration: 2230, fade: 500}
 		);

	} else {
		//video
		$('.player').mb_YTPlayer();
	}

	$('header h1').fitText();
	$('header h2').fitText(2);

	$('section .presents h4').fitText(2, {maxFontSize: '20px'});
	$('section .presents .show-name').fitText(0.8, {maxFontSize: '95px'});

    $("section li.full").fitVids();

	$('.bxslider').bxSlider();
	
});

function facebookConversionPixel(fb_pixel, fb_value){
    var image = new Image(1,1); 
    image.src = "//www.facebook.com/offsite_event.php?id=" + fb_pixel + "&amp;value=" + fb_value + "&amp;currency=USD";

}