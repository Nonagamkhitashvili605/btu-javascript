// // // function severalParams(...rest){
// // //     return rest;
// // // }
// // // const arr1 = [...arr];
// // // const obj = {
// // //     name: "nnino",
// // //     adress: {
// // //         city: "kutaisi",
// // //     },
// // //     age: 24,
// // // };

// // // const obj1 = { ...obj};

// // // console.log(obj2==obj);
// // // obj1.name = "mariami";
// // // obj1.adress.city = "tbilisi",
// // // console.log(obj1);
// // // console.log(obj1 == obj);

// // // const obj = {
// // //   name: "user",
// // //   age: 6,
// // //   address: [
// // //     {
// // //       city: "tbilisi",
// // //       address: "marjanishvili",
// // //       numr: "1",
// // //     },
// // //   ],
// // //   sibling: ["ana", "tekla", "nino"],
// // // };

// // // Workshop N3

// // // 1.შექმენი ფუნქცია reverseString(str) რომელიც აბრუნებს ტექსტს შებრუნებულად.

// // function reverseString(str) {
// //     return str.split('').reverse().join('');
// // }

// // console.log(reverseString("nona"));  

// // // 2. დაწერე ფუნქცია countVowels(str) რომელიც დაითვლის ხმოვანების რაოდენობას ტექსტში.  "javascript" => 3

// // function countVowels(str) {
// //   const vowels = "aeiouAEIOU";
// //   let count = 0;

// //   for (let char of str) {
// //     if (vowels.includes(char)) {
// //       count++;
// //     }
// //   }

// //   return count;
// // }


// // console.log(countVowels("javascript")); 

// // // 3.დაწერე ფუნქცია minMax(arr) რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ობიექტს {min: X, max: Y}.

// // function minMax(arr) {
// //   const min = Math.min(...arr);
// //   const max = Math.max(...arr);

// //   return { min: min, max: max };
// // }


// // console.log(minMax([2, 5, 1, 9, 3])); 


// // 4.დაწერე ფუნქცია isPalindrome(str) რომელიც ამოწმებს არის თუ არა სიტყვა პალინდრომი.  "level" => true, "world" => false.

// // function isPalindrome(str) {
// //   // ტექსტს გადავიყვანოთ პატარა ასოებში
// //   str = str.toLowerCase();

// //   // გადავაბრუნოთ სტრინგი და შევადაროთ ორიგინალს
// //   const reversed = str.split("").reverse().join("");
  
// //   return str === reversed;
// // }

// // // ტესტები
// // console.log(isPalindrome("level")); // true
// // // console.log(isPalindrome("world")); // false

// // 5.დაწერე ფუნქცია capitalizeWords(sentence) რომელიც წინადადებაში ყველა სიტყვის პირველ ასოს დიდად გადააქცევს.  "hello world" => "Hello World".
// // function capitalizeWords(sentence) {
// //   return sentence
// //     .split(" ")
// //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //     .join(" ");
// // }

// // // ტესტი
// // console.log(capitalizeWords("hello world")); 
// // //  "Hello World"

// // 6.დაწერე ფუნქცია countWords(sentence) რომელიც დაითვლის რამდენი სიტყვაა წინადადებაში.
// function countWords(sentence) {
  
//   sentence = sentence.trim();

  
//   if (sentence === "") return 0;

  
//   return sentence.split(/\s+/).length;
// }


// console.log(countWords("Hello world"));            
// console.log(countWords("   JavaScript is fun "));  
// console.log(countWords(""));                       

