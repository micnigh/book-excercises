// first draft
const size = 8;
let line1 = ""
let line2 = "";

for(let i = 0; i < size; i++) {
  line1 += i % 2 === 0 ? " " : "#";
  line2 += i % 2 === 0 ? "#" : " ";
}

for(let i = 0; i < size; i++) {
  console.log(i % 2 === 0 ? line1 : line2);
}
