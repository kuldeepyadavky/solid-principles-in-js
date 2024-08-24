// Importing the logging function from a shared module
// Demonstrates separation of concerns; logging is not handled by the CalorieTaker class
import { logMessage } from '../common/logger.js';

// Class responsible for tracking calorie intake
class CalorieTaker {

  // Constructor initializes the maximum allowed calories and sets the current calories to 0
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  // Method to track calories consumed
  // Adds calorie count to current calories and checks if it exceeds the maximum allowed
  trackCalories = (calorieCount) => {
    this.currentCalories += calorieCount;
    // If the current calorie count exceeds the maxCalories limit, log a warning message
    if (this.currentCalories > this.maxCalories) {
      logMessage(`Maximum calorie count of ${this.maxCalories} exceeded! -> ${this.currentCalories}`);
    }
  }
}

// Creating an instance of CalorieTaker with a limit of 2000 calories
const calorieTracker = new CalorieTaker(2000);
// Tracking calories for various food items
calorieTracker.trackCalories(200);  // Consumes 200 calories
calorieTracker.trackCalories(1000); // Consumes 1000 calories
calorieTracker.trackCalories(1000); // Consumes another 1000 calories, triggering the limit warning

/*
Explanation of Single Responsibility Principle (SRP):
1. The CalorieTaker class is responsible only for tracking calorie intake. 
   It does not handle logging or any other unrelated functionality.
   
2. The logging responsibility is separated into a distinct function (logMessage), 
   keeping the class focused solely on calorie tracking.

3. This separation makes the code easier to maintain and extend. 
   If the logging logic needs to change, it can be updated independently 
   without affecting the CalorieTaker class.
*/
