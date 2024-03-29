class Monster {
  // A method named "constructor" defines the class’s constructor function.
  constructor(name, health) {
    this.name = name;
    this.pHealth = health;
  }

  // An identifier followed by an argument list and body defines a
  // method. A “method” here is simply a function property on some
  // object.
  attack(target) {
    console.log('The monster attacks ' + target);
  }

  // The contextual keyword "get" followed by an identifier and
  // a curly body defines a getter in the same way that "get"
  // defines one in an object literal.
  get isAlive() {
    return this.pHealth > 0;
  }

  // Likewise, "set" can be used to define setters.
  set health(value) {
    if (value < 0) {
      throw new Error('Health must be non-negative.')
    }
    this.pHealth = value
  }
}

var monster = new Monster("foo", 100);
monster.attack("bar");
monster.health = 80;
