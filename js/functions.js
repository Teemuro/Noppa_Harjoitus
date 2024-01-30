const dice = document.querySelector("#dice")
const images = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
]

dice.addEventListener('click',function() {
    const randomnumber = Math.floor(Math.random() * images.length)
    const randomimage = images[randomnumber]
    const img = document.querySelector("#dice img")
    img.src =randomimage
})

