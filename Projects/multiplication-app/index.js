const num1 = Math.ceil(Math.random()*10) /*generate random number between 1 and 10*/
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question"); /*retrieves the HTML element with the id "question"*/

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2}?` /*.innerText is used to update the content of an element*/

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value; /*+ for convert the input value to a number*/
    if(userAns == correctAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

