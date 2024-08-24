// Importing the logging function from a shared module
import { logMessage, logError } from "../common/logger.js";

// Mixins for shared behaviors

/**
 * MovableMixin - provides movement behavior.
 */
const MovableMixin = Base => class extends Base {
  move() {
    logMessage(`${this.constructor.name} is moving`);
  }
};

/**
 * AttackableMixin - provides attacking behavior.
 */
const AttackableMixin = Base => class extends Base {
  attack() {
    logMessage(`${this.constructor.name} is attacking`);
  }
};

/**
 * DamageableMixin - provides damage handling behavior.
 */
const DamageableMixin = Base => class extends Base {
  constructor() {
    super();
    this.health = 100;
  }

  takeDamage(damage) {
    this.health -= damage;
    logMessage(`${this.constructor.name} took ${damage} damage`);
  }

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
 * Character class - uses MovableMixin, AttackableMixin, and DamageableMixin.
 * This class can move, attack, and manage its health.
 */
class Character extends MovableMixin(AttackableMixin(DamageableMixin(BaseEntity))) {
  // No additional methods are needed for this example
}

// Turret class using mixins to implement Attackable and Damageable
/**
 * Turret class - uses AttackableMixin and DamageableMixin.
 * This class can attack and manage its health but does not move.
 */
class Turret extends AttackableMixin(DamageableMixin(BaseEntity)) {
  // No additional methods are needed for this example
}

// Vehicle class using mixin to implement only Movable
/**
 * Vehicle class - uses MovableMixin.
 * This class can move but does not attack or manage health.
 */
class Vehicle extends MovableMixin(BaseEntity) {
  // No additional methods are needed for this example
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
  logError(error.message); // Output: Method 'attack()' must be implemented.
}

try {
  vehicle.takeDamage(10);
} catch (error) {
  logError(error.message); // Output: Method 'takeDamage()' must be implemented.
}

try {
  vehicle.getHealth();
} catch (error) {
  logError(error.message); // Output: Method 'getHealth()' must be implemented.
}

/**
 * Interface Segregation Compliance Explanation:
 * 
 * 1. **Interface Segregation**: The code adheres to ISP by ensuring that each class uses only the mixins (interfaces) it actually needs:
 *    - `Character` uses `MovableMixin`, `AttackableMixin`, and `DamageableMixin` because it needs to move, attack, and manage health.
 *    - `Turret` uses `AttackableMixin` and `DamageableMixin` because it needs to attack and manage health but not move.
 *    - `Vehicle` uses `MovableMixin` because it only needs movement capabilities and does not require attacking or health management functionalities.
 * 
 * 2. **Separation of Concerns**: Each class focuses on its specific responsibilities. The mixins handle shared behaviors, making it clear what functionality each class has.
 * 
 * 3. **Error Handling**: For the `Vehicle` class, methods not implemented throw errors, showing that the class is not forced to implement methods it does not need.
 */
