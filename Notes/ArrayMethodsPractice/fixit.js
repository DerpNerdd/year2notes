const drinks = [
  "Soda",
  "Coffee",
  "Lemonade",
  "Iced tea",
  "Juice",
  "Milkshake",
  "Water",
  "Milk",
  "Beer",
  "Martini",
  "Margarita",
  "Wine",
  "Daiquari",
];

//
let mDrinks = drinks.filter(drink => drink.startsWith("M"));
console.log(mDrinks);
// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']
//You needed to add a condition to filter out drinks that start with "M"
/////////////////////////////////////////////////////////////////////
const colors = [
  "red",
  "black",
  "white",
  "blue",
  "purple",
  "orange",
  "green",
  "yellow",
];

let newArray = colors.map((color, index) => {
  return { color, index };
});
console.log(newArray);
// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];
//You needed to add color into one of the parameters as well as returning it
///////////////////////////////////////////////////////////
let pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

pets = pets.map((pet) => {
  return capitalize(pet);
});
console.log(pets);
// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////
//Problem with this is that capitalize was not a function and needed to be created, also pets needed to be changed to let instead of const since it is being edited through the capitalize
