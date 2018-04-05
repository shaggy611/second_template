$(document).ready(function() {
   
    $(window).scroll(function () {
        var IframeSourceTop = $('.main_txt').scrollTop;
        var IframeSourceBottom = $('.vidguk').scrollTop;
        if ($('.main_txt').scrollTop > 1) {
            $('#own_iframe').attr("src", "https://www.youtube.com/embed/c8GXs_eb1sY?&controls=2&fs=0&autoplay=1");
        }
        else if ($('.vidguk').scrollTop > 1) {
            $('#own_iframe').removeAttr("src");
           $('#own_iframe').attr("src", "https://www.youtube.com/embed/c8GXs_eb1sY?&controls=2&fs=0&autoplay=0"); 
        }
        
    });
    
    
    
   $(".forscroll_2").on("click", "a", function (event) {
        event.preventDefault();
        
            var top = $(".forscroll_2").offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }); 
    
   $(".forscroll_1").on("click", "a", function (event) {
        event.preventDefault();
        
            var top = $(".forscroll_1").offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });  
    
 $(".forscroll").on("click", "a", function (event) {
        event.preventDefault();
        
            var top = $(".forscroll").offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $(".main_menu, .divWithForm, .divWithForm_last, .divWithForm_last_1").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $(".next_button").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    });
    
	 for (var i = 4; i < 88; i++){
	$('#gallery').append('<figure class="photo"><a href="./img/originals/(' + i +').jpg" data-lightbox="roadtrip" data-title="Photo"><img src="./img/originals/min/(' + i + ').jpg" alt="Photo" /></a></figure>');
	}
	
	 for (var j = 1; j < 27; j++){
	$('#gallery_2').append('<figure class="photo_l"><a href="./img/barel/' + j +'.jpg" data-lightbox="roadtrip" data-title="Photo"><img src="./img/barel/min/' + j + '.jpg" alt="Photo" /></a></figure>');
	}
     for (var k = 1; k < 8; k++){
	$('#gallery_3').append('<figure class="photo_l"><a href="./img/course/' + k +'.jpg" data-lightbox="roadtrip" data-title="Photo"><img src="./img/course/min/' + k + '.jpg" alt="Photo" /></a></figure>');
	}    
    
    $('.cardInfHide').text('Посмотреть всю информацию');
    $('.cardInfHide').click(function () {
    var comments = $('.crdhd');
    if (comments.is(':hidden')) {
        comments.slideDown('normal', function () {
            /*$('.cardInfHide').text('Посмотреть всю информацию');*/
            $('.cardInfHide').text('Скрыть всю информацию');
        });
    } else {
        comments.slideUp('normal', function () {
            $('.cardInfHide').text('Посмотреть всю информацию');
        });
    }
});
	
});