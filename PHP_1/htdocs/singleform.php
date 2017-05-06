<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rejestracja do kategorji indywidualnej</title>
    <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
<?php

    if(isset($_POST['submit'])) {
        if (empty($_POST["imie"])){
            print("<p>Pole imie jest wymagane</p>");
        } else {
            if(!preg_match("/^[a-zA-Z0-9]{2,30}/", $_POST["imie"])) {
                print("<p>Wprowadzone dane są niezgodne ze wzorcem</p>");
            }
        }

        if (empty($_POST["nazwisko"])){
            print("<p>Pole nazwisko jest wymagane</p>");
        } else {
            if(!preg_match("/^[a-zA-Z0-9_]{2,30}/", $_POST["nazwisko"])) {
                print("<p>Error in surname input</p>");
            }
        }

        if (empty($_POST["email"])){
            print("<p>Pole e-mail jest wymagane</p>");
        } else {
            if(!preg_match("/([w-]+@[w-]+.[w-]+)/", $_POST["nazwisko"])) {
                print("<p>Error in name input</p>");
            }
        }

        if (empty($_POST["word1"]) && empty($_POST["word2"])){
            print ("<p>Two words are required</p>");
        } else {
            $words = array();







            /*$word1 = $_POST("word1");
            $word2 = $_POST("word2");
            if (strcmp($word1, $word2) == true) {
                print("<p>Pierwsze slowo znajduje się alfabetycznie pózniej</p>");
                print("<p>Słowa po konkatenacji $word1 . $word2</p>")
            } else if (strcmp($word1, $word2) == false) {
                print ("<p>Pierwsze slowo znajduje się alfabetycznie wcześniej</p>");
            } else {
                print ("<p>Slowa są takie same</p>");
            }*/

        }

        if (empty($_POST["rnum"])){
            print ("Random number is required");
        } else {
            $rnum =("rnum");
            if (is_double($rnum)) {
                settype($rnum, "integer");
                print("<p>Twoja liczba rzeczywista konwertowana do całkowitej - to $rnum</p>");
                settype($rnum, "string");
                print("<p>Twoja liczba w postaci string - to $rnum</p>");
            } else if (is_double($rnum)) {
                print("<p>Twoja liczba całkowita konwertowana do rzeczywistej - to $rnum</p>");
            } else {
                print("<p>Coś za bardzo kombinujesz</p>");
            }
        }
    }
?>
</body>
</html>

