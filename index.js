// ES6 Class Syntax
class Calculator {
     constructor(number1,number2){
         this.number1 = number1
         this.number2 = number2
     }
     //Methods to manipulate the properties

     getterNumber1(){
         return `The first numbers is ${this.number1}`
     }
  
     getterNumber2(){
         return `The second number is ${this.number2}`
     }

     setterNumber1(newValue){
         this.number1 = newValue
     }

     setterNumber2(newValue){
        this.number2 = newValue
    }

    addNumbers(){
        return `The Addition of ${this.number1} and ${this.number2} is ${this.number1+this.number2}`
    }

    subNumbers(){
        return `The Subtraction of ${this.number1} and ${this.number2} is ${Math.abs(this.number1-this.number2)}`
    }
    multiplyNumbers(){
        return `The Multiplication of ${this.number1} and ${this.number2} is ${this.number1*this.number2}`
    }


}



// Create instance of class

var firstOperation = new Calculator(120,130)
// Accessing the class methods
console.log(firstOperation.addNumbers());
console.log(firstOperation.subNumbers());
console.log(firstOperation.multiplyNumbers())
// Change Values
firstOperation.setterNumber1(220);
firstOperation.setterNumber2(121);
console.log(firstOperation.getterNumber1());
console.log(firstOperation.getterNumber2());
//Getting Updates Values
console.log(firstOperation.addNumbers());
console.log(firstOperation.subNumbers());
console.log(firstOperation.multiplyNumbers())

