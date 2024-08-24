// Importing the logging functions from a shared module
import { logMessage, logError } from "../common/logger.js";

// Base Bird class that all birds inherit from
class Bird {
  fly() {
    // If a bird cannot fly, this error is thrown by default
    throw new Error('This bird cannot fly');
  }

  swim() {
    // If a bird cannot swim, this error is thrown by default
    throw new Error('This bird cannot swim');
  }
}

// Duck: A bird that can both fly and swim
class Duck extends Bird {
  fly() {
    logMessage('I can fly');
  }

  swim() {
    logMessage('I can swim');
  }

  quack() {
    logMessage('I can quack');
  }
}

// Penguin: A bird that can swim but cannot fly
class Penguin extends Bird {
  swim() {
    logMessage('I can swim');
  }

  // No need to override the fly method since the base class already handles it
}

// Sparrow: A bird that can only fly
class Sparrow extends Bird {
  fly() {
    logMessage('I can fly high in the sky');
  }

  // No need to override the swim method since the base class already handles it
}

// Swan: A bird that can swim but cannot fly
class Swan extends Bird {
  swim() {
    logMessage('I can swim gracefully');
  }

  // No need to override the fly method since the base class already handles it
}

// Functions to make a bird fly or swim, leveraging polymorphism
function makeBirdFly(bird) {
  try {
    bird.fly(); // The correct behavior will be invoked based on the bird instance
  } catch (error) {
    logError(error.message); // Log the error message if the bird cannot fly
  }
}

function makeBirdSwim(bird) {
  try {
    bird.swim(); // The correct behavior will be invoked based on the bird instance
  } catch (error) {
    logError(error.message); // Log the error message if the bird cannot swim
  }
}

// Creating instances of all four birds
const duck = new Duck();
const penguin = new Penguin();
const sparrow = new Sparrow();
const swan = new Swan();

// Log the behavior of the birds
logMessage("Duck:");
makeBirdFly(duck);    // Output: "I can fly"
makeBirdSwim(duck);   // Output: "I can swim"

logMessage("\nPenguin:");
makeBirdFly(penguin); // Error: "This bird cannot fly"
makeBirdSwim(penguin); // Output: "I can swim"

logMessage("\nSparrow:");
makeBirdFly(sparrow); // Output: "I can fly high in the sky"
makeBirdSwim(sparrow); // Error: "This bird cannot swim"

logMessage("\nSwan:");
makeBirdFly(swan); // Error: "This bird cannot fly"
makeBirdSwim(swan); // Output: "I can swim gracefully"


/*
Liskov Substitution Principle (LSP) Compliance:

1. Each bird class can substitute the Bird base class without breaking the program's behavior.
2. Duck implements both flying and swimming behaviors as expected.
3. Penguin implements only swimming behavior. Attempting to make a penguin fly results in an error, maintaining logical correctness.
4. Sparrow implements only flying behavior. Attempting to make a sparrow swim results in an error, maintaining logical correctness.
5. Swan implements only swimming behavior. Attempting to make a swan fly results in an error, maintaining logical correctness.
6. The functions makeBirdFly and makeBirdSwim rely entirely on polymorphism, allowing each bird instance to behave as expected without the need for if-else checks or type checks.
*/
