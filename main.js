"use strict";
let names = [];
let nameInput = document.getElementById("nameInput");
let pairs = [];
let secretSantaList = document.getElementById("secretSantaList");
let nameList = document.getElementById("nameList");

const addName = (element) => {
  let name = element.value;
  names.push(name);
  console.log(names);
  nameInput.value = "";
  let li = document.createElement("li");
  let text = name;
  li.append(text);
  nameList.appendChild(li);
};

const createPairs = () => {
  let names2 = names;
  const nameCount = names2.length;
  for (let i = 0; i <= nameCount / 2; i++) {
    let number1 = Math.floor(Math.random() * names2.length);
    let name1 = names[number1];
    names2.splice(number1, 1);
    let number2 = Math.floor(Math.random() * names2.length);
    let name2 = names[number2];
    names2.splice(number2, 1);
    let pair = `${name1} and ${name2}`;
    pairs.push(pair);
  }
  if (names2.length == 1) {
    pairs.push(names2[0]);
  }
  //   pairs.pop();
  console.log("This is a pair", pairs);
  displayPairs();
};

const displayPairs = () => {
  for (let i = 0; i < pairs.length; i++) {
    let li = document.createElement("li");
    let pair = pairs[i];
    li.append(pair);
    secretSantaList.appendChild(li);
  }
};
