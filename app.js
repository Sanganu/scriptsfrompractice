// OOPS concept of Inheritance


class Base{
    constructor(){
        this.sum = 0
        this.product = 0
    }
    get sum(){
        return this.sum
    }
    get product(){
        return this.product
    }
    calculateAdd(number1,number2){
        this.sum = number1 + number2
    }
    calculateProduct(number1, number2){
        this.product = number1 * number2
    }
}

