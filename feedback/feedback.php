<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $to = "robtolstov@gmail.com";
        $from = "no-reply@gmail.com";
        $name = $_POST['name-at'];
        $email = $_POST['email-at'];
        $message = $_POST['message-at'];
        $subject =    $_POST['subject-at'];
        $return_arr = array();
        if($name=="" || $email=="" || $message=="" || $subject=="") {
            $return_arr["frm_check"] = 'error';
            $return_arr["msg"] = "Пожалуйста, заполните все поля!";            
        }     
        $badwords = array("robertproducts sucks"); 
        $banstring = ($message != str_ireplace($badwords,"XX",$message))? true: false; if ($banstring) { 
            $return_arr["frm_check"] = 'error';
            $return_arr["msg"] = "Есть запрещенные слова";    
        }
        
        if ($return_arr["frm_check"] != 'error') {            
            $subject = "From my-site.ru: $subject";
$message = "Сообщение от " .$name. "\n
Контакт: " .$email. "\n        
Сообщение:\n" .$message;
            
$headers = "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";    
            
            if (!mail($to, $subject, $message, $headers)) {
                $return_arr["frm_check"] = 'error';
                $return_arr["msg"] = "Сообщение не отправлено, ошибка почтового сервера!";    
            } else {
                $return_arr["frm_check"] = 'success';
            }        
        }        
        echo json_encode($return_arr);
    }
?>