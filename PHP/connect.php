<?php


    $response = array('message' => "I am a response!");
    echo json_encode($response);

    $url = 'localhost';
    $username = 'root';
    $password ='';
    
    $conn = new mysqli('localhost','root','','login');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare('insert into log_in(Username, Password) values(?, ?)');
        $stmt->bind_param('ss',$username, $password);
        $stmt->execute();
        $response = array('message' => 'LOGIN SUCCESSFUL!!!!');
        echo json_encode($response);
        echo 'LOGIN SUCCESSFUL!!!!';
        $stmt->close();
        $conn->close();
    }

?>