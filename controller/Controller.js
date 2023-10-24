import Megjelenites from "../view/Megjelenit.js";
import Urlap from "../view/Urlap.js";
import Model from "../model/model.js";
import Dataservice from "../model/Dataservice.js";

class Controller {
  constructor() {
    const MODELEK = new Model();
    this.Dataservice = new Dataservice();

    new Urlap(MODELEK.leiro,$(".ujadat"));
    this.Dataservice.getdata("model/adat.json",this.Megjelenit);


    $(window).on("ujAdatHozzadas", (event) => {

      this.Dataservice.torol(event.detail);
      TAROLO.empty();
    });
    $(window).on("törlés", function (event) {

      this.Dataservice.getdata.torol(event.detail);
      TAROLO.empty();
      new Megjelenites(this.Dataservice.getdata("model/adat.json"), TAROLO);
    });
    $(window).on("kesz", (event) => {
      this.Dataservice.kesz(event.detail);
      TAROLO.empty();
      new Megjelenites(this.Dataservice.getdata("model/adat.json"), TAROLO);
    });
    $(window).on("megse", (event) => {
      this.Dataservice.megse(event.detail);
      TAROLO.empty();
      new Megjelenites(this.Dataservice.getdata("model/adat.json"), TAROLO);
    });
  }
  Megjelenit(lista){
    new Megjelenites(lista,$(".tarolo"));
  }
}
export default Controller;
