let ms = 0, sec = 0, min = 0;
let timer = null;

function updateDisplay() {
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let milli = ms < 100 ? (ms < 10 ? "00"+ms : "0"+ms) : ms;

    document.getElementById("display").innerText = `${m}:${s}:${milli}`;
}

function start() {
    if (timer !== null) return;

    timer = setInterval(() => {
        ms += 10;

        if (ms === 1000) {
            ms = 0;
            sec++;
        }

        if (sec === 60) {
            sec = 0;
            min++;
        }

        updateDisplay();
    }, 10);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    ms = sec = min = 0;
    updateDisplay();
    document.getElementById("lapList").innerHTML = "";
}

function lap() {
    let time = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = time;
    document.getElementById("lapList").appendChild(li);
}