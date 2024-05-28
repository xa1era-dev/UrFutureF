import { teachers } from '../mock/teachers';

export default class TeacherModel {
  #teachers = teachers;

  get teachers() {
    return this.#teachers;
  }

  getTeacherById(id) {
    return this.#teachers.find((teacher) => teacher.id === id);
  }
}
