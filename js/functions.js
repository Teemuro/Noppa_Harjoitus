const getRandomIntNumberInRange =(min,max) => {
    return Math.floor(math.random() * max) + min;
}
document.querySelector('button').addEventListener('click',() => {
    const randomized_number = getRandomIntNumberInRange(1,6)
})