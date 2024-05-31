import { professions } from "../mock/professions";

export default class ProfessionsModel {
    #professions = [];
    #professionsApi = null;

    constructor(professionsApi) {
        this.#professionsApi = professionsApi;
    }

    get professions() {
        return this.#professions;
    }
    
    async init() {
        try {
        this.#professions = await this.#professionsApi.professions;
        } catch(err) {
        this.#professions = [];
        }
    }
}
