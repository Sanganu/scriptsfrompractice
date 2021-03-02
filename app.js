// OOPS concept of Inheritance
//Base Class
class Base {
    constructor() {
        this.sum = 0
        this.product = 1
    }
    get addon() {
        return this.sum //Getters for Summation
    }
    get mulitply() {
        return this.product //Getter for Product
    }
    setSummation(number1) {
        this.sum = this.sum + number1 // Method
    }
    setMultiplication(number1) {
        this.product = this.product * number1 
    }
}
// Inheritance
class Series extends Base {
    constructor(array) {
        super() // Call Prarent Constructor
        this.numberSequence = array
        this.average = 0
    }
    sumSeries() {
        for (let i = 0; i < this.numberSequence.length; i++) {
            this.setSummation(this.numberSequence[i]) // Parent class method which is inherited
        }
        console.log("Sum")
    }
    get series() {
        return this.numberSequence
    }
    setProductsOf(){
        for(let i=0;i < this.numberSequence.length; i++){
            this.setMultiplication(this.numberSequence[i])
        }
    }
    setAverage(){
        this.sumSeries() // Calling method
          this.average = (this.sum/this.numberSequence.length) // Using parent clas attributes
     
    }
    get displayAverage(){
        return this.average
    }
}

let myNumbers = [12, 39, 54, 11, 90, 32]
let Problem = new Series(myNumbers)
console.log(`The Given Series: ${Problem.series}`) // Child Class getter
Problem.setAverage()

Problem.sumSeries() // Child Class 
Problem.setProductsOf()
console.log(`The Product of the Series: ${Problem.mulitply}`) //Parent Class Getter

console.log(`The summation of the Series: ${Problem.addon}`) // Parent Class Getter
console.log(`Average : ${Problem.displayAverage}`)
