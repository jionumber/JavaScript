// way to print in javascript.
// console.log("Hello World !");
// alert("me");
// console API's.
// document.write("This is via document.write");
// console.error("this is an error");
// console.warn("this is a warning");

// javascript variables.
// var num1=89;
// var num2=98;
// console.log(num1+num2);

// // datatypes in javascript.
// // Strings.
// var str1 = "this a String";
// var str2 = 'tHIS IS also a string';
// // numbers.
// var num1=89;
// var num2=98;
// //objects.
// var Marks = {
//     devansh:99.9,
//     harry:98.99,
//     shubham:56,
//     aditi:28

// }
// console.log(Marks);
// // Booleans.
// var a = true;
// var b = false;
// console.log(a,b);
// // var und= undefined;
// var und;
// console.log(und);
// // null
// var n = null;
// console.log(n);

/* 
At a very high level java script contains two datatypes:-
1. Primitive data type: undefined,null.number,string,boolean,symbol.
2. Reference data type. Arrays,Objects.
*/
// var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[1]);

// // functions in javascript.
// function avg(a,b){
//     c = (a+b)/2;
//     return c;
// }
// c1=avg(34,76);
// console.log(c1);

// if else statements
// age=27;
// if(age>18){
//     console.log(" You can Drink ");
// }
// else{
//     console.log("You can not drink");
// }

// if else ladder.
// if(age>18){
//     console.log("You are a adult.");
// }
// else if(age>13){
//     console.log("You are a teenager.");
// }
// else if(age>10){
//     console.log("You are not a kid.");
// }
// else{
//     console.log("You are a kid.")
// }

// Make a function which tells you are 18+ or not.

// function age(a){
//     if(a>=18){
//         console.log("You are an adult now")
//     }
//     else{
//         console.log("You are not a adult")
//     }
// }
// x = age(17);

// for loop in javascript.
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// // for each loop in javascript.
// arr.forEach(function(element){
//     console.log(element);
// })

// // while loop syntax in javascript.
// j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do while loop in javascript.
// let j=0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

/*
// Difference between while loop and do while loop;
while loop checks the condition before executing the code and it do not runs if the condition is false.
| do while executes the code before checking the condition and then checks the condition and it do runs atleast once wheather the condition is false or true.
*/

// break and continue attributes in javascript.
// let array = ['avi','princy','mom','dad','vibhati'];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
//     if(i==1){
//         break;

//         // output is ( avi , princy) this means break statement breaks the iteration and ends the loop.

//     }
// }

// for(let i=0;i<array.length;i++){
//     if(i==1){
//         continue;
//         // this will delete the 1st index i.e princy from the array and further the loop will continue.
//     }
//     console.log(array[i]);
// }

// // array methods and functions in javascript.
// let family = ['son','mom','dad','daughter','wife','dog'];
// // for calculating the length of array family.
// console.log(family.length);
// // to remove the last element from the array family.
// family.pop();
// console.log(family);
// // to add a element in family.
// family.push('grandson');
// console.log(family);
// // to remove first element from the array family.
// family.shift();
// console.log(family);
// // to add an element at first place of array.
// family.unshift("son");
// console.log(family);
// // to sort array alphabettically.
// family.sort();
// console.log(family);
// // to make a string out of data from the array.
// console.log(family.toString());

// // String methods and functions in javascript.
// let mystr = "i love my family so so so so so much.";
// // finding the length of teh string.
// console.log(mystr.length);
// // to find a words index in string.
// console.log(mystr.indexOf("so"));
// // to find the last index of a given word.
// console.log(mystr.lastIndexOf("so"));
// // to slice the string we use :
// console.log(mystr.slice(0,7));
// // to replace in string
// d=mystr.replace("love","like");
// console.log(d);

// // dates and date functions in javascript;
// let mydate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());

// //  DOM Manipulation in javascript.

// // to get an element by its id.
// let item1 = document.getElementById('click');
// console.log(item1);


// // to get an element by its class.
// let item2 = document.getElementsByClassName('container');
// console.log(item2);


// // to get elements by its tag.
// let item3 = document.getElementsByTagName('div');
// console.log(item3);

// // adding an element in the page via javascript.
// createdelement = document.createElement('p');
// createdelement.innerText = "This a created paragraph using javascript !"
// item3[2].appendChild(createdelement);


// // editing the background colour for conatiner's class first element only and applying any css.
// item2[0].style.background="cyan";

// // we can add or remove a class to any element using javascript.
// item2[1].classList.add("bgclass")
// item2[1].classList.remove ("bgclass")

// // getting innerhtml or innertext of any element.
// console.log(item2[0].innerHTML);
// console.log(item2[0].innerText);

// // document query selector 
// // it gives first class container.
// sel = document.querySelector('.container');
// console.log(sel);
// // it gives a list of all classes conatiner
// sel2 = document.querySelectorAll('.container');
// console.log(sel2);

// // refer mdn for more functions of documents with javascript

// javascript events.

// this are event listners in javascript.
// let item = document.getElementById('p1');
// let item1 = document.getElementsByClassName('container');
// p1.addEventListener('mousedown',function(){
//     item1[0].innerHTML="<center><h1>This make the Para Worth.</h1></center>"

// })
// p1.addEventListener('mouseup',function(){
//     item1[0].innerHTML="<center><h1>Welcome to this JavaScript Tutorial</h1></center>"

// })

// Arrow functions of javascript;
// these are a new syntax to write javascript functuion.

// function sum(a,b){
//     return a+b;
// }
// sum = (a,b)=>{
//     return a+b;
// }

// // setTimeout and setinterval
// // this will print the function after 5000 miliseconds, its first argument is a function only.

// logkaro=()=>{
//     console.log("log hua 5 seconds ke baad");
// }
// clr = setTimeout(logkaro,5000);
// clearTimeout=(clr);


// // set interval is a function for a timer after every time period.

// clr = setInterval(logkaro,5000);

// // set interval runs forever till stopped , to stop it clearinterval function is used.

// clearInterval(clr);

// //  there is a local storage 
// localStorage.setItem("name","devansh")
// console.log(localStorage.getItem("name"))
// localStorage.removeItem('name');
// localStorage.clear();

// // javascript object and JSON.
// obj = {"name":"singla"};
// // .stringify a json method to convert object to string.
// jso = JSON.stringify(obj);
// // this give the type i.e string.
// console.log(typeof jso);
// // this will give the object in string form.
// console.log(jso);

// // now to convert string to object.
// let str = JSON.parse(jso);
// console.log(typeof str);
// console.log(str);