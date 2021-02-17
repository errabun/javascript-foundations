class Magician {
  constructor(magicianObj) {
    this.name = `The Great ${magicianObj.name}`;
    this.assistant = magicianObj.assistant;
    this.confidencePercentage = 10;
    if (magicianObj.clothing === undefined) {
      this.favoriteAccessory = 'top hat';
    } else {
      this.favoriteAccessory = magicianObj.clothing;
    }
  }
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }
  }
}
module.exports = Magician;
