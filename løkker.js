
// opgave 2 //

// for (let x = 1; x <= 25; x++){
//    console.log(x);
// }

// let count = 1; 
// while(count <= 25){
//   console.log(count);count++;
// }

// let counter = 1; 

// do{
//     console.log(counter);counter++;}
//    while(counter <= 25)

// opgave 3 //

let y = 1;

do{
    console.log(y);
    y++;
   }while(y<=25)

// opgave 4 //

for (let z = 2017; 
    z>=1917; z--){
    console.log(z);
}

// opgave 5 //

let ugedage = Array("mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag");
for(let x = 0; x < ugedage.length; x++){
    console.log(ugedage[x]);
}

// opgave 7 //

let navne = ["alber", "bob", "carl", "egon", "andreas", "zoya", "sørine", "david"];

navne.forEach(function (navn){
   console.log(navn);
});

// opgave 8 //

//let navne = ["Armaan Malik", "Arjit Sing", "Jojo Sing", "Neha Kakkar"];

navne.forEach(function (navn, index) {
    console.log(navn + "er placeret på " + index + " plads");
});

// opagve 9 //

let numbers = [1, 23, 40, 150, 50, 8, 11, 80, 30, 15]
numbers.forEach(function(number, index){
  if (numbers[index + 1] !=undefined){

    if(number > numbers[index + 1]){
      console.log(number + "er større end" + numbers[index + 1]);
    }else{
      console.log(number + "er mindre end" + numbers[index + 1]);
    }
  }
  else{
    console.log(number + "har ingen")
  }
})
