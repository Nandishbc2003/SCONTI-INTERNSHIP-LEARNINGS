<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Prompt Example</title>
  <script>
    function askForName() {
      var userName = prompt("Please enter your name:");
      
      if (userName !== null && userName !== "") {
        alert("Hello, " + userName + "! Welcome to our website.");
      } else {
        alert("You didn't enter your name. Please try again.");
      }
    }
  </script>
</head>
<body>

<button onclick="askForName()">Ask for Name</button>

</body>
</html>
