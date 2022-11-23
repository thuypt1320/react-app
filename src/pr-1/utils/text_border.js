
function textShadow(color, width) {
  const array = [
    [ 1, 1, 1 ],
    [ 0, 1, 1 ],
    [ 1, 0, 1 ],

    [ 1, 1, 0 ],
    [ 0, 1, 0 ],
    [ 1, 0, 0 ],

    [ -1, -1, 1 ],
    [ 0, -1, 1 ],
    [ -1, 0, 1 ],

    [ 1, -1, 1 ],
    [ -1, 1, 1 ],
  ];

  return array.map(row => {
    return row.map((i) => {
      return i * width + "px";
    }).join(" ");
  }).join(` ${color}, \n`) + ` ${color}`;
}

console.log(textShadow("white", 3.20788));
