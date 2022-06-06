// page 12 from https://docs.google.com/document/d/1TlzyLUz3c43-HAqoMZw30xr1830Qqhi10zlAW_srDfA/preview

const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
 .then(res => res.json())
    //(1)
//  .then((jsonData) => console.log(jsonData))
    //(2)
//  .then((jsonData) => console.log(jsonData.count))

    //(3) - incorrect?
//   const countPromise = apiPromise.then((jsonData) => console.log(jsonData.count));
//  console.log(countPromise);

    //(4) - incorrect?
// const top4Promise = apiPromise.then((jsonData) => console.log(jsonData.results[0,1,2,3]))

    //(5) - returning undefined for .forEach ?
//  const namesPromise = apiPromise.then((jsonData) => {
//     jsonData.forEach((post) => {
//       return post.results.name
//     });
//   });

//   console.log(namesPromise)

    //(6) - doesn't work because (5) doesn't work
//  const capsNamePromise = namesPromise.toUpperCase
//  console.log(capsNamePromise)

    //(7) - incorrect ?
let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json").then(res => res.json());

badPromise.prototype.catch((error) => {
    console.error(error);
  })