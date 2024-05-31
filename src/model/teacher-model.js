import { teachers } from '../mock/teachers';

export default class TeacherModel {
  #teachers = [];
  #teachersApi = null;

  constructor(teachersApi) {
    this.#teachersApi = teachersApi;
  }

  get teachers() {
    return this.#teachers;
  }
  
  async init() {
    try {
      this.#teachers = await this.#teachersApi.teachers;
    } catch(err) {
      this.#teachers = [];
    }
  }

  getTeacherById(id) {
    return this.#teachers.find((teacher) => teacher.id === id);
  }
}
