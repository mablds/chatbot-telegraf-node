const a = "PARALELEPIPEDO".split('')
const b = "P"

const res = a.map((e, i) => e === b ? i : null).filter(e => e !== null)
console.log(res)