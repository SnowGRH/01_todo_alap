import Megjelenites from "../view/Megjelenit.js";
import Model from "../model/model.js";

class Controller {
  constructor() {
    const TAROLO = $(".tarolo");
    const MODEL = new Model();
    new Megjelenites(MODEL.getlista(), TAROLO);
    $(window).on("törlés", function (event) {
      console.log(event.detail);
      MODEL.torol(event.detail);
      TAROLO.empty();
      new Megjelenites(MODEL.getlista(), TAROLO);
    });
    $(window).on("kesz", function (event) {
        MODEL.kesz(event.detail);
        TAROLO.empty();
        new Megjelenites(MODEL.getlista(), TAROLO);
    });
    $(window).on("megse", function (event) {
        MODEL.megse(event.detail);
        TAROLO.empty();
        new Megjelenites(MODEL.getlista(), TAROLO);
    });
  }
}
export default Controller;
