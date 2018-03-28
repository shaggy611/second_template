$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 1300) {
           $('#own_iframe').attr("src", "https://www.youtube.com/embed/c8GXs_eb1sY?&controls=2&fs=0&autoplay=1");
        }

         if ($(window).scrollTop() > 3000) {
           $('#own_iframe').removeAttr("src");
           $('#own_iframe').attr("src", "https://www.youtube.com/embed/c8GXs_eb1sY?&controls=2&fs=0&autoplay=0");
        }
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
    


    
    
});