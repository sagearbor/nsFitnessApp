export class User2 {
  username: string;
  emailPrimary: string;
  emailSecondary: string;
  name: string;
  
    constructor( id: string, name: string, groups: string ) { 
        this.cId = id;
        this.cName = name;
    }

    getMyFields(){
        return this.cId + " " + this.cName;
    }
}

 var environments = new Environment('a','b');
 console.log(environments.getMyFields()); // will print a b


export class User {
  emailPrimary: string;
  emailSecondary: string;
  name: string;
  groups: string 
}
