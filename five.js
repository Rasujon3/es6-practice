/* 
    ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে 
    array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে
    গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

const arrays = [12, 23, 45, 56, 67, 78, 89, 90];
const result = [];
arrays.map((array) => result.push(array * 5));
console.log(result);
