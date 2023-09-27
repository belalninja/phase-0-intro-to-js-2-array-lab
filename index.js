// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = function (name) {
  cats.push(name);
};
destructivelyAppendCat("Ralph");

const destructivelyPrependCat = function (name) {
  cats.unshift(name);
};
destructivelyPrependCat("Bob");

const destructivelyRemoveLastCat = function (name) {
  cats.pop(name);
};
destructivelyRemoveLastCat();

const destructivelyRemoveFirstCat = function (name) {
  cats.shift(name);
};
destructivelyRemoveFirstCat();

let appendToCat;
const appendCat = function (name) {
  appendToCat = [...cats, name];
  return appendToCat;
};
// appendCat("Broom");

let prependToCat;
const prependCat = function (name) {
  prependToCat = [name, ...cats.slice()];
  return prependToCat;
};
// prependCat("Arnold");

let removeTheLastCat;
const removeLastCat = function () {
  removeTheLastCat = [...cats.slice(0, 2)];
  return removeTheLastCat;
};

let removeTheFirstCat;
const removeFirstCat = function () {
  removeTheFirstCat = [...cats.slice(1, cats.length)];
  return removeTheFirstCat;
};
// removeFirstCat();
// removeTheFirstCat;
