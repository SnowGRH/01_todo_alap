class Dataservice{
  #list={};
    getdata(vegpont,callback,callerror){
        axios.get(vegpont)
      .then(function (response) {
        // handle success
         console.log("REsponse",response);
        console.log("Data", response.data);
        console.log("Data",response.data.nevek);
        console.log("status",response.status);
        console.log("text",response.statusText); 
        callback(response.data.todo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
    getlista(){
      return this.response.data;
  }
    torol(index){
      response.data.splice(index,1);
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
    export default Dataservice