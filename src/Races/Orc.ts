import Race from './Race';

export default class Orc extends Race {
  static counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.counter += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return Orc.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}