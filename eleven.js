/* 
    ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো 
    (অর্থাৎ একটা  অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে।
    আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। 
    সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান
    একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: {
      web: ["html", "css", "js", "react", "express", "moongoDB"],
      app: ["android", "ios", "flutter", "react-native"],
      AI: ["tensolflow.js", "NLP", "Computer Vision"],
    },
  },
};

/* 
    ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে 
    যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
*/
console.log("company", company?.wet?.work);
