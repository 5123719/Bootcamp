// Øvelse 1 //

function sighej(tal){
    console.log('hejsa');
}

// del 2 //

let data = [1, 2, 3, 4, 5, 6];
data.forEach(sighej);

// øvelse 2 //

let zoya = ['student', 'arbejd', 'træner',];

function Html(tekst) {
    console.log('<p>' + tekst + '</p>');
}

function sighej(tekst, next) {
    if (typeof tekst == 'string') {
        
    }else if (Array.isArray(tekst) == true) {
        for (i = 0; i < tekst.length; i++)
            next(tekst[i]);
    }
}

sighej('hej', Html);

function ChangeHtml (tekst) {
    console.log(`<p>${tekst}</p>`)
}
function sigNoget(tekst, next) {
    next(tekst);
}
sigNoget('hejsa', ChangeHtml);