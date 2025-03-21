/*
============================== Local Storage in JavaScript ==============================
*/
// Local Storage is a built-in JavaScript feature.
// Local Storage data persists even after the browser is closed and reopened.

// 1. Features of Local Storage
// ✅ Persistent Storage – Data remains stored even after the browser is closed.
// ✅ Key - Value Storage – Stores data in key - value pairs(both as strings).
// ✅ Up to 5MB Storage – Most modern browsers allow storing up to 5MB of data per origin(domain).
// ✅ Client - Side Only – Local storage does not send data to the server unless manually retrieved and sent.
// ✅ Synchronous API – Operations are blocking, meaning they execute one after another.

// 2. How to Use Local Storage in JavaScript
// Local Storage provides five key methods:

// You can store data using the .setItem() method:
// const setUserDataToLocalStorage = localStorage.setItem("username", "JohnDoe");

// You can retrieve data using .getItem():
// let getUserDataFromLocalStorage = localStorage.getItem("username");
// console.log(getUserDataFromLocalStorage); // Output: JohnDoe

// You can remove a particular item using .removeItem():
// localStorage.removeItem("username");

// You can remove all stored items, using .clear():
// localStorage.clear();

// To see how many items are stored, use .length:
// console.log(localStorage.length);

// 3. Storing Complex Data (Arrays & Objects)
// Local Storage only stores strings. If you want to store objects or arrays, you must convert them into a string using JSON.stringify(), and retrieve them using JSON.parse().

// Storing an Array
// let fruits = ["Apple", "Banana", "Cherry"];
// localStorage.setItem("myFruits", JSON.stringify(fruits));

// Retrieving and Parsing the Array
// let storedFruits = JSON.parse(localStorage.getItem("myFruits"));
// console.log(storedFruits); // Output: ["Apple", "Banana", "Cherry"]

// 4. Checking If a Key Exists
// To check if a key exists in local storage, you can use:
// if (localStorage.getItem("username") !== null) {
// console.log("User exists");
// } else {
// console.log("No user found");
// }

// 5. Practical Use Cases of Local Storage
// 🔹 Remembering user preferences (e.g., theme settings, language selection)
// 🔹 Storing shopping cart data in an e-commerce website
// 🔹 Caching API responses for faster load times
// 🔹 Saving form data so users don’t lose progress on a page reload
// 🔹 Remembering login sessions (although not secure for sensitive data like passwords)

// 6. Limitations & Security Concerns
// ❌ Limited Storage – Only 5MB per origin, which may not be enough for large applications.
// ❌ No Expiry Time – Unlike cookies, local storage data does not expire unless manually cleared.
// ❌ Not Secure for Sensitive Data – Data is stored in plaintext and can be accessed via JavaScript, making it vulnerable to cross - site scripting(XSS) attacks.

// 7. Alternative Storage Options
// Session Storage – Similar to local storage but gets cleared when the browser is closed.
// Cookies – Can store small data (4KB max) and has expiration settings.
// IndexedDB – A more advanced option for storing large amounts of structured data

/*
============================== Local Storage Simple Uses ==============================
*/

function addToCart() {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("productQuantity");

    const Name = productName.value;
    const Quantity = productQuantity.value;

    displayProduct(Name, Quantity);
    setItemToLocalStorage(Name, Quantity);

    productName.value = "";
    productQuantity.value = "";
}

function displayProduct(productName, productQuantity) {
    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.textContent = `
    ${productName} : ${productQuantity} pcs.
    `
    productContainer.appendChild(li);
}

function displayProductFromLocalStorage() {
    const products = getItemFromLocalStorage();

    for (let product in products) {
        displayProduct(product, products[product]);
    }
}

function getItemFromLocalStorage() {
    let cart = {};
    const getItem = localStorage.getItem("cart");

    if (getItem) {
        cart = JSON.parse(getItem);
    }
    return cart;
}

function setItemToLocalStorage(productName, productQuantity) {
    const cart = getItemFromLocalStorage();

    cart[productName] = productQuantity;

    localStorage.setItem("cart", JSON.stringify(cart));
}

displayProductFromLocalStorage();
