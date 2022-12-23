const checkFieldHasValue = (value, depth) => {
  const keys = Object.keys(value)
  if (depth === 1) {
    const filterKeys = keys.filter(item => !!value[item]);
    let newValue = {}
    filterKeys.forEach(item => newValue = { ...newValue, [item]: value[item] })

    return newValue
  }
  const keys1 = keys.filter(key => typeof value[key] === "object" && !!value[key]);
  let value1 = {}
  keys1.forEach(item => value1 = { ...value1, [item]: value[item] })

  return checkFieldHasValue(value1, depth - 1)
}

// const x = checkFieldHasValue({ a: { b: { c: "text" } }, b: 0, c: {d: 1} }, 2)
// console.log(x);


const flattenObject = (value, depth) => {
  const keys = Object.keys(value)
  if(!keys.length) return {}
  if(depth === 1) return value;
  const objectItems = keys.filter(key => typeof value[key] === "object");
  let value1 = {}
  keys.filter(item => !objectItems.includes(item)).forEach(
    item => value1 = {...value1, [item]: value[item]}
  )
  let value2 = {}
  objectItems.forEach(item => value2 = {...value2, ...value[item]})
  const newValue = flattenObject(value2, depth - 1);

  return {...value1, ...newValue}
}

const x = flattenObject({a: {b: {c: 1}}, d: {e: 1}, f: 1}, 3)

console.log(x);
