// Importing the logging function from a shared module
import { logMessage } from "../common/logger.js";

// Class representing a Boolean question type (e.g., True/False questions)
class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  // Method to print the choices for a Boolean question
  printQuestionChoices() {
    logMessage('1. True');
    logMessage('2. False');
  }
}

// Class representing a multiple-choice question type
class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  // Method to print the options for a multiple-choice question
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      logMessage(`${index + 1}. ${option}`);
    });
  }
}

// Class representing a text-based question where users provide written answers
class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  // Method to print the prompt for a text-based question
  printQuestionChoices() {
    logMessage('Ans: _____________');
  }
}

// Class representing a range-based question type
class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  // Method to print the range choices for a question
  printQuestionChoices() {
    logMessage('1. Min 60');
    logMessage('2. Min 80');
    logMessage('3. Min 100');
    logMessage('4. Min 140');
  }
}

// Creating an array of different question types
const questions = [
  new BooleanQuestion('Is learning SOLID Principles useful?'),
  new MultipleChoiceQuestion(
    'What is your favourite language?',
    ['CSS', 'HTML', 'JS', 'PYTHON']
  ),
  new RangeQuestion('What is the speed limit in your city?'),
  new TextQuestion('What is the best project you have worked on?')
];

// Function to print the quiz with questions and their choices
function printQuiz(questions) {
  questions.forEach(question => {
    logMessage(question.description);
    question.printQuestionChoices();
    logMessage(''); // Adds a blank line between questions
  });
}

// Printing the quiz
printQuiz(questions);

/*
Explanation of the Open/Closed Principle (OCP):

1. The Open/Closed Principle states that software entities (classes, modules, functions) should be open for extension but closed for modification.

2. In this example, the code is designed to be easily extendable without needing to modify existing code:
   - The `printQuiz` function works with any question type that has a `printQuestionChoices` method.
   - The classes like `BooleanQuestion`, `MultipleChoiceQuestion`, `TextQuestion`, and `RangeQuestion` all follow a common interface by implementing a `printQuestionChoices` method.

3. If a new type of question is needed (e.g., a rating scale), you can create a new class with the required `printQuestionChoices` method without altering the existing code.

4. This design ensures that the code is extensible (adding new question types) while being closed to modifications in existing classes, adhering to the OCP.
*/
