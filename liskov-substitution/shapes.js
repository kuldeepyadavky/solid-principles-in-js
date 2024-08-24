// Importing the logging functions from a shared module
import { logMessage, logError } from "../common/logger.js";

// Base class Shape defines an interface for area calculation and increasing dimensions
class Shape {
  area() {
    logError("Area method must be implemented by derived classes");
  }

  increaseSize() {
    logError("increaseSize method must be implemented by derived classes");
  }
}

// Class representing a Rectangle, extends Shape
class Rectangle extends Shape {
  constructor(length, breadth) {
    super(); // Call the constructor of the parent Shape class
    this.length = length;
    this.breadth = breadth;
  }

  // Setters to modify the length and breadth
  setLength(length) {
    this.length = length;
  }

  setBreadth(breadth) {
    this.breadth = breadth;
  }

  // Calculate area of a rectangle (length * breadth)
  area() {
    return this.length * this.breadth;
  }

  // Method to increase the breadth of the rectangle by 1
  increaseSize() {
    this.setBreadth(this.breadth + 1);
  }
}

// Class representing a Square, extends Shape but does NOT extend Rectangle
class Square extends Shape {
  constructor(side) {
    super(); // Call the constructor of the parent Shape class
    this.side = side;
  }

  // Since both sides of a square are equal, we only need one setter
  setSide(side) {
    this.side = side;
  }

  // Calculate area of a square (side * side)
  area() {
    return this.side * this.side;
  }

  // Method to increase the side of the square by 1
  increaseSize() {
    this.setSide(this.side + 1);
  }
}

// Function to increase the size of any shape using polymorphism
function increaseShape(shape) {
  shape.increaseSize();
}

// Creating instances of Rectangle and Square
const rectangle = new Rectangle(10, 2);
const square = new Square(5);

// Log initial shapes and their areas
logMessage(`Rectangle area: ${rectangle.area()}`);
logMessage(`Square area: ${square.area()}`);

// Increase dimensions of shapes
increaseShape(rectangle);
increaseShape(square);

// Log updated shapes and their areas
logMessage(`Updated Rectangle area: ${rectangle.area()}`);
logMessage(`Updated Square area: ${square.area()}`);

/*
Explanation of Liskov Substitution Principle (LSP) without if-else:

1. The Liskov Substitution Principle (LSP) is upheld by ensuring that derived classes can be substituted for their base class without breaking functionality.
   
2. Instead of using `if-else` or type checks, each shape class (Rectangle, Square) implements the `increaseSize` method according to its specific logic:
   - `Rectangle` increases its breadth.
   - `Square` increases its side.
   
3. The `increaseShape` function relies on polymorphism. It simply calls the `increaseSize` method without needing to know the specific type of shape, avoiding conditional checks.

4. This design is clean, extensible, and fully compliant with LSP. Adding new shapes requires no modification to existing code, only the implementation of the required methods in the new shape class.
*/
