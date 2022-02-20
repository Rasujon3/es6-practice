/* 
    ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। 
    সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা 
    সেই অবজেক্টকে find দিয়ে বের করো। 
*/
const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 5000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const result = products.find((product) => product.price == 5000);
console.log(result);
