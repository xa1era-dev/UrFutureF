import { person } from '../mock/person';

export default class PersonModel {
  #person = person;

  get person() {
    return this.#person;
  }
}
