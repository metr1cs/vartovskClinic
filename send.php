<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $email = 'mrt-nv1@yandex.ru';
    $password = 'iazzzfijwsdnlxba';
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.yandex.ru';
        $mail->SMTPAuth   = true;
        $mail->Username   = $email;
        $mail->Password   = $password;
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        $mail->setFrom($email, 'Сайт заявок');

        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = 'Заявка на обратный звонок';
        $mail->Body    = "
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br>
            <b>Услуга:</b> $service
        ";

        $mail->send();
        echo "Ваша заявка отправлена!";
    } catch (Exception $e) {
        echo "Ошибка: {$mail->ErrorInfo}";
    }
}
