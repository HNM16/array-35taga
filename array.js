// task 1
// function func(arr) {
//     return arr.length ? arr[0] : null;
//   }
//   console.log(func([1, 2, 3]));
  
  // task 2
//   function func(...e) {
//     return e.map((el) => el);
//   }
//   console.log(func(1, 2));
  
  // task 3
//   function func(arr) {
//     return [...arr].reverse();
//   }
//   console.log(func([1, 2, 3, 4]));
  
  // task 4
//   function func(arr) {
//     return arr.map((num) => num + 1);
//   }
//   console.log(func([0, 1, 2, 3]));
  
  // task 5
//   function func(arr) {
//     return arr.length ? arr[arr.length - 1] : null;
//   }
//   console.log(func([1, 2, 3]));
  
  // task 6
//   function func(arr) {
//     return arr.join(" ");
//   }
//   console.log(func(["a", "b", "c", "d", "e", "f"]));
  
  // task 7
//   function func(arr, value) {
//     return arr.includes(value);
//   }
//   console.log(func([1, 2, 3, 4, 5, 6, 7], 2));
  
  // task 8
//   function func(arr, value) {
//     return arr.indexOf(value);
//   }
//   console.log(func(["il", "stepik", "ghy", "abc"], "ghy"));
  
  // task 9
//   function func(...arr) {
//     return arr.flat();
//   }
//   console.log(func([1, 2], [3, 4]));
  
  // task 10
//   function func(arr) {
//     return arr.join(" ");
//   }
//   console.log(func(["9.2", "4.2"]));

// task 11
// function func(...arr) {
//     return arr.flat();
//   }
//   console.log(func([1, 2], [3, 4]));
  
  // task 12
//   function func(arr, value) {
//     return arr.indexOf(value);
//   }
//   console.log(func([1, 2, 3], 2));
  
  // task 13
//   function func(arr) {
//     return [...new Set(arr)];
//   }
//   console.log(func([1, 2, 2, 3, 4, 4, 5, 6, 6]));
  
  // task 14
//   function func(arr) {
//     return arr.filter((num) => num > 0);
//   }
//   console.log(func([-1, 2, -3, 4, -5]));
  
  // task 15
//   function func(arr) {
//     return arr.reduce((sum, num) => sum + num, 0) / arr.length;
//   }
//   console.log(func([2, 4, 6, 8, 10]));
  
  // task 16
//   function func(arr) {
//     return arr.join("") === arr.slice().reverse().join("");
//   }
//   console.log(func([1, 2, 3, 2, 1]));
  
  // task 17
//   function func(min, max, arr) {
//     return arr.filter((num) => num >= min && num <= max);
//   }
//   console.log(func(3, 8, [1, 5, 95, 0, 4, 7]));
  
  // task 18
//   function func(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
//   }
//   console.log(func([1, 2, 3, 4, 5]));
  
  // task 19
//   function func(arr) {
//     return arr.map((el) => typeof el);
//   }
//   console.log(func(["214", true, false, 2.15, [], null]));
  
  // task 20
//   function func(arr) {
//     return arr.map((str) => str.length);
//   }
//   console.log(func(["hello", "world"]));
  
  // task 21
//   function func(arr) {
//     const cubes = Math.sqrt(arr[0]);
//     const cube = cubes ** 3;
//     return cube === arr[1];
//   }
//   console.log(func([4, 8]));
  
  // task 22
//   function func(arr) {
//     return arr.map((num) => -num);
//   }
//   console.log(func([1, 2, 3, 4, 5]));
  
  // task 23
//   function func(arr) {
//     return arr.map((num) => num * 2);
//   }
//   console.log(func([2, 5, 3]));
  
  // task 24
//   function func(arr) {
//     return arr.filter((num) => num > 5).reduce((sum, num) => sum + num, 0);
//   }
//   console.log(func([12, 14, 28, 47, 55, 100]));
  
  // task 25
//   function func(arr) {
//     return arr.filter((el) => typeof el === "number");
//   }
//   console.log(func(["A", 0, "Stepik", 1234, "C#", "1234"]));



   // #CLASSTASK

// 1

// function func(a){
//    return a.reduce((acc,value)=>{
//         return acc+(value*value*value)
//     }, 0)
    
// }
// console.log(func([1,5,9]));

// 2

// function func(a){
//     return a.filter(function(number){
//         return number
//     })
// }
// console.log(func([0,1,false,'']));


// 3
// function func(...a){
// let prev =a[0]
// let ans=false
// a.forEach((e)=>{
//     if (prev==e){
//         ans = true
//         prev = e
//     }
//     else {
//         ans=false
//         prev=e
//     }
// })   
// return ans
// }
// console.log(func(true, true,true));

   

//4 

// function func(a){
//     let cnt = 0;
//     a.forEach((el,i) =>{
//        if(i % 2 == 0){
//         cnt += el;
//        }
//     })
// return cnt * a.at(-1)

// }
// console.log(func([2,3,4,5]));

//5 

// function func(a,b){
//     let ans = true;
//     a.forEach((el, i )=> {
//         if ( el !=b[i]){
//             ans =false
//         }
//     });
//     return ans
// }

// console.log(func([1,2,3,4,5],[1,2,3,4,5]));

//6

// function func(arr1, arr2) {
//   let len = arr1.length > arr2.length ? arr1.length : arr2.length;
//   let result = [];
//   for (let i = 0; i < len; i++) {
//      result.push(arr1[i],arr2[i]);
// }
// return result.filter((el) =>el != undefined);
// }
// console.log(func([1, 2, 3, 4, 1, 2, 3], [5, 6, 7, 8]));

//7 
// function func(arr) {
//     let arr1 = []
//     let arr2 = []
//     for (let i = 1; i <= arr; i++) {
//         arr1.push(i)
//     }
//     for (let i = 1; i <= arr; i++) {
//         arr2.push(arr1.map((el) => el * i))
//     }
//     return arr2
// }
// console.log(func(3));

//8 

// function func (a){
//     return a.filter(ele => a.indexOf(ele) == a.lastIndexOf(ele))   
// }
// console.log( func([1,2,3,4,5,2,4,5]));


//9
// function func(number) {
//     let second = "+992 ";
//     number.forEach((digit, index) => {
//         if (index === 0) {
//             second += "(" + digit;
//         } else if (index === 3) {
//             second += ") " + digit;
//         } else if (index === 6) {
//             second += "-" + digit;
//         } else {
//             second += digit;
//         }
//     });
//     return second;
// }

// console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//10
// function func(arr) {
//      let result = 0;
//      arr.forEach((second) => {
//          result += second.reduce((acc, val) => (acc * val)+val, 1);
//      });
//      return result;
 
// }

// console.log(func([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));

