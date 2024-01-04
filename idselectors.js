<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>getElementById Example</title>
  <style>
    #result {
      font-size: 20px;
      color: #3498db;
    }
  </style>
  <script>
    function changeText() {
      var resultElement = document.getElementById("result");
      resultElement.textContent = "Text changed using getElementById!";
    }
  </script>
</head>
<body>

<button onclick="changeText()">Change Text</button>
<p id="result">Initial Text</p>

</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>querySelector Example</title>
  <style>
    .highlight {
      font-size: 20px;
      color: #e74c3c;
    }
  </style>
  <script>
    function highlightElement() {
      var elementToHighlight = document.querySelector(".highlight");
      elementToHighlight.style.backgroundColor = "#f39c12";
    }
  </script>
</head>
<body>

<button onclick="highlightElement()">Highlight Element</button>
<p class="highlight">This element will be highlighted</p>

</body>
</html>


