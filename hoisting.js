
// 
//Hoisting
//Doesn;t apply with strick mode
//Check Hoisting - Code BlocK -
//Example-1
{
    // console.log(`Let declaration - test1 -->${var1}`) // This throws Cannot access vr1 before intialization and stops execution
      var1 = "Check this"
     console.log(`Let declaration I am not under strick mode -- test2 -->${var1}`) //Output1
     console.log("Function Check",checkMode()) //Ouput4
 }
 
 function checkMode(){
     
     "use strict"; // Restricting string to this funciton
      let a = "I am in strick mode" // Let/var/const needed before a
     console.log("I am a variable under strict mode",a) //Ouput2
     checkfun("Hello World!")
    return a
 }
 
 
 function checkfun(str){
     console.log("Welcome String",str) //Output3
 }


 //Example-2