const startBtn = document.querySelector(".start_btn");
const resetBtn = document.querySelector(".reset_btn");
const stopBtn = document.querySelector(".stop_btn");
const lapBtn = document.querySelector(".time_btn");
const clearBtn = document.querySelector(".clear_btn");
let counting = 0;
let intervalID;
let i = 1;

const countDownElement = document.getElementById("countDown");
const lapValueElement = document.querySelector(".lapValue");




const startTimer = () => {
    intervalID = setInterval(()=>{
        countDownElement.innerHTML = counting++;
    }, 1000);
    startBtn.style.display = "none";
    stopBtn.style.display = "inline";
    resetBtn.style.display = "inline";
    lapBtn.style.display = "inline";
    clearBtn.style.display = "none";
    
};

const stopTimer = () => {
      clearInterval(intervalID);
      startBtn.style.display = "inline";
      stopBtn.style.display = "none";
      resetBtn.style.display = "inline";
      lapBtn.style.display = "none";
      clearBtn.style.display = "none";

};

const resetTimer = () => {
    clearInterval(intervalID);
    countDownElement.innerHTML = 0;
    counting = 0;
    startBtn.style.display = "inline";
    stopBtn.style.display = "none";
    resetBtn.style.display = "none";
    lapBtn.style.display = "none";
    clearBtn.style.display = "none";
};

const lapTimer = (counting) => {
    const pElem = document.createElement("p");
    pElem.innerText = `Lap ${i} = ${counting}`;
    lapValueElement.append(pElem);
    i++;
    clearBtn.style.display = "inline";
};

const clearLaps = () => {
    lapValueElement.innerHTML = '';
    i = 1;
    clearBtn.style.display = "none";
};



startBtn.addEventListener('click',()=>{
    startTimer();
})
resetBtn.addEventListener('click',()=>{
    resetTimer();
})
stopBtn.addEventListener('click',()=>{
    stopTimer();
})
lapBtn.addEventListener('click',()=>{
    lapTimer(counting);
})
clearBtn.addEventListener('click',()=>{
    clearLaps();
})