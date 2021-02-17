class Pirate {
  constructor(name, job) {
    this.name = name;
    this.cursed = false;
    this.booty = 0;
    this.robShipCounter = 0;
    if (job === undefined) {
      this.job = 'scallywag';
    } else {
      this.job = job;
    }
  }
  robShip() {
    this.robShipCounter++;
    this.booty += 100;
    if (this.robShipCounter >= 5) {
      this.cursed = true;
      this.booty = 500;
      return 'ARG! I\'ve been cursed!';
    }
    return 'YAARRR!';
  }
  liftCurse() {
    if (this.booty > 300) {
      this.booty -= 300;
      this.cursed = false;
      return 'Your curse has been lifted!';
    } else if (!this.cursed) {
      return 'You don\'t need to lift a curse!';
    }
  }
}

module.exports = Pirate;
