import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static counter = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.counter += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return Dwarf.counter;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }
}