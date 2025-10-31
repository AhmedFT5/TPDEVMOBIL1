//exercice 1
var x = 5;
let y = 10;
const z = 15;

x = 6;    // fonctionne (var)
y = 11;   // fonctionne (let)
z = 16;   // ERREUR: TypeError — assignment to constant variable
console.log(x, y, z);
//exercice 2
function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible ici seulement";
  }
  console.log(a); // affiche la valeur
  console.log(b); // ReferenceError: b is not defined
}
testScope();
//exercice 3
function sayHello(name) {
  return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;
console.log(sayHello("Ali"));
console.log(sayHelloArrow("Sara"));

//exercice 4
const person = {
  name: "Sara",
  sayHello: function () { console.log("Bonjour " + this.name); },
  sayHelloArrow: () => { console.log("Bonjour " + this.name); },
};
person.sayHello();        // Bonjour Sara
person.sayHelloArrow();   // Bonjour undefined (ou espace global), car `this` dans arrow ne lie pas l'objet

import message, { PI, carre } from "./mathUtils.js";
message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));
//exercice 5,6,7
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);

const nums = [1,2,3,4,5];
console.log(nums.map(n => n * 2));
console.log(nums.filter(n => n % 2 === 0));
console.log(nums.reduce((sum, n) => sum + n, 0));
console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));
//exercice 8
const user = { id: 1, name: "Ali", city: "Rabat" };
const { name, city } = user;
console.log(`${name} habite à ${city}`);

const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);
//exercice 9,
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));
//exercice 10
// Optionnel : dans Node <18 installer node-fetch (npm i node-fetch)
// import fetch from 'node-fetch';

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}
getUsers();
//exercice 11,12,13

// Template literal
const nameN = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${nameN}, il est ${hour}h`);

// Spread / Rest
const arr1 = [1,2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
function sum(...numbers) { return numbers.reduce((a,b)=>a+b,0); }
console.log(sum(1,2,3,4));

// Optional chaining / Nullish coalescing
const settings = { theme: null };
console.log(settings.theme ?? "light");
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email);
console.log(user2.address?.city);
//Gestion des produits
const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");