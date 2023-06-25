<?php

    $env = parse_ini_file('../.env');

    $server_name = $env['server_name'];
    $user = $env['user'];
    $password = $env['password'];
    $db_name = $env['db_name'];

    $conn = new  mysqli($server_name, $user, $password, $db_name);

    if($conn -> connect_error){
        echo "Connectio failed!<br>";
        // die("Connection failed: " . $conn -> connect_error);
    }
    else{
        echo "Connected Succesfully!<br>";
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
            $str = $str . $val . "-";
        }
    }

    // or
    // foreach( (array) $progPltfm as $val)
    //     $str = $str . $val , ",";
    
    $department = $_POST['department'];
    $pass = $_POST['pass'];

    $table = $env['table_name'];

    $field1 = $env['field1'];
    $field2 = $env['field2'];
    $field3 = $env['field3'];
    $field4 = $env['field4'];
    $field5 = $env['field5'];
    $field6 = $env['field6'];
    $field7 = $env['field7'];
    $field8 = $env['field8'];
    $field9 = $env['field9'];
    $field10 = $env['field10'];

    $sql = "insert into " . $table . " ( " . $field1 . ", " . $field2 . ", " . $field3 . ", " . $field4 . ", " . $field5 . ", " . $field6 . ", " . $field7 . ", " . $field8 . ", " . $field9 . ", " . $field10 . ") values ( " . 
                $regno . ", \"" . $name . "\", \"" . $mailid . "\", " . $age . ", \"" . $gender . "\", \"" . $domain . "\", \"" . $progLang . "\", \"" . $str . "\", \"" .  $department . "\", \"" . $pass . "\") ";


    if($conn->query($sql) === TRUE){
        $last_id = $conn->insert_id;
        echo "Insertion successful for " . $last_id;
    }
    else{
        echo "Insertion failed!";
    }

    $conn->close();

    echo '<script>
        
    var allInputs = document.querySelectorAll("input")
    allInputs.forEach((eachInput) => {
        eachInput.value = ""
    })

    alert("Registration Successful!")

    window.open("../indexLogin.html", "_self")
    </script>';

    
    // header("Location: ../indexLogin.html");
    exit();

?>