function templateLiterals (a, ...o) {
  console.log({
    a,
    o
  });
}

templateLiterals`This is a string with ${true} and ${false} and ${100}`;
