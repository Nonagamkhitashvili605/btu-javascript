// // სავარჯიშო 1: 
// // 1. შექმენი ცვლადი "name" შენი სახელით.
// // 2. შექმენი ცვლადი "age" შენი ასაკით.
// // 3. დაბეჭდე ისინი ერთ წინადადებაში console.log–ით

// // let My_name="nona";
// // let age=34;
// // let fullname="hi my name is" + " "+ My_name +" "+ age;
// // console.log(fullname);

// // დაწერეთ კოდი რომელიც მნიშვნელობას გაუცვლის ორ ცვლადს მესამე ცვლადის გამოყენების გარეშე
// // დაწერეთ ფუნქცია რომელიც ორი რიცხვიდან შემოწმებს რომელია უფრო დიდი
// // დაწერეთ კოდი რომლიც დააბრუნებს მასივში არსებული რიცხვების ჯამს იტერატორის გამოყენებით

// // let a = "hello";
// // let b = "world";
// // console.log('before: a=${a}, b = ${b}');
// // [a, b] = [b, a];
// //  console.log(`After: a = ${a}, b = ${b}`);

// // function findLargerNumberWithMathMax(num1, num2) {
// // return Math.max(num1, num2);
// // }
  

// //   console.log(findLargerNumberWithMathMax(20, 5));

// // function sumArrayWithIterator(arr){
// //     let sum = 0;
// //     for(const number of arr){
// //         sum +=number;
// //     }
// //     return sum;
// // }
// // const numbers = [1,2,3,4,5];
// // const totalSum = sumArrayWithIterator(numbers);
// // console.log(totalSum);


// // დაწერე კოდი რომელიც დათვლის რამდენი ციფრია რიცხვში

// // დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებულ რიცხვს შეამოწმევს არის თუ არა მარტივი

// // დაწერე ფუნქცია რომელიც შეამოწმებს ორი რიცხვის უდედესს საერთო გამყოფს

// // დაწერე ფუნცქია რომელიც ითვლის ა100მდე და ისეთი რიცხვისთვის რომელიც იყოფა მხოლოდ სამზე 
// // აბრუნებს იყოფა სამზე, ისეთი რიცხვისთვის რომელიც იყოფა მხოლოდ ხუთზე აბრუნებს იყოფა ხუთზე და თუ რიცხვი ორივეზე იყოფა აბრუნებს იყოფა ორივეზე

// // function countDigitsLoop(number) {
// //   // Handle the case of 0 separately as the loop won't run
// //   if (number === 0) {
// //     return 1;
// //   }
// //   // Make the number positive to handle negative inputs correctly
// //   let absNumber = Math.abs(number); 
// //   let count = 0;
// //   while (absNumber > 0) {
// //     absNumber = Math.floor(absNumber / 10);
// //     count++;
// //   }
// //   return count;
// // }

// // // Example usage:
// // console.log(countDigitsLoop(12345)); // Output: 5
// // console.log(countDigitsLoop(0));    // Output: 1
// // console.log(countDigitsLoop(-987)); // Output: 3 (only counts digits, not the sign)

// // function prime (number){
// // for (let i = 2; i<number; i++){
// //     if (number%i==0)
// //     {
// // return false
// //     }
        
// // }
// // return true
// // }
// // console.log(prime(5))


// //1. დაწერე ფუნქცია რომელიც ამოწმებს რიცხვი იყოფა თუ არა ხუთზე
// // function isDivisibleByFive(number) {
// //   if (number % 5 === 0) {
// //     return true;  
// //   } else {
// //     return false; 
// //   }
// // }


// // console.log(isDivisibleByFive(10)); 

// //2. დაწერე ფუნქცია რომელიც პარამეტრად მიიღებს ორ რიცცხვს და დაითვლის 
// // უკუთვლით პირველი რიცხვიდან მეორე რიცხვამდე. შეამოწმეთ რომ პირველი რიცხვი მეტი იყოს მეორეზე


// // function countdown(start, end) {
// //   if (start <= end) {
// //     console.log("პირველი რიცხვი უნდა იყოს უფრო დიდი მეორეზე!");
// //     return;
// //   }

// //   for (let i = start; i >= end; i--) {
// //     console.log(i);
// //   }
// // }


// //  countdown(20, 5);
// // //  countdown(2, 9);

// // 3.დაწერე ფუნქცია რომელიც დაბეჭდავს ‘javscript’-ს იმდენჯერ რა მნიშვნელობის პარამეტრსაც გადავცემთ

// // function printJavascript(times) {
// //   for (let i = 0; i < times; i++) {
// //     console.log("javascript");
// //   }
// // }


// // printJavascript(3);

// // 4. დაწერე ფუნქცია რომელიც ლუპის გამოყენებით დაბეჭდავს პირველ 5 ლუწ რიცხვს.

// // function printEvenNumbers() {
// //   let count = 0;   
// //   let number = 2;

// //   while (count < 5) {
// //     console.log(number);
// //     number += 2;   
// //     count++;
// //   }
// // }


// // printEvenNumbers();

// // 5.დაწერე ფუნქცია რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს მათ საშუალოს

// // function average(numbers) {
// //   if (numbers.length === 0) {
// //     return 0; 
// //   }

// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }

// //   return sum / numbers.length;
// // }


// // // console.log(average([5, 15, 25]));     
// // console.log(average([]));        

// 6.დაწერე ფუნქცია რომელიც მიიღებს ორნიშნა რიცხვს და
//  დააბრუნებს ამ ორ ნიშნა რიცხვის ციფრების ჯამს. მაგალითი (87) => 8 + 7 = 15

// function sumOfDigits(number) {
//   if (number < 10 || number > 99) {
//     return "გთხოვთ შეიყვანოთ ორნიშნა რიცხვი!";
//   }

//   let tens = Math.floor(number / 10); // პირველი ციფრი (ათეული)
//   let ones = number % 10;             // მეორე ციფრი (ერთეული)

//   return tens + ones;
// }

// // გამოყენება:
// console.log(sumOfDigits(87)); // 15  (8 + 7)
// console.log(sumOfDigits(42)); // 6   (4 + 2)
// console.log(sumOfDigits(9));  // "გთხოვთ შეიყვანოთ ორნიშნა რიცხვი!"

// 7.დაწერე ფუნქცია რომელიც მიიღებს განსხვავებული ტიპების მნიშვნელობების მასივს და 
// დააბრუნებს მნიშვნელობების ნაცვლად შესაბამისს ტიპებს, 
// თუ ყველა ტიპი ერთი და იგივეა დააბრუნეთ შესაბამისი ტიპი მხოლოდ ერთხელ

// function getTypes(arr) {
//   if (arr.length === 0) {
//     return [];
//   }

//   // ყველა ტიპის ამოღება
//   let types = arr.map(item => typeof item);

//   // უნიკალური ტიპების მიღება
//   let uniqueTypes = [...new Set(types)];

//   // თუ ყველა ერთნაირია → მხოლოდ ერთი ტიპი დავაბრუნოთ
//   if (uniqueTypes.length === 1) {
//     return uniqueTypes[0];
//   }

//   return uniqueTypes;
// }

// // გამოყენება:
// console.log(getTypes([1, 2, 3, 4]));       // "number"
// console.log(getTypes(["a", "b", "c"]));    // "string"
// console.log(getTypes([1, "a", true]));     // ["number", "string", "boolean"]
// console.log(getTypes([]));                 // []

// 8.დაწერე რიცხვი რომელიც  მიიღებს რიცხვების მასივს სადაც n > 2 და 
// დააბრუნებს რომელია ამ რიცხვებში ყველაზე დიდი

// function getMaxNumber(numbers) {
//   if (numbers.length <= 2) {
//     return "მასივში უნდა იყოს მინიმუმ 3 რიცხვი!";
//   }

//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// // გამოყენება:
// console.log(getMaxNumber([5, 12, 7, 20, 3])); // 20
// console.log(getMaxNumber([100, 50, 75]));     // 100
// console.log(getMaxNumber([1, 2]));            // "მასივში უნდა იყოს მინიმუმ 3 რიცხვი!"
// 9. დაწერეთ ფუნქცია რომელიც დააგენერირებს რიცხვს 1 დან 20ს შორის და prompt()მეთოდის გამოყენებით შეეკითხება იუზერს რომელი რციხვია ჩაფიქრებული. რამდენი იუზერი უნდა ეცადოს გამოცნობას და 
// რამდენ ცდაშიც გამოიცნობს ის რაოდენობა დააბრუნოს ფუნქციამ

// function guessNumberGame() {
//   // ვაგენერირებთ შემთხვევით რიცხვს 1-დან 20-ის ჩათვლით
//   const secret = Math.floor(Math.random() * 20) + 1;

//   let attempts = 0;
//   let guess;

//   // ვიმეორებთ სანამ სწორად გამოიცნობს
//   while (true) {
//     guess = parseInt(prompt("გამოიცანე რიცხვი 1-დან 20-ის ფარგლებში: "), 10);
//     attempts++;

//     if (guess === secret) {
//       alert(`გილოცავ! შენ გამოიცანი ${attempts} ცდაში 🎉`);
//       return attempts;
//     } else if (guess > secret) {
//       alert("ჩაფიქრებული რიცხვი უფრო პატარაა ⬇️");
//     } else {
//       alert("ჩაფიქრებული რიცხვი უფრო დიდია ⬆️");
//     }
//   }
// }

// // გამოყენება (ბრაუზერში):
// guessNumberGame();


// 10. დაწერეთ ფუნქციას ფუნქცია რომელიც მიიღებს საათს წუთს და წამს და 
// დააბრუნებს რამდენი წამია გასული შუაღამიდან გადაცემულ დრომდე

// function secondsSinceMidnight(hours, minutes, seconds) {
//   // კონვერტირება წამებში
//   const totalSeconds = hours * 3600 + minutes * 60 + seconds;
//   return totalSeconds;
// }

// // გამოყენება:
// console.log(secondsSinceMidnight(2, 30, 15)); // 9015
// console.log(secondsSinceMidnight(0, 0, 0));   // 0
// console.log(secondsSinceMidnight(12, 0, 0));  // 43200

// 11. დაწერეთ ფუქნცია რომელიც ბეჭდავს რიცხვებს 1 დან nმდე(გადაცემული პარამეტრი) და
//  ასევა n dan ერთამდე. მაგალითი: (3) => 12321

//  function printSequence(n) {
//   let result = "";

//   // 1 დან n-მდე
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }

//   // n დან 1-მდე
//   for (let i = n - 1; i >= 1; i--) {
//     result += i;
//   }

//   console.log(result);
// }

// // გამოყენება:
// printSequence(3); // 12321
// printSequence(5); // 123454321


// 12. დაწერეთ ფუნქცია რომელიც მიიღებს რიცხვს და დაწერს შემდეგ თანმიმდევრობას => თუ რიცხვი ლუწია გაყავით ორზე, თუ კენტი გაამრავლეთ სამზე და დაუმატეთ ერთი მანამ სანამ არ მიიღებთ 1ს. მაგალითი: (3) => 3*3+1=10, 10/2=5, 5*3+1=16, 16/2 = 8, 8/2=4, 4/2=2, 2/2=1. 
// დააბრუნეთ შედეგები მასივში

// function collatzSequence(n) {
//   if (n < 1) {
//     return "გთხოვთ შეიყვანოთ დადებითი მთელი რიცხვი!";
//   }

//   const result = [n];

//   while (n !== 1) {
//     if (n % 2 === 0) {
//       n = n / 2;
//     } else {
//       n = n * 3 + 1;
//     }
//     result.push(n);
//   }

//   return result;
// }

// // გამოყენება:
// console.log(collatzSequence(3));
// // გამოიტანს: [3, 10, 5, 16, 8, 4, 2, 1]

// console.log(collatzSequence(6));
// // გამოიტანს: [6, 3, 10, 5, 16, 8, 4, 2, 1]

// 13. დაწერეთ ფუნქცია რომელიც ამოწმებს რიცხვი არის თუ არა ორის ხარსიხი
// function isPowerOfTwo(n) {
//   if (n < 1) return false; // უარყოფითი და 0 რიცხვები არ არიან 2-ის ძალა

//   return (n & (n - 1)) === 0;
// }

// // გამოყენება:
// console.log(isPowerOfTwo(1));  // true  (2^0)
// console.log(isPowerOfTwo(2));  // true  (2^1)
// console.log(isPowerOfTwo(8));  // true  (2^3)
// console.log(isPowerOfTwo(10)); // false
// console.log(isPowerOfTwo(0));  // false

// 14.დაწერე ფუნცქია რომელიც ითვლის 100მდე და ისეთი რიცხვისთვის რომელიც იყოფა

// მხოლოდ სამზე აბრუნებს იყოფა სამზე, ისეთი რიცხვისთვის რომელიც იყოფა მხოლოდ 
// ხუთზე აბრუნებს იყოფა ხუთზე 
// და თუ რიცხვი ორივეზე იყოფა აბრუნებს იყოფა ორივეზე

// function checkDivisibility() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i + " იყოფა ორივეზე");
//     } else if (i % 3 === 0) {
//       console.log(i + " იყოფა სამზე");
//     } else if (i % 5 === 0) {
//       console.log(i + " იყოფა ხუთზე");
//     }
//   }
// }

// // გამოყენება:
// checkDivisibility();
