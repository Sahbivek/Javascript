class Client{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname= lastname;
    }
    getFullName(){
     let Fullname=this.firstname+' '+this.lastname;
     return Fullname;
    }
    
}
let Client1=new Client("Bivek","Sah");
//console.log(Client1);
console.log(Client1.getFullName());