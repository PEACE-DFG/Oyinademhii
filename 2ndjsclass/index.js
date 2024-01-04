// // there are 4 common ays to convert number to integer
// /*
// 1. Math.round()-> returns the number rounded to the nearest integer
// 2. Math.ceil()-> returns the number rounded up to the nearest integer
// 3. Math.floor()-> returns the number rounded down to the nearest integer
// 4. Math.trunc()-> returns the integer part
// */
// console.log(Math.round(4.6))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.4))
// console.log(Math.floor(4.3))
// console.log(Math.trunc(4.7))

// // math method
// // math.pow(x,y) = the value of x raised by y (x^y)
// console.log(Math.pow(8,2))

// // sqrt method - squareroot
// console.log(Math.sqrt(64))


// // abs method - absolute value
// console.log(Math.abs(-4.3))

// // trig method -
// console.log(Math.sin(90))
// console.log(Math.cos(0))



// //  javascript loop

// /*
// 1. for - 

//   syntax--------------------------------
//   for(expression1 ; expression 2;   expression 3){

//   }

//   expression1 = expression is executed on time that is before the block code
//   expression 2 = the condition for executing the block code
//   expression 3 = is executed every time the block code is executed

// 2. for/in-
// loops through objects
// syntax------------------------
// for(key in Object){
//   //code to execute
// }


// 3. for/of-
// -------------------------
// used for array
// for (variable of iterable){
//   //code to execute
// }
// 4. while-

//       --------------------------------

//       syntax 

//       while(condition){
//         //code to execute
//       }

// 5. do/while

// -------------------

// do{
//   //code to execute
// }
// while(condition)
// */


// let text = '';
// for(let i=0;i<5;i++){
//   text += 'The number is' + i + '<br>';
// }
// document.getElementById('demo').innerHTML=text;



// let person = {fname: 'John',lname: 'Johnson', age:'25'}

// let txt="";

// for(let x in person){
//   txt += person[x] + " ";
// }
// console.log(txt);



// const cars = ["BMW","FERARI","TOYOTA"];

// let tt ="";
// for (let x of cars){
//   tt += x + " ";
// }
// console.log(tt);

// let tts ="";
// let i=0;
// while(i<10){
//   tts += "The number is" + i ; 
//   i++;
// }
// console.log(tts);

// let peace="";
// do{
//   peace+="The number is" + i;
//   i++;
// }while(i<10);
// console.log(peace);

// fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
// .then(res=>res.json())
// .then(response =>{
//   console.log(response)
// })


// function display(){
//   let input_value = document.getElementById('user_input').value;
//   fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input_value)
// .then(res=>res.json())
// .then(response =>{
//   console.log(response)
// })

// }


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{
  // check if data is an array or bject with single key
  if(!Array.isArray(data)){
  // if data is a object with single key, extract the data
  if(data&&Array.isArray(data.products)){
    data=data.products;
  }
  else{
    console.log(data);
  }
  }

  // get the container where prodcts would be displayed
  const productContainer= document.getElementById('product-container');

  // iterate the product using forEach method
  data.forEach(product => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4','mb-3');

    cardDiv.innerHTML=`
    <div class="card" style="width: 250px;height:370px;border:1px solid transparent;box-shadow:5px 5px 7px grey">
  <img src="${product.images[0]}" style="height:150px" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
    productContainer.appendChild(cardDiv);
  });


});
