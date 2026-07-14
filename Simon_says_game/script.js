let gameSeq=[];
let userSeq=[];

let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    /* console.log(randomBtn);
    console.log(randomIdx);
    console.log(randomColor); */
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx) {
    //console.log("current level: ", level);

    //let idx = level - 1;

    if (userSeq[idx] === gameSeq[idx]) {
        //console.log("same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
            //levelUp();
        }
    }
    else {
        h2.innerHTML = `Game Over!Your score was <b>${level}<b> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor= " red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    //console.log("Button was pressed");
    //let btn = this;
    userFlash(this);

    userColor = this.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".box");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    level = 0;
}
