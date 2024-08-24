// Importing the logging function from a shared module
import { logMessage, logError } from "../common/logger.js";

// Abstraction for payment processing
// This abstract class defines the contract that all payment processors must follow.
class PaymentProcessor {
  processPayment(amount) {
    throw new Error('Method not implemented'); // Abstract method to be implemented by subclasses
  }
}

// Concrete implementation of PaymentProcessor for PayPal
// This class provides specific logic for processing payments through PayPal.
class PayPalProcessor extends PaymentProcessor {
  processPayment(amount) {
    // Simulate PayPal payment processing
    logMessage(`Processing $${amount} payment through PayPal.`);
  }
}

// Concrete implementation of PaymentProcessor for Stripe
// This class provides specific logic for processing payments through Stripe.
class StripeProcessor extends PaymentProcessor {
  processPayment(amount) {
    // Simulate Stripe payment processing
    logMessage(`Processing $${amount} payment through Stripe.`);
  }
}

// Concrete implementation of PaymentProcessor for Square
// This class provides specific logic for processing payments through Square.
class SquareProcessor extends PaymentProcessor {
  processPayment(amount) {
    // Simulate Square payment processing
    logMessage(`Processing $${amount} payment through Square.`);
  }
}

// High-level module that uses the PaymentProcessor abstraction
// This class depends on the PaymentProcessor interface, not on any concrete implementations.
class PaymentService {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor; // Dependency injection
  }

  makePayment(amount) {
    try {
      this.paymentProcessor.processPayment(amount); // Delegates payment processing to the injected processor
    } catch (error) {
      logError(`Failed to process payment: ${error.message}`); // Handles errors and logs them
    }
  }
}

// Usage examples

// Create instances of concrete payment processors
const paypalProcessor = new PayPalProcessor();
const stripeProcessor = new StripeProcessor();
const squareProcessor = new SquareProcessor();

// Inject different payment processors into PaymentService
const paymentServiceWithPayPal = new PaymentService(paypalProcessor);
paymentServiceWithPayPal.makePayment(100); // Output: Processing $100 payment through PayPal.

const paymentServiceWithStripe = new PaymentService(stripeProcessor);
paymentServiceWithStripe.makePayment(200); // Output: Processing $200 payment through Stripe.

const paymentServiceWithSquare = new PaymentService(squareProcessor);
paymentServiceWithSquare.makePayment(300); // Output: Processing $300 payment through Square.

// Demonstrate error handling with a faulty processor
const faultyProcessor = {
  processPayment(amount) {
    throw new Error('Simulated error'); // Simulate an error during payment processing
  }
};

const paymentServiceWithFaultyProcessor = new PaymentService(faultyProcessor);
paymentServiceWithFaultyProcessor.makePayment(400); // Output: Failed to process payment: Simulated error

// Explanation of Compliance with Dependency Inversion Principle

// 1. **Abstraction (Interface)**:
//    - The `PaymentProcessor` class defines the contract for payment processing. It is an abstraction that does not depend on specific implementations.
//    - Concrete classes (`PayPalProcessor`, `StripeProcessor`, `SquareProcessor`) implement this abstraction, allowing the system to adhere to the principle that abstractions should not depend on details.

// 2. **Dependency Injection**:
//    - The `PaymentService` class does not depend on specific payment processors. Instead, it depends on the `PaymentProcessor` abstraction.
//    - Payment processors are injected into `PaymentService` through its constructor, allowing different processors to be used without modifying `PaymentService`.

// 3. **High-Level Module Independence**:
//    - `PaymentService` is a high-level module that delegates payment processing to the injected `PaymentProcessor`. It is not concerned with the specifics of payment processing, which aligns with the principle that high-level modules should not depend on low-level modules but on abstractions.

// 4. **Error Handling**:
//    - The `makePayment` method in `PaymentService` includes error handling, demonstrating how the system can handle failures gracefully and log errors appropriately.

// Design Patterns Used

// 1. **Strategy Pattern**:
//    - The `PaymentProcessor` abstraction and its concrete implementations (e.g., `PayPalProcessor`, `StripeProcessor`) exemplify the Strategy Pattern. The `PaymentService` uses different strategies (payment processors) to handle payments, which can be swapped at runtime.

// 2. **Dependency Injection**:
//    - The `PaymentService` class uses constructor injection to receive its dependency, promoting loose coupling and enhancing testability by allowing different implementations to be injected.
