class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatCounter = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.eatCounter += 1;
    if (this.eatCounter > 2) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
