<?php
$studentNameFirst_error = $studentNameNickname_error = $studentNameMiddle_error = $studentNameLast_error  =  "";
$studentNameFirst = $studentNameNickname = $studentNameMiddle = $studentNameLast  =  "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(empty($_POST["studentNameFirst"])) {
        $studentNameFirst_error = "First name is required."
    }
    else {
        $studentNameFirst = test_input($_POST["studentNameFirst"]);
        if(!preg_match("/^[a-zA-Z]*$/",$studentNameFirst)) {
            $studentNameFirst_error = "Only letters and spaces allowed."
        }
    }


    if(empty($_POST["studentNameNickname"])) {
        $studentNameNickname_error = "Nickname name is required."
    }
    else {
        $studentNameFirst = test_input($_POST["studentNameNickname"]);
        if(!preg_match("/^[a-zA-Z]*$/",$studentNameNickname)) {
            $studentNameNickname_error = "Only letters and spaces allowed."
        }
    }

    if(empty($_POST["studentNameMiddle"])) {
        $studentNameMiddle_error = "Middle name is required."
    }
    else {
        $studentNameMiddle = test_input($_POST["studentNameMiddle"]);
        if(!preg_match("/^[a-zA-Z]*$/",$studentNameMiddle)) {
            $studentNameMiddle_error = "Only letters and spaces allowed."
        }
    }

    if(empty($_POST["studentNameLast"])) {
        $studentNameLast_error = "Last name is required."
    }
    else {
        $studentNameLast = test_input($_POST["studentNameLast"]);
        if(!preg_match("/^[a-zA-Z]*$/",$studentNameLast)) {
            $studentNameLast_error = "Only letters and spaces allowed."
        }
    }

    if($studentNameFirst_error == '' and $studentNameNickname_error == '' and $studentNameMiddle_error == '' and $studentNameLast_error == '') {
        unset($_POST['submit'])

        $to = 'emilyknapp1990@yahoo.com';
        $subject = 'form submit';
        if(mail($to, $subject, $message)) {
            $success = "message sent";
            $studentNameFirst = $studentNameNickname = $studentNameMiddle = $studentNameLast  =  "";

        }
    }
}


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>

