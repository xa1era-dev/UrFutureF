import ApiService from "./api-service";
export default class CoursesApi extends ApiService {
  get courses() {
    return this._load({url: 'api/v1/course/all'})
      .then(ApiService.parseResponse);
  }
}
