// let firstPromise = new Promise(function (resolve, reject){
//      resolve('success');
// });
   
// firstPromise.then(function (successMessage) {
//     console.log(successMessage);
// })

// let secondPromis = new Promise(function (resolve, reject) {
//     //her kunne der være masser af kode der skulle udføres
//     // og derefter afsluttes med at resolve eller reject
//     // alt efter om alting lykkedes eller ej
//     if(true) {
//         resolve('success');
//     }else{
//         reject('Det var ikke en succes');
//     }
// });

// secondPromis
//     .then(successMessage => {
//         console.log(successMessage);
//     }).catch(errorMessage => {
//         console.log(errorMessage);
//     });
    
function thirdPromise(someBoolValue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(someBoolValue) {
                resolve('Denne besked kommer fra "resolve');
            }else{
                reject(new Error('Der var ikke en success, dette kommer fra "reject'));
            }
        })
    })
}

thirdPromise(true)
    .then(success => {
        console.log(success);
        throw new Error('lad os sige noget gik galt!');
        //return 'Information sendes videre' ;
    }).then(nextSuccess => {
        console.log(nextSuccess);
    }).catch((error) => {
        console.log(error.message);
    })

    console.log('timeout');

