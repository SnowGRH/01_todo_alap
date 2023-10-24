import {leiro} from "./adatok.js";
class Model{
    #leiro = {};
    constructor() {
      this.#leiro = leiro;
    }
    get leiro() {
      return { ...this.#leiro };
    }
  
}
export default Model;