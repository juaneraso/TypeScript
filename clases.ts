// class Avenger10{
//    name : string 
//    powerScore: number
//   //  wonBattles : number = 0

//   constructor (name:string, powerScore:number){
//     this.name = name ;
//     this.powerScore = powerScore;
//   }

//   get fullName(){
//     return `${this.name}, de poder ${this.powerScore}`
//   }

//   changeName(name :string){
//     this.name = name;

//   }
  
// }

// const vengador = new Avenger10('spiderman',80);

// console.log(vengador);

// vengador.changeName("IronMan");
// console.log(vengador);


interface Avenger3 {
  name2:string;
  powerScore: number ;
  wonBattles : number  ;
  // age?: number ;
  // battle: (enemy: Avenger, win: boolean) =>void;

}

class AvengerClass12 implements Avenger3{

   name2:string;
   powerScore:number;
   wonBattles:number;
  //  wonBattles: number;    
  //  age :number=20;

 constructor ( name:string, powerScore:number,wonbattles:number){
   this.name2 = name ;
   this.powerScore = powerScore;
   this.wonBattles = wonbattles;
  //  this.wonBattles = wonBattles;
 }

 get fullName(){
   return `${this.name2}, de poder ${this.powerScore}`
 }

}

const vengador5 = new AvengerClass12('spiderman',10,2);

console.log(vengador5);
