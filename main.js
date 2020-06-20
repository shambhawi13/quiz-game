
var listOfqa = [
    {
        q: 'What are the ways to define a variable in JavaScript?',
        a: ['let', 'const', 'var', 'all of the above']
    },
    {
        q: 'What is the difference between the operators ‘==‘ & ‘===‘?',
        a: ['no difference, both checks equality of value', '== check checks equality of value and === checks quality of value as well as type', '== is assignment and === is comparison operator', 'none of the above']
    },
    {
        q: 'What does innerText do?',
        a: ['It will process an HTML tag if found in a string', 'It will not process an HTML tag if found in a string', 'event listener', 'none of the above']
    },
    {
        q: 'Does JavaScript support automatic type conversion',
        a: ['Yes', 'No', 'Sometimes', 'Not sure']
    },
    {
        q: 'Choose one which is not a looping structures in JavaScript?',
        a: ['for', 'if', 'while', 'do-while']
    },
    {
        q: ' How can you convert the string of any base to integer in JavaScript?',
        a: ['toString', 'parseInt', 'parseFloat', 'string']
    },
    {
        q: 'What would be the result of 3+2+"7"?',
        a: ['327', '12', '57', 'Error']
    },
    {
        q: 'What is the use of Void(0)?',
        a: ['prevent the page from refreshing', 'break the flow of loop', 'call function void', 'None of the above']
    },
    {
        q: 'What are escape characters?',
        a: ['/', '$', '/n', '\\']
    },
    {
        q: 'What is the output of console.log( "A" - "B" + 2);',
        a: ['AB2', 'A-B+2', 'NaN', 'error']
    },
];

var qEl = document.getElementById('question');
var options = document.getElementsByClassName('options');
var nextEl = document.getElementById('next');
var prevEl = document.getElementById('prev');

qEl.textContent = listOfqa[0].q;
assignAnswers(0);

function assignAnswers(questionNum) {
    var answersArr = listOfqa[questionNum].a;
    for (let i = 0; i < answersArr.length; i++) {
        options[0].children[i].children[1].textContent = answersArr[i];
    }
}


function onClick() {
    window.location.href = './score.html';
}

function onPrevClick(event){

}

function onNextClick(event){
    
}

prevEl.addEventListener('click',onPrevClick);
nextEl.addEventListener('click',onNextClick);