class Person {
    constructor(id:number, private name:string,  ssn:string, email:string){
        this.id = id;
        this.ssn = ssn;
        this.email = email;
    }
    //readonly property can be access but not modified
    public readonly id:number;
    //private property can only be accessed inside this class
    private ssn:string;
    //protected property can be accessed in this class and subclass
    protected email:string;
}

let Alan = new Person(1, "Alan Sanchez", "111-11-1111", "sanchez1.alan1@gmail.com")
console.log(Alan.id); // 1