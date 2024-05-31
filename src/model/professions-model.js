import { professions } from "../mock/professions";

export default class ProfessionsModel {
  #professions = professions;

  get professions() {
    return this.#professions;
  }
}
