import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType : EnergyType = 'mana';
  static counterArchetypes = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.counterArchetypes += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.counterArchetypes;
  }
}

export default Mage;