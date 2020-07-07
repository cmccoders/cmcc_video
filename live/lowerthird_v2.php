<?php
$text1 = $_GET['text1'] ?? "Welcome to CMCC";
$text2 = $_GET['text2'] ?? "7 July 2020";
$text2 = str_replace('{{date}}', date('j F Y'), $text2);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>CMCC</title>
    <link href="lowerthird_v2.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
  </head>
  <body>
      <main>
        <div id="animation-1" class="animation">
            <div class="img"><img src="CMCC Logo.png" height="100px"></div>
            <!-- <div class="Green">/</div> -->
            <div class="black light mask">
                <div id="text-1"><?= $text1 ?><span class="Green">/</span></div>
            </div>
            <div class="black light mask">
                <div id="text-2"><?= $text2 ?></div>
            </div>
        </div>
      </main>
  </body>
</html>


<!--
#138d3fff - Dark Green
#92fa9c00 - Light Green
#094b74ff - Blue
-->