import { disciplines } from "../mock/disciplines";

export default class DisciplinesModel {
  #disciplines = [];
  #disciplinesApi = null;

  constructor(disciplinesApi) {
    this.#disciplinesApi = disciplinesApi;
  }

  get disciplines() {
    return this.#disciplines;
  }
  
  async init() {
    try {
      this.#disciplines = await this.#disciplinesApi.disciplines;
    } catch(err) {
      this.#disciplines = [];
    }
  }
}
