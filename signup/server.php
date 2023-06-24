<?php

    $env = parse_ini_file('../.env');

    $server_name = $env['server_name'];
    $user = $env['user'];
    $password = $env['password'];
    $db_name = $env['db_name'];

    $conn = new  mysqli($server_name, $user, $password, $db_name);

    if($conn -> connect_error){
        die("Connection failed: " . $conn -> connect_error);
    }
    else{
        echo "Connected Succesfully!";
    }

    $regno = $_POST['regno'];
    $name = $_POST['name'];
    $mailid = $_POST['mailid'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $domain = $_POST['domain'];
    $progLang = $_POST['progLang'];
    $progPltfm = $_POST['progPltfm'];

    $str="";
    if ( isset($progPltfm) && is_array($progPltfm) ){
        foreach ( $progPltfm as $val) {
            $str = $str . $val . ",";
        }
    }

    // or
    // foreach( (array) $progPltfm as $val)
    //     $str = $str . $val , ",";
    
    $department = $_POST['department'];
    $pass = $_POST['pass'];
    $confirmPass = $_POST['confirmPass'];

?>