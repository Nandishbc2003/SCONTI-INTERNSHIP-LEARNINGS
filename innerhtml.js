<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>setInterval Example</title>
  <style>
    #intervalCounter {
      font-size: 20px;
      color: #8e44ad;
    }
  </style>
  <script>
    var counter = 0;
    var intervalId;

    function startCounter() {
      var intervalCounterElement = document.getElementById("intervalCounter");
      intervalId = setInterval(function () {
        counter++;
        intervalCounterElement.textContent = "Counter: " + counter;
      }, 1000);
    }

    function stopCounter() {
      clearInterval(intervalId);
    }
  </script>
</head>
<body>

<button onclick="startCounter()">Start Counter</button>
<button onclick="stopCounter()">Stop Counter</button>
<p id="intervalCounter">Counter: 0</p>

</body>
</html>
