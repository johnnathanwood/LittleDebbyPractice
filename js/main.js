// let littleDebby = (type:"brownie")

const createSnackCake = (title, description,flavor,weight) => {
    const snackCakes = {
        title: title,
        description: description,
        amount: amount,
        topping: topping,
        flavor: flavor,
        weight: weight
    }

    return snackCakes

}

function populateDB() {

const cosmicBrownies = createSnackCake("Cosmic Brownies",
"Good", 12, "Colorfull chocolate chip candy", "Chocolate", 
372
)


// function pullInfo (cosmicBrownies,zebraCakes){
//     return cosmicBrownies * zebraCakes
// }

// const cosmicBrownies = {
//     title: "Cosmic Brownies",
//     description: "Good",
//     amount: 12,
//     topping: "Colorfull chocolate chip candy",
//     flavor: "Chocolate",
//     weight: 372
// }



// function setData(nameTag, jsObject){
//     let stringifiedObject = JSON.stringify(jsObject);
//     localStorage.setItem(nameTag, stringifiedObject);
//     }




// function loadData(nameTag){
//   let stringifiedObject = localStorage.getItem(nameTag);
//   let parsedObject = JSON.parse(stringifiedObject);
//   return parsedObject;s
// }

// const zebraCakes = {
//     title: "Zebra Cakes",
//     description: "Amazing",
//     amount: 6,
//     topping: "Chocolate",
//     flavor: "Zebra",
//     weight: 3.5,
// }

const snackCakes = [cosmicBrownies,zebraCakes]
const stringified = JSON.stringify(snackCakes)

localStorage.setItem("snackCakes",stringified)


}






