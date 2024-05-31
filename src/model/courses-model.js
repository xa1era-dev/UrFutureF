import { myCourses } from "../mock/courses";

export default class CoursesModel {
  #courses = [];
  #coursesApi = null;

  constructor(coursesApi) {
    this.#coursesApi = coursesApi;
  }

  get courses() {
    return this.#courses;
  }
  
  async init() {
    try {
      this.#courses = await this.#coursesApi.courses;
    } catch(err) {
      this.#courses = [];
    }
  }
}
