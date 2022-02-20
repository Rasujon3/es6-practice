/* 
    ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের
    কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে 
    আউটপুট দিবে। 
*/

dividedBy5 = (number) => {
  return number / 5;
};
const result1 = dividedBy5(15);
// console.log(result1);

/* 
    ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে।
    সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার 
    এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে 
    করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/
addMul = (num1, num2) => {
  const add1 = num1 + 2;
  const add2 = num2 + 2;
  const multiply = add1 * add2;
  return multiply;
};
const result2 = addMul(2, 2);
// console.log(result2);

/* 
    ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। 
    যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে 
    সেই রেজাল্ট রিটার্ন করবে। 
*/
multiply3 = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
const result3 = multiply3(2, 2, 2);
// console.log(result3);

/* 
    ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। 
    ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা 
    ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
    ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
addMul = (num1, num2) => {
  const add1 = num1 + 2;
  const add2 = num2 + 2;
  const multiply = add1 * add2;
  return multiply;
};
const result2 = addMul(2, 2);
// console.log(result2);
