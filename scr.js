var tab = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
tab.sort((x, y) => y - x);
console.log(tab);
const sum = tab.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant','lion', 'dog'];
animals.pop();
console.log(animals)
animals.reverse();
console.log(animals);
console.log(animals.slice(2))
console.log(animals.slice(2,5))
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
 companies.forEach(companies=>{
 	console.log(companies.name);
 });
console.log("companies aprés 1987 :");
  companies.forEach(companies=>{
  	if(companies.start>1987){
 	console.log(companies.name);
 }
 });
companies.sort((x, y) => x.end - y.end);
console.log(companies);
