const btn1 = document.querySelector('.btn1');
const in_number = document.querySelector('.in-number');
const inputnumber = document.querySelector('.inputnumber');
const btn2 = document.querySelector('.btn2');
const score1 = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const p1 = document.querySelector('.p1');

let score;
let randomNumber = 0;
let h_score = 0;
highscore.textContent = h_score;

function start() {
    randomNumber = Math.floor(Math.random() * 21)+10;
    console.log(randomNumber);
}
btn1.addEventListener('click',()=>{
    start();
    p1.innerHTML = `
    <p>😜Start Guessing ...</p>
    `;
    btn1.textContent = 'Started';
   score = 20;
    score1.textContent = score;
    inputnumber.value = 0;
    in_number.value = null;
})



function check() {
    if (Number(inputnumber.value)  === randomNumber) {
    p1.innerHTML=`Correct👍`;
    in_number.value = randomNumber;
    if (score > highscore.textContent ) {
        highscore.textContent = score;
    }

}else if (Number(inputnumber.value)> randomNumber) {
    
    p1.innerHTML =`Too High🤔`;
    score = score-2;
    score1.textContent = score;
} else if (Number(inputnumber.value) < randomNumber) {
    p1.innerHTML =`Too low🤦‍♀️`;
    score = score-2;
    score1.textContent = score;
}
}
btn2.addEventListener('click',()=>{
    
    check();
    
})

