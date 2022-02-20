/* 

    ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে 
    জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল 
    ডিক্লেয়ার করে ফেলো।

    ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা 
    ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট 
    ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান 
    তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

*/

const a = 5;
const b = 6;
const result = a + b;
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(`${a} + ${b} = ${result}`);
console.log(
  `His name is ${person.firstName} ${person.lastName} and age is ${person.age} and his eye color is ${person.eyeColor}`
);
