const containerEl = document.querySelector(".container");

const careers = ["Undergraduate", "Volunteer", "Team player", "Creative thinker", "Problem solver", "Lifelong learner", "Motivator", "Enthusiast", "Joy-seeker"];

const vowelLetters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${vowelLetters.includes(careers[careerIndex].slice(0, 1)) ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}

