import { v4 as v4uuid } from 'uuid';

export class UserId {
  private value: string;

  constructor() {
    this.value = v4uuid();
  }

}