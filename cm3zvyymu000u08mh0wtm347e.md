---
title: "Functional Programming with JavaScript"
datePublished: Wed Nov 27 2024 12:52:52 GMT+0000 (Coordinated Universal Time)
cuid: cm3zvyymu000u08mh0wtm347e
slug: functional-programming-with-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1732711883007/688126f0-1594-4ca4-ae80-fd6979076b0e.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1732711916696/c782be7d-2289-44e7-b719-a618f2eb1471.jpeg
tags: programming-blogs, javascript, functional-programming

---

ফাংশনাল প্রোগ্রামিং এর মূল কনসেপ্ট হচ্ছে ফাংশন দিয়ে প্রোগ্রাম তৈরি করা। এখন ফাংশন কী? ফাংশন হলো কোডের এমন একটি ব্লক যার ইনপুট (আর্গুমেন্ট) এবং আউটপুট (রিটার্ন) আছে। অর্থাৎ, ফাংশনটা ব্যাবহার করার সময় ইনপুট হিসেবে কিছু দেয়া হয় এবং ভেতরের প্রক্রিয়া (দ্বিতীয় বন্ধনীর ভেতরের কোড এক্সিকিউশন) শেষে আউটপুট পাওয়া যায়। তবে, কোন কোন সময় ফাংশনে ইনপুট অথবা আউটপুট অথবা দুইটাই থাকে না।

ফাংশনকে প্রোগ্রামের যে কোন জায়গায় কল করা (রান করা) যায়। ফলে, কোডে একই জিনিস বারবার লেখার প্রয়োজন হয় না, বরং ফাঙ্কশনের ভেতর রাখলেই হয়। এতে করে Code Redundancy কমে যায়।

নিচে ফাংশনের বেসিক গঠন দেওয়া হলোঃ

```javascript
/* add function */
function add(x, y) {
  let z = x + y; // code to be executed
  return z; // return
}

/* function call */
add(1, 2) 
```

এখানে, x ও y হলো প্যারামিটার। আর এই চলকগুলোর ভেতরে যে ইনপুট ভ্যালুগুলো প্রদান করা হয়, সেগুলোকে আর্গুমেন্ট বলে।

ফাংশনাল প্রোগ্রামিং এ ফাংশন প্রধানত তিন প্রকার, যথাঃ

১. পিউর ফাংশনঃ একটি ফাংশন যেটি একই আর্গুমেন্ট পাস করা হলে সবসময় একই জিনিস রিটার্ন করে।

```javascript
function sum(a, b) {
  return a + b
}

console.log(sum(1, 2)) // logs 3
console.log(sum(1, 2)) // logs 3 
```

২. ফার্স্ট ক্লাস ফাংশনঃ একটি ফাংশন যাকে ভেরিয়েবলের ভেতর রাখা হয়।

```javascript
let add = function (x, y) {  
    return x + y;  
} 
```

৩. হাইয়ার অর্ডার ফাংশনঃ একটি ফাংশন যা অন্য ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে, রিটার্ন করে বা উভয়টাই করতে পারে।

```javascript
/* Function as an Argument */
function add(x, y){
    return x + y;
}
function log(z){
    console.log(z);
}
log(add(1, 2)) // logs 3 
```

```javascript
/* Returning Function */
function add(x){
    return function (y){
        return x + y
    };
}
add(1)(2) // 3 
```

```javascript
/* Both */
function square(x){
    return x * x;
}
function add(x){
    return function (y){
        return x + y
    };
}
add(square(2))(2) // 6 
```

এখানে, এক ফাংশনের ইনপুটের ভিতর আরেক ফাংশনের আউটপুট দেওয়াকে ‘ফাংশন কম্পোজিশন’ বলে। তাছাড়া, উপরের উদাহরণের মতো ()()… এভাবে ফাংশন লেখাকে ‘কারিং’ বলে। হাইয়ার অর্ডার ফাংশনে কোনো ফাংশন রিটার্ন করা হলে এভাবে ব্যাবহার করা হয়। এমনকি এভাবে নেস্টিং করা যায় আরও যেমনঃ add(1)(2)(3)।

নিচে আরও কিছু গুরুত্বপূর্ণ কনসেপ্ট উল্লেখ করা হলো। যেমনঃ

১. কলব্যাক ফাংশনঃ এমন ফাংশন যা অন্য ফাংশন একটি আর্গুমেন্ট হিসেবে পাস করা হয় (কল না করেই; অর্থাৎ ফার্স্ট ব্র্যাকেট ছাড়াই) এবং সেটি ঐ ফাংশন যে কোনো জায়গায় কল করা যায়।

```javascript
function a(){
  return "up!"
}
function b(fn){
  return "What's" + fn();
}

b(a); // What's up! 
```

২. রিকার্সিভ ফাংশনঃ এমন ফাংশন যা নিজেকে নিজেই একটি সীমার মধ্যে বারবার কল করে (যতক্ষণ না শর্ত পূরণ হয়)।

```javascript
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
} 
```

```javascript
function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

sum(3) // 3 + 2 + 1 = 6
```

---

Content Writing & Graphic Design: [Mohammad Sefatullah](https://www.linkedin.com/in/mosefatullah/)