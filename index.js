let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let guessbtn = document.getElementsByClassName('guess')[0];
let restartbtn = document.getElementsByClassName('restart')[0];
let guess = document.getElementById('guess_num');
let div = document.getElementById('fail');
let answer = Math.floor(Math.random() * 50) + 1;
let guessed_num = [];
let change = 10;
msg2.textContent = "Number of Change to guess : " + change
console.log(answer);

function doSomething() {
    div.classList.add("fail");
    change--;
    msg2.textContent = "Number of Change to guess : " + change;
    guessed_num.push(guess.value);
    msg3.textContent = "Guessed number are : " + guessed_num;
    guess.value = "";

}

function removeClass() {
    div.classList.remove("fail");
}

guessbtn.addEventListener('click', () => {
    let guess_num = guess.value;
    if (guess_num > 50 || guess_num < 1) {
        alert("The input number much be between 1 to 50");
    } else {
        if (answer < guess_num) {
            msg1.textContent = "Your number is too high";
            doSomething();
        } else if (answer > guess_num) {
            msg1.textContent = "Your number is too low";
            doSomething();
        } else {
            div.classList.add('success');
            msg1.innerHTML = `<h2 style="color:yellow">${"Congratulation You Win"}</h2>`;
            guess.setAttribute('type', 'hidden');
            msg2.remove();
            msg3.remove();
        }
    }

    if (change <= 0) {
        alert("Game Over ,Please Try again ..!!!...............");
        location.reload();
    }
})

restartbtn.addEventListener('click', () => {
    answer = Math.floor(Math.random() * 50) + 1;
    console.log(answer);
    guess.setAttribute('type', 'number');
    guess.value = "";
    change = 10;
    msg2.textContent = "Number of Change to guess : " + change;
    guessed_num = [];
    msg3.textContent = "Guessed number are : " + guessed_num;
})