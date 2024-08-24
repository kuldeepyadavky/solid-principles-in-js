// Importing the logging function from a shared module
import { logMessage, logError } from "../common/logger.js";

// Mixin functions

/**
 * MovableMixin - provides movement behavior.
 */
const MovableMixin = {
  move() {
    logMessage(`${this.constructor.name} is moving`);
  }
};

/**
 * AttackableMixin - provides attacking behavior.
 */
const AttackableMixin = {
  attack() {
    logMessage(`${this.constructor.name} is attacking`);
  }
};

/**
 * DamageableMixin - provides damage handling behavior.
 */
const DamageableMixin = {
  takeDamage(damage) {
    this.health -= damage;
    logMessage(`${this.constructor.name} took ${damage} damage`);
  },

  getHealth() {
    return this.health;
  }
};

// Base class for common properties
/**
 * BaseEntity class - provides common properties like health.
 */
class BaseEntity {
  constructor() {
    this.health = 100;
  }
}

// Character class using mixins to implement Movable, Attackable, and Damageable
/**
 * Character class - mixes in MovableMixin, AttackableMixin, and DamageableMixin.
 * This class can move, attack, and manage its health.
 */
class Character extends BaseEntity {
  constructor() {
    super();
    Object.assign(this, MovableMixin, AttackableMixin, DamageableMixin);
  }
}

// Turret class using mixins to implement Attackable and Damageable
/**
 * Turret class - mixes in AttackableMixin and DamageableMixin.
 * This class can attack and manage its health but does not move.
 */
class Turret extends BaseEntity {
  constructor() {
    super();
    Object.assign(this, AttackableMixin, DamageableMixin);
  }
}

// Vehicle class using mixin to implement only Movable
/**
 * Vehicle class - mixes in MovableMixin.
 * This class can move but does not attack or manage health.
 */
class Vehicle extends BaseEntity {
  constructor() {
    super();
    Object.assign(this, MovableMixin);
  }
}

// Testing the implementation

// Testing the Character
const character = new Character();
character.move();           // Output: Character is moving
character.attack();         // Output: Character is attacking
character.takeDamage(20);   // Output: Character took 20 damage
logMessage(`Character health: ${character.getHealth()}`); // Output: Character health: 80

// Testing the Turret
const turret = new Turret();
turret.attack();           // Output: Turret is attacking
turret.takeDamage(30);     // Output: Turret took 30 damage
logMessage(`Turret health: ${turret.getHealth()}`); // Output: Turret health: 70

// Testing the Vehicle
const vehicle = new Vehicle();
vehicle.move();           // Output: Vehicle is moving

// Demonstrate error handling for unimplemented methods in Vehicle
try {
  vehicle.attack();
} catch (error) {
  logError(error.message); // Output: TypeError: vehicle.attack is not a function
}

try {
  vehicle.takeDamage(10);
} catch (error) {
  logError(error.message); // Output: TypeError: vehicle.takeDamage is not a function
}

try {
  vehicle.getHealth();
} catch (error) {
  logError(error.message); // Output: TypeError: vehicle.getHealth is not a function
}

/**
 * Interface Segregation Compliance Explanation:
 * 
 * 1. **Interface Segregation**: The code adheres to ISP by ensuring that each class uses only the mixins (interfaces) it actually needs:
 *    - `Character` mixes in `MovableMixin`, `AttackableMixin`, and `DamageableMixin` because it needs to move, attack, and manage health.
 *    - `Turret` mixes in `AttackableMixin` and `DamageableMixin` because it needs to attack and manage health but not move.
 *    - `Vehicle` mixes in `MovableMixin` because it only needs movement capabilities and does not require attacking or health management functionalities.
 * 
 * 2. **Separation of Concerns**: Each class focuses on its specific responsibilities. The mixins handle shared behaviors, making it clear what functionality each class has.
 * 
 * 3. **Error Handling**: For the `Vehicle` class, methods not implemented throw errors, showing that the class is not forced to implement methods it does not need.
 * 
 * **Why `Object.assign()` is Used**:
 * - `Object.assign()` is used here to mix in properties and methods from the mixins into the class instances. It allows us to compose multiple behaviors into a single class.
 * 
 * **Why `Object.assign()` Might Not Always Be Ideal**:
 * - **Method Overwrites**: `Object.assign()` can overwrite methods if multiple mixins define the same method, leading to unintended behavior.
 * - **Prototype Chain**: It does not handle the prototype chain effectively, which can be problematic if you need to use prototype-based inheritance.
 * - **Lack of Encapsulation**: It mixes methods directly into instances rather than using class inheritance or more structured mixin patterns, which can lead to less clear encapsulation and separation of concerns.
 */
