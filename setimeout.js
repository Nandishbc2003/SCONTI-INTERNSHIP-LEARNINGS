<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>setTimeout Example</title>
  <style>
    #delayedText {
      font-size: 20px;
      color: #27ae60;
    }
  </style>
  <script>
    function delayedChangeText() {
      var delayedTextElement = document.getElementById("delayedText");
      setTimeout(function () {
        delayedTextElement.textContent = "Text changed after 3 seconds!";
      }, 3000);
    }
  </script>
</head>
<body>

<button onclick="delayedChangeText()">Change Text After 3 Seconds</button>
<p id="delayedText">Initial Text</p>

</body>
</html>
