class Megjelenites{

    constructor(TODOLIST_ALAP,TODOLIST_ALAP2){
    const TAROLO = $(".tarolo");
    let txt = "<table>";
    for (let i = 0; i < TODOLIST_ALAP.length; i++) {
        txt += `<tr><td class="table table-hover" >${TODOLIST_ALAP[i]}</td><td class="table table-hover" >${TODOLIST_ALAP2[i].hatarido}</td></tr>`;
        
    }
    txt += "</table>";
    TAROLO.html(txt);
    }
}
export default Megjelenites;