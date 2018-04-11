
<?php

$array=['picture'=>'Барельеф','gallery'=>'Розпись','kurs'=>'Курсы'];
$to  = "" ;

$subject = "Order";

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
//$headers .= "From: Order <birthday@example.com>\r\n";
//$headers .= "Bcc: birthday-archive@example.com\r\n";

if(mail($to, $subject, $message, $headers)){
    echo json_encode('good');
}else
{
    echo json_encode('bad');
}
//echo json_encode('good');
?>
