
// opgave 1 //

// denne virker ikke//

//let x = 10;
//let y = 7;

function tal(x, y){
("tal" + x + " gange med tal " + y + ", " + " er lig med " + x * y);
}
//-----slut på den her ikke virker...-------//

//-----Den her virker!------//
let a = 11;
let b = 2;

function talaogb(a, b)
{return "tal " + a + " gange med tal " + b + ", " + " er lig med " + a * b }
console.log(talaogb(a, b));

//let a = 24;
//let b = 300;

//let talaogb = new Function("a", "b", "return a * b");
//console.log("tal " + a + " gange med tal " + b + ", " + " er lig med " + a * b);

//------slut på den der virker.....//

let x = 23;
let y = 300;

function gangeMedxOGy(x, y) {
    if (isNaN(x) || isNaN(y)) {
        
    }else{
        return x * y;
    }
}

 console.log(gangeMedxOGy(5,7));


 // øvelse 2 //
 function regndetUD(a, b){
     if(isNaN(a)==false && isNaN(b)==false){
         return 'tal ' + a + ' gange med tal ' + b + ' er lig med ' + a * b;

     }else{
         console.log('det er ikke et tal');
     }
 }

 //let find = regndetUD(23, 10);

 //console.log(find);

 function isNaNogContent(a, b){
     if(a==undefined || b==undefined || !isNaN(a) || !isNaN(b)){
         return false;
     }else{
         return 'tal ' + a + ' gange med tal ' + b + ' er lig med ' + a * b;

     }
 }

 let find = isNaNogContent(23, 10);

 console.log(find);

 // øvelse 3 //
function udskrivfarve (farve) {
    console.log(farve);
}

let farver = ['rød', 'grøn', 'blå'];
farver.forEach(udskrivfarve);