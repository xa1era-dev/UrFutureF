import { disciplines } from "../mock/disciplines";

export default class DisciplinesModel {
  #disciplines = disciplines;

  get disciplines() {
    return this.#disciplines;
  }
}
