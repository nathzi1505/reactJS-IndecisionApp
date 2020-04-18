var nameVar = "Andrew"
// nameVar = "Mike"
var nameVar = "Mike"
console.log('nameVar', nameVar)


let nameLet = 'Jen'
nameLet = "Julie"
// let nameLet = "Julie"
console.log('nameLet', nameLet)

const nameConst = "Frank"
// const nameConst = "Gunther"
// nameConst = "Gunther"
console.log("nameConst", nameConst)

// Function scoped
// function getPetName() {
//     const petName = 'Ha1'
//     return petName
// }

// getPetName();
// console.log(petName)

// Block scoping
var fullName = "Pritthijit Nath"
if (fullName){
    // var firstName = fullName.split(' ')[0] // Function scoped
    // const firstName = fullName.split(' ')[0] // Block level scoped
    let firstName = fullName.split(' ')[0] // Block level scoped
    console.log(firstName)
}
console.log(firstName)

