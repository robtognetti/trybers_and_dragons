import Race from './Race';

export default class Elf extends Race {
  static counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.counter += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}