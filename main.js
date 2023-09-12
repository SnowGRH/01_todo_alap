import Megjelenites  from "./Megjelenit.js";
import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function() {
    const TAROLO = $(".tarolo");
   new Megjelenites(TODOLIST2,TAROLO);
})