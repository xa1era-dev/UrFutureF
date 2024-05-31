import ApiService from "./api-service";

export default class ProfessionsApi extends ApiService {
  get professions() {
    return this._load({url: 'api/v1/professions/all'})
      .then(ApiService.parseResponse);
  }
}