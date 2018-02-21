#Operatorer

```javascript
1. =

*Denne operatorer gør at hvis f.eks. vi opretter variabler, og giver variablen en værdi, så benyttes et enkelt lighedstegn " = " og det er en tildelings operator.*

Eksempel:

```javascript

x = y

let x = y

````

2. = =

*Når vi i if-sætning ønsker at se om en variabel er lig med en bestemt værdi, benyttes to lighedstegn " = = " det kaldes en sammenlignings operator.*

Eksempel:

```javascript

if (navn == “albert” && by == “Roskilde”)

````

3. = = =

*Når vi i if-sætning ønsker at se om en variabel er lig værdi og lige type, benyttes 3 lighehstegn " = = = ". Det vil sige at indehold skal være noget andet men datatyper skal være det samme).*

Eksempel:

```javascript
let navn = "2";

if (navn === "2"){
    console.log("vi havnede i IF");
}else{
    
    console.log("vi havnede i else");
}
````

4. ! 

 *En logisk operator, er den fjerde type operator. Det er en måde at udtrykke "og" "eller" og "ikke" f.eks. if(name != '' && name 00 'albert') ! udråbstegnet vender et true om til at blive læst som false,
 eller omvendt. (udtales "Not" Equel)"and" og "or" benyttes til f.eks. at 2 udtryk sammen, hvor enten begge skal være true (and), eller hvor mindst 1 af dem skal være og betingelser.*

 Eksempel:

 ```javascript

 if (name != '' && name == 'albert');

 let navn = "2";

 if (navn != "2"){
     console.log("vi havnede i IF");
 }else{
     console.log("vi havnede i else");
 }
 ````

5. != =

*En logisk operator Det er en måde at udtrykke "ikke lige værdi" eller "ikke lige type". Den ikke-identitetsoperatør returnerer sand, hvis operanderne ikke er ens og/eller ikke af samme type.*

Eksempel:

```javascript

let navn = "3";

if (navn !== "2"){
    console.log("vi havnede i IF");
}else{
    console.log("vi havnede i else");
}
````

6. < 

*Denne operator betyder "mindre end" og på engelsk "less then".*

Eksempel:

```javascript

if(number < 10){
    console.log("større end 10");
}else{
    console.log("mindre end 10");
}
````

7. >

*Denne operator betyder "større end" og på engelsk "greater then".*

Eksempel:

```javascript

if(number > 10){
    console.log("større end 10");
}else{
    console.log("mindre end 10");
}
````

8. < =

*Denne operator betyder "mindre end" "lige med" og på engelsk (less than or equal to).*

Eksempel:

```javascript

let x = 4;
let y= 5;
if (x < = y) {
    console.log("vi havde i IF");
}else{
    console.log("vi havde i else");
}
````

9. > =

*Denne operator betyder "større end" "lig med" og på engelsk ("greater than or equal to").*

Eksempel:

```javascript

let x = 4;
let y= 5;
if (x = > y) {
    console.log("vi havde i IF");
}else{
    console.log("vi havde i else");
}
````

10. +

*Denne operator betyder "at den tilføjer et tal". På engelsk kan man sige "addition" ("adds number"s).*

Eksempel:

```javascript

let x = 5;
let y = 2;
let z = x + y;

````

11. - 

*Denne operator betyder "at den sutbraherer tal". På engelsk kan man sige "subtracts" ("subtracts numbers").*

Eksempel:

```javascript

let x = 5;
let y = 2;
let z = x - y;

````

12. *

*Denne operator betyder "at den mutliplicerer tal". På engelsk kan man sige "multiplication" ("multiplies numbers").*

Eksempel:

```javascript

let x = 5;
let y = 2;
let z = x * y;

````

13. /

*Denne operator betyder "at den deler tal". På engelsk kan man sige ("divides numbers").*

Eksempel:

```javascript
let x = 5;
let x = 2;
let z = x / y;
````

14. %

*Denne operator betyder "at denr returnerer divisionens rest". På engelsk kan man sige ("returns the division remainder").*

Eksempel:

```javascript

let x = 5;
let y = 2;
let z = x % y;
````

15. &&

*Denne operator er en af de logiske operatør vilket bruges til at bestemme logikken mellem variablere eller værdier. Denne operator er ord "and".*

Eksempel:

```javascript

8(x < 10 && y > 1) 

````

16. ||

*Denne operator er en af de logiske operatør vilket bruges til at bestemme logikken mellem variablere eller værdier. Denne operator er ord "or".*

Eksempel:

```javascript

let navn = "albert";
let by = "Roskilde";
if (navn = = "finn" || by = = "Roskilde"){
    console.log("vi havnede i IF");
}else{
    console.log("vi havnede i else");
}

(x = = 5 || y = = 5) 

````







