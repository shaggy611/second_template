//барельеф
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
        var url ="http://www.olya-art.com.ua/sendMail.php?name="+picture_name+"&number="+picture_number+"&type=picture";
        ourRequest.open("GET", url, true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            //console.log(ourData);
            if(ourData=='good'){
                picture.innerHTML='Спасибо за заявку';
            }else{
                picture.innerHTML='Ошибка<br> свяжитесь с нами по телефону<br>067-245-50-88';
            }
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
        p_sub.setAttribute('data-target', '#exampleModal_2');
        console.log('bad');
    }
    document.getElementById('picture_form').reset();
});
//розпись
var z_sub=document.getElementsByName('rozpus_submit')[0];
z_sub.addEventListener('click', function (e) {
    e.preventDefault();
    var rozpus_name = document.getElementsByName('rozpus_name')[0].value;
    var rozpus_number = document.getElementsByName('rozpus_number')[0].value;
    var painting = document.getElementById('painting');
    var roz= rozpus_number.match(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/);
    var roz_name=rozpus_name.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/);
    if(roz !=null && roz_name !=null){
        z_sub.removeAttribute('data-toggle');
        z_sub.removeAttribute('data-target');
        var ourRequest = new XMLHttpRequest;
        var url ="http://www.olya-art.com.ua/sendMail.php?name="+rozpus_name+"&number="+rozpus_number+"&type=gallery";
        ourRequest.open("GET", url, true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            //console.log(ourData);
            console.log(painting);
            if(ourData=='good'){
                painting.innerHTML='Спасибо за заявку';
            }else{
                painting.innerHTML='Ошибка<br> свяжитесь с нами по телефону<br>067-245-50-88';
            }
            var rozpus_name = document.getElementsByName('rozpus_name')[0];
            rozpus_name.className+=" disable";
            var rozpus_number = document.getElementsByName('rozpus_number')[0];
            rozpus_number.className+=" disable";
            z_sub.className+=" disable";
        };
        ourRequest.send();
    }else
    {
        z_sub.setAttribute('data-toggle','modal');
        z_sub.setAttribute('data-target', '#exampleModal_1');
        console.log('bad');
    }
    document.getElementById('picture_form').reset();
});

//курсы
var cu_sub=document.getElementsByName('course_submit')[0];
cu_sub.addEventListener('click', function (e) {
    e.preventDefault();
    var course_name = document.getElementsByName('course_name')[0].value;
    var course_number = document.getElementsByName('course_number')[0].value;
    var enrollment = document.getElementById('enrollment');
    var co= course_number.match(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/);
    var co_name=course_name.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/);

    if(co !=null && co_name !=null){
        cu_sub.removeAttribute('data-toggle');
        cu_sub.removeAttribute('data-target');
        var ourRequest = new XMLHttpRequest;
        var url ="http://www.olya-art.com.ua/sendMail.php?name="+course_name+"&number="+course_number+"&type=gallery";
        ourRequest.open("GET", url, true);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            //console.log(ourData);
            console.log(enrollment);
            if(ourData=='good'){
                enrollment.innerHTML='Спасибо за заявку';
            }else{
                enrollment.innerHTML='Ошибка<br> свяжитесь с нами по телефону<br>067-245-50-88';
            }
            var course_name = document.getElementsByName('course_name')[0];
            course_name.className+=" disable";
            var course_number = document.getElementsByName('course_number')[0];
            course_number.className+=" disable";
            cu_sub.className+=" disable";
        };
        ourRequest.send();
    }else
    {
        cu_sub.setAttribute('data-toggle','modal');
        cu_sub.setAttribute('data-target', '#exampleModal');
        console.log('bad');
    }
    document.getElementById('picture_form').reset();
});
