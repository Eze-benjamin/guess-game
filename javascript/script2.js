const boldText = document.querySelector('.bold');
const button = document.querySelector('.button');

const click = boldText.textContent;
const btn = button.textContent;
console.log(btn);
if (boldText.textContent == click) {
    boldText.innerHTML = `<b style = "opacity:0.5";>benjamin</b>`;
}else if (button.value == btn) {
    button.innerHTML = `<p>boy</p>`;
} else {
    
}

button.addEventListener('click',()=>{
    
})