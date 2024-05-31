import ApiService from "./api-service";

export default class DisciplinesApi extends ApiService {
  get disciplines() {
    return this._load({url: 'api/v1/discipline/all'})
      .then(ApiService.parseResponse);
  }
}