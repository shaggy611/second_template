/**
 * Created by Aladin on 3/11/2018.
 */

var p_sub=document.getElementsByName('picture_submit')[0];
p_sub.addEventListener('click', function (e) {
    e.preventDefault();
    var picture_name = document.getElementsByName('picture_name')[0];
    var picture_number = document.getElementsByName('picture_number')[0];
    var picture = document.getElementById('picture');
    var res= picture_number.match(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/);
    var res_name=picture_name.match(/^[a-zA-Z?-??-?'][a-zA-Z?-??-?-' ]+[a-zA-Z?-??-?']?$/);
    if(res !=null && res_name !=null){
        var ourRequest = new XMLHttpRequest;
        var url ="http://magic.afitness.com.ua/sendMail.php?name="+picture_name.value+"&number="+picture_number.value+"&type=picture";
        ourRequest.open("GET", url, true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            console.log(ourData);
            picture.innerHTML='??????? ?? ??????';
        };
        ourRequest.send();
    }else
    {
        console.log('aa','bed');
    }
    document.getElementById('picture_form').reset();
});