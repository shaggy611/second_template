$(document).ready (function() {
    $(window).scroll(function (){
        if ($(window).scrollTop() < 1030) {
           $('#own_iframe').attr("src", "https://www.youtube.com/embed/5SgyFaBS7WI?&controls=2&fs=0&autoplay=1"); 
        }
    })
})

