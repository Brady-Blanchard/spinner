// animates a spinning line as if loading something
let rotations = 10

for (let i = 0; i < rotations; i++) {
  setTimeout(() => {
    process.stdout.write('\r|  ');
  }, 100 + (600 * i));
  setTimeout(() => {
    process.stdout.write('\r/  ');
  }, 300 + (600 * i));
  setTimeout(() => {
    process.stdout.write('\r-  ');
  }, 500 + (600 * i));
  setTimeout(() => {
    process.stdout.write('\r\\  ');
  }, 700 + (600 * i));
}

setTimeout(() => {
  process.stdout.write('\n');
}, 800 + (600 * rotations));