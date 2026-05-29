const makeChange = (c) => {
  c = Number(c);

  // Calculate quarters
  const q = Math.floor(c / 25);
  c %= 25;

  // Calculate dimes
  const d = Math.floor(c / 10);
  c %= 10;

  // Calculate nickels
  const n = Math.floor(c / 5);
  c %= 5;

  // Remaining pennies
  const p = c;

  return {
    q: q,
    d: d,
    n: n,
    p: p
  };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));