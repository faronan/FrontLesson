"use strict";
var timer = document.getElementById('timer');
var startBtn = document.getElementById("start-button");
var stopBtn = document.getElementById("stop-button");
var resetBtn = document.getElementById("reset-button");
var firstTime = timer.innerHTML;
var time = 0;
var countingFlag = false;
function onStart() {
    startBtn.disabled = true;
    countingFlag = true;
    timerUpdate();
}
function onStop() {
    startBtn.disabled = false;
    countingFlag = false;
}
function onReset() {
    time = 0;
    timer.innerHTML = firstTime;
}
function timerUpdate() {
    if (countingFlag) {
        setTimeout(function () {
            time++;
            var min = Math.floor(time / 100 / 60);
            var sec = Math.floor(time / 100);
            var mSec = time % 100;
            timer.innerHTML = ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2) + ":" + mSec;
            timerUpdate();
        }, 10);
    }
}
