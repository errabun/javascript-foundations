var Skier = require('./Skier');

class Lift {
  constructor (numRiders) {
    this.inService = true;
    this.limit = numRiders;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, hasLiftTicket) {
    var newSkier = new Skier(name, true);
    if (this.skiers.length < this.limit && hasLiftTicket) {
      this.skiers.push(newSkier);
    } else if (!hasLiftTicket) {
      return `Sorry, ${newSkier.name}. You need a lift ticket!`
    } else {
      return `Sorry, ${newSkier.name}. Please wait for the next lift!`
    }
  }
  startLift() {
    if (this.limit === this.skiers.length) {
    this.safetyBar = 'down';
    } else if ((this.limit - this.skiers.length) === 1) {
    return `We still need ${this.limit - this.skiers.length} more skier!`
    } else {
    return `We still need ${this.limit - this.skiers.length} more skiers!`
    }
  }
}

module.exports = Lift;
