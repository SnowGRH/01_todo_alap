import { TODOLIST2 } from "../model/adatok.js";
class Model{
    #list=[];
    constructor(){
        this.#list = TODOLIST2;
    }
    getlista(){
        return this.#list;
    }
    torol(index){
        this.#list.splice(index,1);
    }
   kesz(index){
        this.#list[index].kesz = true;
        console.log(this.#list[index]);
    }
    megse(index){
        this.#list[index].kesz = false;
        console.log(this.#list[index]);
    }
}
export default Model;