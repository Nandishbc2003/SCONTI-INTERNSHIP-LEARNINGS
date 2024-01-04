<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classes and Objects Example</title>
  <script>
    // Define a class called 'Person'
    class Person {
      // Constructor to initialize the object
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      // Method to display information about the person
      displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
      }
    }

    // Create objects of the 'Person' class
    const person1 = new Person("John Doe", 25);
    const person2 = new Person("Jane Smith", 30);

    // Display information about the persons
    person1.displayInfo();
    person2.displayInfo();

    // Array of persons
    const peopleArray = [
      new Person("Alice", 22),
      new Person("Bob", 28),
      new Person("Charlie", 35)
    ];

    // Using array functions (forEach and map) to work with objects
    console.log("\nUsing forEach:");
    peopleArray.forEach(person => person.displayInfo());

    console.log("\nUsing map:");
    const agesArray = peopleArray.map(person => person.age);
    console.log("Ages Array:", agesArray);
  </script>
</head>
<body>
  <!-- This HTML file does not have a visible interface, as the main focus is on JavaScript functionality. -->
</body>
</html>
