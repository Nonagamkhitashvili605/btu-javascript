// სავარჯიშო 1: 
// 1. შექმენი ცვლადი "name" შენი სახელით.
// 2. შექმენი ცვლადი "age" შენი ასაკით.
// 3. დაბეჭდე ისინი ერთ წინადადებაში console.log–ით

// let My_name="nona";
// let age=34;
// let fullname="hi my name is" + " "+ My_name +" "+ age;
// console.log(fullname);

// დაწერეთ კოდი რომელიც მნიშვნელობას გაუცვლის ორ ცვლადს მესამე ცვლადის გამოყენების გარეშე
// დაწერეთ ფუნქცია რომელიც ორი რიცხვიდან შემოწმებს რომელია უფრო დიდი
// დაწერეთ კოდი რომლიც დააბრუნებს მასივში არსებული რიცხვების ჯამს იტერატორის გამოყენებით

// let a = "hello";
// let b = "world";
// console.log('before: a=${a}, b = ${b}');
// [a, b] = [b, a];
//  console.log(`After: a = ${a}, b = ${b}`);

// function findLargerNumberWithMathMax(num1, num2) {
// return Math.max(num1, num2);
// }
  

//   console.log(findLargerNumberWithMathMax(20, 5));

// function sumArrayWithIterator(arr){
//     let sum = 0;
//     for(const number of arr){
//         sum +=number;
//     }
//     return sum;
// }
// const numbers = [1,2,3,4,5];
// const totalSum = sumArrayWithIterator(numbers);
// console.log(totalSum);


// დაწერე კოდი რომელიც დათვლის რამდენი ციფრია რიცხვში

// დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებულ რიცხვს შეამოწმევს არის თუ არა მარტივი

// დაწერე ფუნქცია რომელიც შეამოწმებს ორი რიცხვის უდედესს საერთო გამყოფს

// დაწერე ფუნცქია რომელიც ითვლის ა100მდე და ისეთი რიცხვისთვის რომელიც იყოფა მხოლოდ სამზე 
// აბრუნებს იყოფა სამზე, ისეთი რიცხვისთვის რომელიც იყოფა მხოლოდ ხუთზე აბრუნებს იყოფა ხუთზე და თუ რიცხვი ორივეზე იყოფა აბრუნებს იყოფა ორივეზე

// function countDigitsLoop(number) {
//   // Handle the case of 0 separately as the loop won't run
//   if (number === 0) {
//     return 1;
//   }
//   // Make the number positive to handle negative inputs correctly
//   let absNumber = Math.abs(number); 
//   let count = 0;
//   while (absNumber > 0) {
//     absNumber = Math.floor(absNumber / 10);
//     count++;
//   }
//   return count;
// }

// // Example usage:
// console.log(countDigitsLoop(12345)); // Output: 5
// console.log(countDigitsLoop(0));    // Output: 1
// console.log(countDigitsLoop(-987)); // Output: 3 (only counts digits, not the sign)

function prime (number){
for (let i = 2; i<number; i++){
    if (number%i==0)
    {
return false
    }
        
}
return true
}
console.log(prime(5))
