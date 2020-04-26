export default class Containment {

  constructor() {
    this.containment = [["Area", "Areas"], ["Subject", "Subjects"], ["Item", "Items"]];
  }

  typeSingular = depth => {
    let x = this.containment[depth];
    return x ? x[0] : null;
  }

  typePlural = depth => {
    let x = this.containment[depth];
    return x ? x[1] : null;
  }

  contains = depth => {
    let x = this.containment[depth + 1];
    return x ? x[1] : null;
  };

}