const timer = document.getElementById('timer')!;
const startBtn = document.getElementById("start-button") as HTMLInputElement;
const stopBtn = document.getElementById("stop-button") as HTMLInputElement;
const resetBtn = document.getElementById("reset-button") as HTMLInputElement;
const firstTime = timer.innerHTML

let time = 0;
let countingFlag = false;

function onStart(){
    startBtn.disabled = true;
    countingFlag = true;
    timerUpdate();
}

function onStop(){
    startBtn.disabled = false;
    countingFlag = false;
}

function onReset(){
    time = 0;
    timer.innerHTML = firstTime;
}

function timerUpdate(){
    if(countingFlag){
        setTimeout(function() {
            time++;
            const min = Math.floor(time/100/60);
            const sec = Math.floor(time/100);
            const mSec = time % 100;

            timer.innerHTML = ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2) + ":" + mSec;
            timerUpdate();
        }, 10);
    }
}