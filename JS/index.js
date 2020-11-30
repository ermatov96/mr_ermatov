// let car={
//     model:'Toyoto',
//     make:'Estima',
//     year:2016,
//     price:50000
// }

// function showp(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string')
//         console.log(key,obj[key]);
//     }

// }
// showp(car)

//0-50  F
//51-60 D
//61-70C
//71-80 B
//81-100 A

// const marks = [81, 86, 74, 59, 77]
//    console.log( calculateGrade(marks));

// function calculateGrade(marks) {
//     let avrg = calculateAvarage(marks);
//     if (avrg < 50) return 'F';
//     if (51 < avrg < 60) return 'D';
//     if (61 < avrg < 70) return 'C';
//     if (71 < avrg < 80) return 'B';
//     return 'A';

// }

// function calculateAvarage(array) {
//     let sum = 0;
//     for (let value of marks)
//         sum += value;
//     let avrg = sum / marks.length;
//     return avrg;
// }
// ShowPrimeNumbers(49);

// function ShowPrimeNumbers(limit){
//     isPrime(limit)
  
//     for (let number =2; number<=limit;  number++){
    
//         if(isPrime(number)) console.log(number);}
//     }

// function isPrime(number){
    
//     let isPrime=true;
//     for (let factor =2; factor<number;  factor++)
//         if(number%factor===0)
//         return false; 
//          return true;
// }

  
  //  return i;


//   function createCircle(radius){
//   return {
//     radius,

//     draw(){
    
//       console.log('doira');
//       console.log(yuza);
//     }
  
//   }; 

// }
// // constructor function
// function Circle(radius){
//   this.radius=radius;
//   this.draw=function(){
//     console.log('doira');
//   }
// }
// const circle=new Circle(1);
// circle.color='green';
// circle.yuza=function(){
//   const yuz =circle.radius*3.14;
//   console.log(yuz);
// }
// circle.yuza();
// console.log(circle);
// const circle1=createCircle(1);
// const circle2=new Circle(1);
// console.log(circle1.constructor);
// console.log(circle2.constructor);


//  function Circle(radius){
//   this.radius=radius;
//    this.draw=function(){
//     console.log('doira');
//    }
//    console.log(radius);
//   }
// Circle.call({},5);
// const circle2=new Circle(5);
// Circle.apply({},[5]);

// git
const circle={
  radius:1,
  draw(){
    console.log('doira');
  }
};
  // for(let key in circle)
  // console.log(key, circle[key]); 
  for(let entry of Object.entries( circle))
  console.log(entry);

