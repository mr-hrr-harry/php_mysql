<?php

    $env = parse_ini_file('./.env')
    
    $server_name = $env['server_name'];
    $user = $env['user'];
    $password = $env['password'];
    $db_name = $env['db_name'];

    $conn = new  mysqli($server_name, $user, $password, $db_name);

    if($conn -> connect_error){
        echo "Connection failed!<br>";
        // die("Connection failed: " . $conn -> connect_error);
    }
    else{
        echo "Connected Succesfully!<br>";
    }

    $mailid = $_POST['mailid'];
    $pass = $_POST['pass'];

    $sql;

?>