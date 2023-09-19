import Megjelenites from "../view/Megjelenit.js";
import Model from "../model/model.js";
import Urlap from "../view/Urlap.js";

class Controller {
  constructor() {
    const TAROLO = $(".tarolo");
    const MODEL = new Model();
    new Urlap({ tevekenyseg: "", hatarido: "" },$(".ujadat"));
    new Megjelenites(MODEL.getlista(), TAROLO);
    $(window).on("ujAdatHozzadas", (event) => {

      MODEL.torol(event.detail);
      TAROLO.empty();
    });
    $(window).on("törlés", function (event) {

      MODEL.torol(event.detail);
      TAROLO.empty();
      new Megjelenites(MODEL.getlista(), TAROLO);
    });
    $(window).on("kesz", (event) => {
      MODEL.kesz(event.detail);
      TAROLO.empty();
      new Megjelenites(MODEL.getlista(), TAROLO);
    });
    $(window).on("megse", (event) => {
      MODEL.megse(event.detail);
      TAROLO.empty();
      new Megjelenites(MODEL.getlista(), TAROLO);
    });
  }
}
export default Controller;
