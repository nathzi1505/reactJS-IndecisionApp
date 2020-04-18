// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }

// const add = (a, b) => {
//     console.log(arguments)
//     return a + b
// }

// console.log(add(55, 1))

const user = {
    name: 'Pritthijit',
    cities: ['Kolkata', 'New Delhi'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city
        })
        return cityMessages
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        const results = this.numbers.map((number) => {
            return number * this.multiplyBy
        })
        return results
    }
}

console.log(multiplier.multiply())


