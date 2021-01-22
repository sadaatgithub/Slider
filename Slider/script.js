const boxes = document.getElementById('divs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const box = document.querySelectorAll('#divs .container')
console.log(box)

let idx = 0;

let interval = setInterval(run, 3000)
function run (){
    idx++;

    changeBox()
}
// let interval = setInterval(run () => {
//     idx++;
//     changeImage()
// }, 2000);


function changeBox() {
    if (idx > box.length - 3) {
        idx = 0
    } else if (idx < 0) {
        idx = box.length - 3
    }
    boxes.style.transform = `translateX(${-idx * 405}px)`
}
function resetInterval () {
    clearInterval(interval)
    interval = setInterval(run, 3000)
}
rightBtn.addEventListener('click', () => {
    idx++
    changeBox()
    resetInterval()
})
leftBtn.addEventListener('click', () => {
    idx--
    changeBox()
    resetInterval()
})