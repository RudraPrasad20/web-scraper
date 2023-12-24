/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// class Calculator {
//     constructor() {
//       this.result = 0;
//     }
//     add(num) {
//       if (typeof num === "number") {
//         this.result += num;
//       } else {
//         throw new Error("Invalid number");
//       }
//     }
//     subtract(num) {
//       if (typeof num === "number") {
//         this.result -= num;
//       } else {
//         throw new Error("Invalid number");
//       }
//     }
//     multiply(num) {
//       if (typeof num === "number") {
//         this.result *= num;
//       } else {
//         throw new Error("Invalid number");
//       }
//     }
//     divide(num) {
//       if (typeof num === "number" && num !== 0) {
//         this.result /= num;
//       } else {
//         throw new Error("Invalid number");
//       }
//     }
//     clear() {
//       this.result = 0;
//     }
//     getResult() {
//       return this.result;
//     }
//     calculate(expression) {
//       this.result = eval(expression.replace(/\s+/g, " "))
//       if(this.result === Infinity) {
//         throw new Error("Infinity")
//       }
//       return this.result;
//     }
//   }


// class Calculator{
//   constructor(){
//     this.result = 0;
//   }
//   add(num){
//     if(typeof num === "number"){
//       this.result += num;
//     }else{
//       throw new Error("enter a valid number");
//     }
//   }
//   subtract(num){
//     if(typeof num === "number"){
//       this.result -= num;
//     }else{
//       throw new Error("enter a valid number");
//     }
//   }
//   multiply(num){
//     if(typeof num === "number"){
//       this.result *= num;
//     }else{
//       throw new Error("enter a valid number");
//     }
//   }
//   divide(num){
//     if(typeof num === "number"  && num !== 0 ){
//       this.result /= num;
//     }else{
//       throw new Error("enter a valid number");
//     }
//   }

// clear(){
//   this.result = 0;
// }
// getResult(){
//   return this.result;
// }
// calculate(expression){
//   this.result = eval(expression.replace(/\s+/g, " "))
//   if(this.result === Infinity){
//     throw new Error("infinity")
//   }
//   return this.result;
// }
// }

// class Calculator{
// constructor(){
//   this.result = 0;
// }
// add(num){
//   if(typeof num === "number"){
//     this.result += num;
//   }else{
//     throw new Error("enter a valid num")
//   }
// }
// subtract(num){
//   if(typeof num === "number"){
//     this.result -= num;
//   }else{
//     throw new Error("enter a valid num")
//   }
// }
// multiply(num){
//   if(typeof num === "number"){
//     this.result *= num;
//   }else{
//     throw new Error("enter a valid num")
//   }
// }
// divide(num){
//   if(typeof num === "number" && num !== 0){
//     this.result /= num;
//   }else{
//     throw new Error("enter a valid num")
//   }
// }
// clear(){
//   this.result = 0;
// }
// getResult(){
//   return this.result;
// }
// calculate(expression){
// this.result = eval(expression)
//   if(this.result === Infinity){
//     throw new Error("infinity");
//   }
//   return this.result;
// }}


class Calculator{
  constructor(){
    this.result = 0;
  }
sum(num){
  if(typeof num === "number"){
    this.result += num;
  }else{
    throw new Error("something went wrong")
  }
}
sub(num){
  if(typeof num === "number"){
    this.result -= num;
  }else{
    throw new Error("something went wrong")
  }
}
mul(num){
  if(typeof num === "number"){
    this.result *= num;
  }else{
    throw new Error("something went wrong")
  }
}
div(num){
  if(typeof num === "number"){
    this.result /= num;
  }else{
    throw new Error("something went wrong")
  }
}







}





module.exports = Calculator;
