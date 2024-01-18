// class Avenger{
//    readonly name : string 
//    powerScore: number
//    wonBattles : number = 0

//   constructor (name:string, powerScore:number){
//     this.name = name ;
//     this.powerScore = powerScore;
//   }

//   get fullName(){
//     return `${this.name}, de poder ${this.powerScore}`
//   }

//   set power(newPower: number){
//     if(newPower <= 100){
//         this.powerScore = newPower
//     }else {
//         throw new Error('Power score cannot be more than 100')
//     }

//   }

// }

// const vengador = new Avenger('spiderman',80);

// vengador.name = 'Hulk';

// console.log(vengador);





////// Con interfaces 

 interface Avenger {
    name:string;
    powerScore: number ;
    wonBattles : number  ;
    age?: number ;
    battle: (enemy: Avenger, win: boolean) =>void;

 }

class AvengerClass implements Avenger{

     name:string;
     powerScore: number;
     wonBattles: number;    
     age :number=20;
 
   constructor ( name:string, powerScore:number,wonBattles:number){
     this.name = name ;
     this.powerScore = powerScore;
     this.wonBattles = wonBattles;
   }
 
   get fullName(){
     return `${this.name}, de poder ${this.powerScore}`
   }
   
  //  set wonBattles2 (newBatle : number){

  //     this.wonBattles = newBatle;
  //  }
    
    battle (enemy:Avenger , win:boolean ): void {
         if(win){
            this.wonBattles ++
            this.powerScore += 5
         } else {
            this.powerScore -= 5
         }

    }
 
   set power(newPower: number){
     if(newPower <= 100){
         this.powerScore = newPower
     }else {
         throw new Error('Power score cannot be more than 100')
     }
 
   }
 
 }
 
 const vengador = new AvengerClass('spiderman',300,3);
 
 // vengador.name = 'Hulk';
 
  vengador.age = 40;
 console.log(vengador);
 