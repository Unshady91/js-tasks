const getRandomElFromArr = (arr) =>
  arr.length
    ? arr.splice(getRandomInt(0, arr.length), 1)
    : null