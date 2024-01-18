
type HeroName = string; 


type Hero4 = {
  name?: HeroName;
   nickName : string
}

let hero10 : Hero4 = {
  name : "Iron man",
  nickName : "tony"
}

console.log(hero10);
hero10.name = "Juan";
console.log(hero10);