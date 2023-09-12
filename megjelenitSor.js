class Megjelenitsor{
    #obj ={}
    constructor(obj,elem){
        this.#obj=obj;
        this.elem =elem;
        this.#sor();
        this.sorElem = this.elem.children("tr:last-child");
        this.KeszElem = this.sorElem.children("td").children(".kesz");
        this.MegseElem = this.sorElem.children("td").children(".megse");
        this.MegseElem.css("display", "none");
        this.RemoveElem = this.sorElem.children("td").children(".remove")
        console.log(this.KeszElem);
        this.KeszElem.on("click",()=>{
            this.sorElem.css("background-color","green");
            this.MegseElem.css("display", "block");
            this.KeszElem.css("display", "none");
        })
        this.MegseElem.on("click",()=>{
            this.sorElem.css("background-color","white");
            this.KeszElem.css("display", "block");
            this.MegseElem.css("display", "none");
        })
        this.RemoveElem.on("click",()=>{
            this.sorElem.remove();
        })
    }
    #sor(){
       let txt = "<tr>";
        for (const key in this.#obj) {
            txt += `<td>${this.#obj[key]}</td>`;
            
        }
        txt += `<td><button type="button" class="kesz">✅</button><button type="button" class="megse">❌</button></td><td><button type="button" class="remove">Törlés</button></td></tr>`;
        txt += "</tr>";
        this.elem.append(txt);
    }
}
export default Megjelenitsor