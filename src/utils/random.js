export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const getRandomNumberAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getRandomNumber(1, 10)), 500)
  })
}
