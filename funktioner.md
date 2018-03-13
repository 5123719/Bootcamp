Funktioner

*En JavaScript-funktion er en blok kode designet til at udføre en bestemt opgave. D.v.s. at den udføres, når "noget" blot ved at kalde på den.*

*For at definere en funktion, benyttes javascript nøgleordet "function".*

Eksempel:

```javascript

function sigHejVerden(){
    console.log(' Hej Verden!');
}
```
*I det ovenstående kodeeksempel oprettes (defineres) en function kaldet "sigHejVerden" d.v.s. funktionens indhold, det i mellem krølleparatenserne, er det der udføres når funktionens kaldes. For at kalde funktionen, skrives navnet på selve funktionen, efterfulgt af et sæt parenteser: eksempelvis "sigHejVerden();". Det vises et eksempel her ned:*

*Et andet eksempel der du vil udskrive en pris med kronor.*

```javascript

function iKroner(pris){
    console.log(pris + ' kr.');
}
```
*Og for at benytte funtionen, kaldes den og der sendes en værdi med til funktionen:

```javascript

iKroner(1500);
iKroner(500);
iKroner('24,95');
```

Argumenter

*"Funktionsargumenter" er de reelle værdier, som functionen modtager, når den på påberåbes. Inden for funktionen bruges argumenterne som lokale variabler.*

*Når man arbejder med "funktionsargumenter" skal man tænke på at hvis en funktion kaldes med et manglende argument, sættes værdien af det manglende argument til udefineret.*

Eksempel:

```javascript

function safeMultiply(x, y) {
    if (isNaN(x) || !isNaN(y)) {

    }else{
        return x * y;
    }
}
```

*I denne ovenstående function, testes først om begge argumente er af datatypen "Number", ved at benytte den indbyggede javascript funktion "isNaN()".*

*Et eksempel på argumenter:*

(x, y)


Returværdier

```javascript
function safeMultiply(x, y) {
   if (!isNaN(x) || !isNaN(y)) {
      return 0;
   } else {
      return x * y;
   }
}
```

*Hvis begge argumenter er tal, ganges de med hinanden og resultatet returneres ved at benytte javascript nøgleordet "return".*

```javascript

let result = safeMultiply(5, 7);
console.log (safeMultiply('test', 7);
```
