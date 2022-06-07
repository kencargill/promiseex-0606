// page 12 from https://docs.google.com/document/d/1TlzyLUz3c43-HAqoMZw30xr1830Qqhi10zlAW_srDfA/preview
// when chaining promises with .then () the return value from .then() will be transferred to the next .then() in the chain
// if the current .then() in the chain doesnt return a value, the next .then() value will be undefined

const apiPromise = fetch('https://grandcircusco.github.io/demo-apis/donuts.json')
    .then((response) => response.json()); //gets the data from the response object, the json data

    //(1)
apiPromise.then((data) => console.log('step 1:', data));

    //(2)
apiPromise.then((donuts) => console.log('step 2:', donuts.count));

    //(3)
const countPromise = apiPromise.then((donuts) => donuts.count); // same as curly brackets and return donuts.count in the arrow function
countPromise.then((count) => console.log('step 3:', count));

    //(4)
const top4Promise = apiPromise.then((donuts) => {
    const top4Donuts = donuts.results.slice(0,4);
    return top4Donuts;
});
top4Promise.then((first4) => console.log('step 4:', first4))

    //(5)
const namesPromise = apiPromise.then((donuts) => donuts.results.map((donut) => donut.name));
namesPromise.then(names => console.log('step 5:',names));

    //(6) still needs work - look for jalens code
const capsNamePromise = namesPromise.then((donutNames) => donutNames.map((name) => name.toUpperCase()));
console.log('step 6:',capsNamePromise);

    //(7) need jalen's code
// let badPromise = fetch(
//     "https://grandcircusco.github.io/demo-apis/wrong.json"
// ).then(response => response.json());

// badPromise.catch((err) => {
//     console.error('failed',err);
//   });

  //(8) need jalen's code
