<?php

if ( isset( $_POST['submit'] ) ) {
    $name = wp_get_current_user()->display_name;
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "phil.normandin@live.ca";
    $headers = "From: " . $mailFrom;
    $txt = "You have received an email from " . $name . ".\n\n" . $message;

    mail( $mailTo, $subject, $txt, $headers );
}

?>
