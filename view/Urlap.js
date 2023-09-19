class Urlap{
    #adat = {};
    constructor(adat,elem){
        this.#adat = adat;
        this.elem =elem;
        this.elem.html("<Form>");
        this.formelem = this.elem.children("form");
        this.#Oszeallitas();
        this.SubmitElem = this.formelem.children("div").children("#submit");
        this.SubmitElem.on("click",(event)=>{
            event.preventDefault();
            this.#adatGyujt();
            this.#esemenyTrigger("ujAdatHozzadas");
        })
    }
    #adatGyujt(){
        this.#adat = $("input:text1").val();
        this.#adat = $("input:text2").val();
        console.log(this.#adat);

    }
    #Oszeallitas(){
        let txt = `<input type="text1" id="teve" name="teve"><br><br>`;
        txt += `<input type="text" id="hat" name="hat" ><br><br>`;
        txt += `<input type="submit" value="Submit"><br><br>`;
        this.formelem.append(txt);
        

    }
    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,{detail:this.#adat});
        window.dispatchEvent(esemenyem);
    }
}
export default Urlap