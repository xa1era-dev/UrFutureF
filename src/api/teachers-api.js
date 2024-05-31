import ApiService from "./api-service";

export default class TeachersApi extends ApiService {
  get teachers() {
    return this._load({url: 'api/v1/schedule/build/teachers'})
      .then(ApiService.parseResponse);
  }
}