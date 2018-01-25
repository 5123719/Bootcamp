
// øvelse 2 //

let boolean = false;

if(boolean){
    console.log('hej verden');

}

// øvelse 3 //

let number = Math.floor(Math.random() * 10);     // returns a number between 0 and 9
console.log(number);

if(number > 5){
    console.log("større end 5");
}else{
    console.log("mindre end 5");
}



// øvelse 4 //

let work = true;
let result = work ? "Jep, jeg skal arbejde" : "Nope, der arbejdes hård";
console.log(result);

// øvelse 5 //

let navn = "cola";

if(navn == "cola"){
   console.log('cola er sødt');
}else if(navn == "carlsberg sport"){
   console.log('carlsberg sport er bedre');
}else{
   console.log('lander her hvis navn noget andet end cola eller carlsberg sport');
}

// øvelse 6 //
 navn = "cola";
switch (navn) {
   case "cola":
      console.log(navn, 'er sødt');
      break;
   case "carlsberg sport":
      console.log(navn, 'er bedre');
      break;
   default:
      console.log(navn, 'er ukendt');
      break;
}

