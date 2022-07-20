var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}

var petsWithAge = [];
pets.forEach(pets=>{
  const pet = pets;
  pet.age = getAge(pet);
  petsWithAge.push(pet);
})
console.log(petsWithAge);
dogs = pets.filter(pets => pets.type === "dog");
console.log(dogs);

// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }
const jasper = pets.find( jasper => jasper.name === "Jasper");
console.log("Jasper is " + jasper.age + " years old");