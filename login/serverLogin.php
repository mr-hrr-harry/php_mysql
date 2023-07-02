<?php

    $env = parse_ini_file('../.env');
    
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

    $table = $env['table_name'];

    $field1 = $env['field10'];
    $field2 = $env['field3'];

    $sql  = "select " . $field1 ." from " . $table . " where ". $field2 ." = \"" . $mailid . "\"";

    $f=0;
    if($conn->query($sql) == 1){
        echo 'Login Successfull!';
        $f=1;
    }
    else{
        echo 'Invalid Login credentials!';
    }

    $conn->close();

    if($f==1){

        echo '
        <script>
            var allInputs = document.querySelectorAll("input")
            allInputs.forEach(eachInput => {
                eachInput.value = ""
            });
        </script>';

        header("Location: ../home/homePage.html");
        exit();
    }
?>