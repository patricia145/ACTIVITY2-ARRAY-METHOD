// 1. concat()
arr1 = ["Cecile", "Lone"];
arr2 = ["Emil", "Tobias", "Linus"];
let totalArr = arr1.concat(arr2);
console.log(totalArr.join(", "));

// 2. push()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// 3. unshift()
array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// 4. pop()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

// 5. shift()
array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// 6. sort()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// 7. slice()
slicedFruits = ["Banana", "Orange", "Apple", "Mango"];
slicedFruits.slice(1, 3);
console.log(slicedFruits);


// 8. splice
let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthsArray.splice(0, 2, "January");
console.log(monthsArray);

monthsArray.splice(5, 3, "May");  
console.log(monthsArray); 
