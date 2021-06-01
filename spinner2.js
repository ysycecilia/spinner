process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 100;
let spinner = ["\r|", "\r/", "\r-", "\r\\"];

for (let s of spinner) {
  setTimeout(() => {
    process.stdout.write(`${s}   `);
  }, timer);
  timer += 200;
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// // ... fill in the rest yourself ...
