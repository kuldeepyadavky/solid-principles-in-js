# SOLID Principles in JavaScript

Welcome to the SOLID Principles repository! This project demonstrates the application of SOLID principles in JavaScript through various code examples. SOLID principles help create software designs that are easy to understand, maintain, and extend.

## Project Structure

The repository is organized into directories for each SOLID principle, with examples demonstrating various concepts. Below is a brief overview of the structure and the files included:

### 1. Single Responsibility Principle (SRP)

**Directory:** `single-resp`

- **File:** `calorie-tracker.js`
  - **Description:** Demonstrates the Single Responsibility Principle by separating the responsibility of tracking calories and logging messages.

### 2. Open/Closed Principle (OCP)

**Directory:** `open-closed`

- **File:** `print-quiz.js`
  - **Description:** Illustrates the Open/Closed Principle by showing how to extend functionality for different types of quiz questions without modifying existing code.

### 3. Liskov Substitution Principle (LSP)

**Directory:** `liskov-substitution`

- **File:** `birds.js`
  - **Description:** Provides an example of the Liskov Substitution Principle by ensuring subclasses (e.g., different types of birds) can be used interchangeably with their base class.
  
- **File:** `shapes.js`
  - **Description:** Demonstrates the Liskov Substitution Principle with shape classes ensuring that derived classes can be substituted without altering the correctness of the program.

### 4. Interface Segregation Principle (ISP)

**Directory:** `interface-segregation`

- **File:** `entity-mixins.js`
  - **Description:** Shows how to use mixins to adhere to the Interface Segregation Principle by creating modular and focused interfaces for different capabilities.
  
- **File:** `entity-object-assign-mixin.js`
  - **Description:** Demonstrates the use of `Object.assign` for creating mixins, illustrating how to adhere to the Interface Segregation Principle with a different approach.

### 5. Dependency Inversion Principle (DIP)

**Directory:** `dependency-inversion`

- **File:** `payment-processor.js`
  - **Description:** Demonstrates the Dependency Inversion Principle by designing a payment processing system where high-level modules depend on abstractions rather than concrete implementations.

### Common Utilities

**Directory:** `common`

- **File:** `logger.js`
  - **Description:** Contains utility functions for logging messages and errors used throughout the project.

### Setup and Usage

To run the examples, follow these steps:

1. **Clone the Repository**

   ```bash
    git clone https://github.com/kuldeepyadavky/solid-principles-in-js.git
  cd solid-principles-in-js

2. **Run Examples**

   ```bash
    node single-resp/calorie-tracker.js
    node open-closed/print-quiz.js
    node liskov-substitution/birds.js
    node liskov-substitution/shapes.js
    node interface-segregation/entity-mixins.js
    node interface-segregation/entity-object-assign-mixin.js
    node dependency-inversion/payment-processor.js

## License

This project is licensed under the MIT License.