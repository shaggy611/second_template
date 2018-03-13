/**
 * Created by Aladin on 3/11/2018.
 */

var p_sub=document.getElementsByName('picture_submit')[0];
p_sub.addEventListener('click', function (e) {
    e.preventDefault();
    var picture_name = document.getElementsByName('picture_name')[0].value;
    var picture_number = document.getElementsByName('picture_number')[0].value;
    var picture = document.getElementById('picture');
    var res= picture_number.match(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/);
    var res_name=picture_name.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/);
    if(res !=null && res_name !=null){
        p_sub.removeAttribute('data-toggle');
        p_sub.removeAttribute('data-target');
        var ourRequest = new XMLHttpRequest;
        var url ="http://magic.afitness.com.ua/sendMail.php?name="+picture_name+"&number="+picture_number+"&type=picture";
        ourRequest.open("GET", url, true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            console.log(ourData);
            picture.innerHTML='Спасибо за заявку';
            var picture_name = document.getElementsByName('picture_name')[0];
            picture_name.className+=" disable";
            var picture_number = document.getElementsByName('picture_number')[0];
            picture_number.className+=" disable";
            p_sub.className+=" disable";
        };
        ourRequest.send();
    }else
    {
        p_sub.setAttribute('data-toggle','modal');
        p_sub.setAttribute('data-target', '#exampleModal');
        console.log('bad');
    }
    document.getElementById('picture_form').reset();
});