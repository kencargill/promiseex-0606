// page 12 from https://docs.google.com/document/d/1TlzyLUz3c43-HAqoMZw30xr1830Qqhi10zlAW_srDfA/preview

const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
 .then(res => res.json())
    //(1)
 .then((jsonData) => console.log(jsonData))
 .then(res => res.json())
    //(2)
 .then((jsonData) => console.log(jsonData))
  
//   const displayData = async () => {
//     const data = await apiPromise;
//     //(2)
//     console.log(data.count);
//   };
  
//   displayData();

    //(3)
  const countPromise = apiPromise.then((data) => {
    //   return data.count
    });

  console.log(countPromise);