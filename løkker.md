#Løkker

While Loop:

*While loop løber gennem en block kdoe, så længre en bestemt tillstand er sand.*

while (condition){
    code block to be executed
}

*I følgende eksempel køres koden i lopp igen og igen, så længre en variabel (i) er mindre end 10:*

Eksempel

```javascript

while (i < 10) {
    text += "nummer er" + i;
    i++;
}
```

Do/while loop:

*"Do/while loop" er en variant af loop. Denne loop udfører kodeblokken en gang, før du kontrollerer om tilstanden er sand, så gentager loop, så længre tilstanden er sand.*

do {
    code block to be executed 
}
while (condition);

*Eksempel nedenfor bruger en "do/while loop". loop vil blive udført  mindst en gang, selvom tilstanden er falsk, fordi kodeblokken udføres, før tilstanden testes:*

Eksempel:

```javascript

do{
    text += "nummer er" + 1;
    i++;
}
while (i < 10);
```
```javascript
let result = "";
let i = 0;

do{
    i = i + i;
    result = result + i;
}while (i < 5);

console.log(result);
// expented result: "12345"
```

Sammenligning for og while

*Loop i dette eksempel bruger en "for loop" til at indsamle bilnavne fra bilar array*

Eksempel:

```javascript

let cars = ["BMW", "Volvo", "Saab", "Ford"];
let i =0;
let text = "";

for (;cars[i];) {
    text += cars[i] + "<br>";
    i++;
}
```
Resultat:

BMW 

Volvo 

Saab

Ford


Eksempel 2:

*loop i dette eksempel bruger en "while loop" til at indsamle bilnavne fra bilar array*

```javascript

let cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}
```

*Kan også skrives som:*

```javascript

for (i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
}
```

For loop:

*For loop er ofte det værktøj, du vil bruge, når du vil oprette en loop.*

for (statement 1; statement 2; statement 3){
    code block to be executed
}

Det vil sige:

*Statement 1 udføres før loop (kodeblokken)starter.*

*Statetment 2 definerer betingelsen for at løbe løkken (kodeblokken).*

*sStatement 3 udføres hver gang efter loop (kodeblokken) er blevet udført.*

Eksempel:

```javascript

for (i = 0; i < 5; i++) {
    text += "nummer er" + i + "<br>";
}
```
Resultat:

The number is 0

The number is 1

The number is 2

The number is 3

The number is 4


