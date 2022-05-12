const loadPercent = document.querySelector('.loading-percent')
const bg = document.querySelector('.bg')
const helloButton = document.querySelector('.hello-button')
const textWrite = document.querySelector('.welcome-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
      clearInterval(int)
}
  loadPercent.innerText = `${load}%`
  loadPercent.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 40, 5)}px)`
  helloButton.style.opacity = scale(load, 0, 100, 0, 1)
}
  

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
