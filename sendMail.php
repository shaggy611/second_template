
<?php

$array=['picture'=>'Картины','gallery'=>'Галерея','kurs'=>'Курсы'];
$to  = "dauzer58@gmail.com" ;

$subject = "Birthday Reminders for August";

$message = "
<html>
    <head>
        <title>Заказ Magic</title>
    </head>
    <body>
        <p>Заказ:{$array[$_GET['type']]} </p>
        <p>Имя:{$_GET['name']}</p>
        <p>Номер:{$_GET['number']}</p>
         </body>
</html>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Order <birthday@example.com>\r\n";
//$headers .= "Bcc: birthday-archive@example.com\r\n";

mail($to, $subject, $message, $headers);
//    echo 'good;';
//}else
//{
//    echo'eroor';
//}



echo json_encode($_GET);
?>

