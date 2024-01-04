// DOM -> document object model
// document.write()
// console.log
// window.alert

// how to creeate variables
// var x;
// let y;

// const w=7;

// // x=2;
// y=4;

// let z= x+y+w;

// console.log(z);
// console.log(x);

// String
// boolean
// Number
// undefined
// objects
// array

// const person ={firstName:'Peace',lastName:'Omari'}
// console.log(person);


// /*
// functionkeyword + functionName + Parenthesis(){

// }


// */

// let x = 7;

// function sum(a,b){
//   return a+b;
// }
// console.log(x)
// console.log(sum(2,3));
// console.log(sum(2,3));
// console.log(sum(2,3));
// console.log(sum(2,3));
// console.log(sum(2,3));
// console.log(sum(2,3));

// var x = function(x,y){
//   return x*y;
// }


// arrow\
// const x=(x,y)=> x*y;


/*

switch(expression){
  case 1:
    // block of code
    break;
    case 2:
      // block of code
      break;
      default;
}

*/


switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
    case 1:
      day = 'Monday';
      break;
      case 2:
        day = 'Tuesday';
        break;
       
          case 4:
            day = 'Thursday';
            break;
            case 5:
              day = 'Friday';
              break;
              case 6:
              day = 'Saturday';
              break;
              default:
                day = 'day not found'
}
console.log(day);