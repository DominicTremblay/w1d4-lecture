function char() {
  this.name = 'Mario';
  this.powers = ['Jump'];
  this.hat = 'Cap';
}

const mario = new char();

// Adding a new method addPower to char
char.prototype.addPower = function (power) {
  this.powers.push(power);
};

// Printing the property
// We get also the method addPower to be printed out!
for (let property in mario) {
  console.log(property);
}

// Using `hasOwnProperty` ensures we print only the properties
for (let property in mario) {
  if (mario.hasOwnProperty(property)) {
    console.log(property);
  }
}
