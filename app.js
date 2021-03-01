// OOPS concept of Inheritance


class Base {
    constructor() {
        this.sum = 0
        this.product = 1
    }
    get Addon() {
        return this.sum
    }
    get Product() {
        return this.product
    }
    setSummation(number1) {
        this.sum = this.sum + number1
    }
    set Multiplication(number1) {
        this.product = this.product * number1
    }
}

class Series extends Base {
    constructor(array) {
        super()
        this.numberSequence = array
    }
    sumSeries() {
        for (let i = 0; i < this.numberSequence.length; i++) {
            this.setSummation(this.numberSequence[i])
        }
    }
    get Series() {
        return this.numberSequence
    }
   
}

let myNumbers = [12, 39, 54, 11, 90, 32]
let Problem = new Series(myNumbers)
console.log(Problem.Series)
console.log(Problem.Product)
Problem.sumSeries()
console.log(Problem.Addon)
