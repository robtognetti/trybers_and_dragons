import Race from './Race';

export default class Halfling extends Race {
  static counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.counter += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}