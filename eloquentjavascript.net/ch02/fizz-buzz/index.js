// first draft
const firstDraft = () => {
  for(let i = 1; i - 1 < 100; i++) {
    // cases
    // i%5 && i%3 = "FizzBuzz"
    // i%5 && !i%3 = "Buzz"
    // i%3 && !i%5 = "Fizz"
    // else i

    // notes:
    // would a switch case work better than an if/else?  no - need to eval condition
    // same perf, but easier to understand - will do that
    // nvm - conditional would not apply, unless I'm missing a js trick :)

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0 && !(i % 3 === 0)) {
      console.log("Buzz");
    } else if (i % 3 === 0 && !(i % 5 === 0)) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

// saw hints
// attempt to implement clever'er version that was hinted at
const cleverer = () => {
  for(let i = 1; i - 1 < 100; i++) {
    let output = "";
    output += i % 3 === 0 ? "Fizz" : "";
    output += i % 5 === 0 ? "Buzz" : "";
    console.log(output === "" ? i : output);
  }
}
cleverer();
