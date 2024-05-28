import { myCourses } from "../mock/courses";

export default class CoursesModel {
  #courses = myCourses;

  get courses() {
    return this.#courses;
  }
}
