// declaring variables for stop watch
var seconds = 00
var tens = 00
var mins = 00
var interval
var appendTens= document.getElementById('tens')
var appendSeconds = document.getElementById('seconds')
var appendMins = document.getElementById('mins')
var buttonStart = document.getElementById('button-start')
var buttonStop = document.getElementById('button-stop')
var buttonReset = document.getElementById('button-reset')
// declaring variables for watch
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]




//starting stop watch
function startTimer(){
    tens ++

    if(tens < 9){
        appendTens.innerHTML = "0" + tens
    }
    if (tens > 9)
    {
        appendTens.innerHTML = tens
    }
    if (tens > 99)
    {
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = "0" + 0
    }
    if(seconds > 9)
    {
        appendSeconds.innerHTML = seconds
    }
    if (seconds > 59)
    {
        mins ++
        appendMins.innerHTML =  "0" + mins
        seconds = 0
        appendSeconds.innerHTML =  "0" + 0
    }
    if (mins > 9)
    {
        appendMins.innerHTML = mins
    }
}

buttonStart.addEventListener('click', () => {
    interval = setInterval(startTimer,10)
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval)
}
)

buttonReset.addEventListener('click',() => {
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    mins = "00"
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
    appendMins.innerHTML = mins
})


//toggle modes
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

//function for watch
function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

// function for timer
//declaring variables for timer
let seconds2 = 59
let tens2 = 99
let mins2 
let interval2
let appendTens2= document.getElementById('tens2')
let appendSeconds2 = document.getElementById('seconds2')
let appendMins2 = document.getElementById('mins2')
let buttonStart2 = document.getElementById('button-start2')
let buttonPause2 = document.getElementById('button-pause2')
let buttonReset2 = document.getElementById('button-reset2')

function startTimer2(){ 
    console.log(seconds2 + ' ' + mins2 + ' ' + tens2 )
    // if (seconds2 === 0 && mins2 === 0 && tens2 === 0 ) {
    //     console.log(seconds2 + ' ' + mins2 + ' ' + tens2 )
    //     clearInterval(interval)
    // } 
    tens2 --
    if(tens2 < 9){
        appendTens2.innerHTML = "0" + tens2
    }
    if (tens2 > 9)
    {
        appendTens2.innerHTML = tens2
            if (mins2 > 9)
        {
            appendMins2.innerHTML = mins2
        }
        else
        {
            appendMins2.innerHTML =  "0" + mins2
        }
    }
    if (tens2 == 0)
    {
        seconds2--
        appendSeconds2.innerHTML = "0" + seconds2
        tens2 = 99
        appendTens2.innerHTML = tens2        
    }
    if(seconds2 > 9)
    {
        appendSeconds2.innerHTML = seconds2
    }
    
    if (seconds2 == 0)
    {
        mins2 --
        seconds2 = 59
        appendSeconds2.innerHTML =  seconds2
    }
    if (mins2 < 0)
    {
        clearInterval(interval2)
        tens2 = "00"
        seconds2 = "00"
        mins2 = "00"
        appendSeconds2.innerHTML = seconds2
        appendTens2.innerHTML = tens2
        appendMins2.innerHTML = mins2
    }
}

buttonStart2.addEventListener('click', () => {
    mins2 = document.getElementById('userInput').value - 1
    interval2 = setInterval(startTimer2,10)
})

buttonPause2.addEventListener('click', () => {
    clearInterval(interval2)
}
)

buttonReset2.addEventListener('click',() => {
    clearInterval(interval2)
    tens2 = "00"
    seconds2 = "00"
    mins2 = "00"
    appendSeconds2.innerHTML = seconds2
    appendTens2.innerHTML = tens2
    appendMins2.innerHTML = mins2
})


