<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['company'])) {
    $company = $_POST['company'];
}
if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
}
if (isset($_POST['message'])) {
    $message = $_POST['message'];
}

/* Сюда впишите свою эл. почту */
$myaddres  = "Contact@asicxchange.com";

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "You have received a new message from the user $name ($company).\n" .
    "Here is the message:\n $message" .

    /* А эта функция как раз занимается отправкой письма на указанный вами email */
    $sub = 'New Form submission';
$email = "From: $name ($company)";
$send = mail($myaddres, $sub, $mes, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Thank you! We will contact you!</title>
    <meta name="generator">
    <script type="text/javascript">
        setTimeout('location.replace("/index.html")', 3000);
        /*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
    </script>
</head>

<body>
    <h1>Thank you! We will contact you!</h1>
</body>

</html>