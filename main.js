
var listOfqa = [
    {
        q: 'What are the ways to define a variable in JavaScript?',
        a: ['let', 'const', 'var', 'all of the above'],
        option: 4
    },
    {
        q: 'What is the difference between the operators ‘==‘ & ‘===‘?',
        a: ['no difference, both checks equality of value', '== check checks equality of value and === checks equality of value as well as type', '== is assignment and === is comparison operator', 'none of the above'],
        option: 2
    },
    {
        q: 'What does innerText do?',
        a: ['It will process an HTML tag if found in a string', 'It will not process an HTML tag if found in a string', 'event listener', 'none of the above'],
        option: 2
    },
    {
        q: 'Does JavaScript support automatic type conversion',
        a: ['Yes', 'No', 'Sometimes', 'Not sure'],
        option: 1
    },
    {
        q: 'Choose one which is not a looping structures in JavaScript?',
        a: ['for', 'if', 'while', 'do-while'],
        option: 2
    },
    {
        q: ' How can you convert the string of any base to integer in JavaScript?',
        a: ['toString', 'parseInt', 'parseFloat', 'string'],
        option: 2
    },
    {
        q: 'What would be the result of 3+2+"7"?',
        a: ['327', '12', '57', 'Error'],
        option: 3
    },
    {
        q: 'What is the use of Void(0)?',
        a: ['prevent the page from refreshing', 'break the flow of loop', 'call function void', 'None of the above'],
        option: 1
    },
    {
        q: 'What are escape characters?',
        a: ['/', '$', '/n', '\\'],
        option: 4
    },
    {
        q: 'What is the output of console.log( "A" - "B" + 2);',
        a: ['AB2', 'A-B+2', 'NaN', 'error'],
        option: 3
    },
];

var highscores_list = [
    { name: 'sham', score: 10 },
    { name: 'John', score: 9 }
];
localStorage.setItem('highscores_list', JSON.stringify(highscores_list));

var startQuizBtn = document.getElementById('start-quiz');
var qEl = document.getElementById('question');
var options = document.getElementsByClassName('options');
var nextEl = document.getElementById('next');
var prevEl = document.getElementById('prev');
var questionNumEl = document.getElementById('question-number');
var countDownEl = document.getElementById('count-down');
var questionCard = document.getElementsByClassName('question-card')[0];
var resultCard = document.getElementsByClassName('result-card')[0];
var viewScoreBtn = document.getElementsByClassName('view-scores-btn')[0];
var startQuizSection = document.getElementsByClassName('start-quiz-section')[0];
var submitAnswersBtn = document.getElementById('submit-answers');
var circularCount = 0;
var score = 0;
var questionNumOnScreen = 0;
var fiveMinutes = 60 * 5;
var countDown;


startQuizBtn.addEventListener('click', function () {
    countDownEl.textContent = '5 minutes';
    startTimer(fiveMinutes, countDownEl);
    assignQuestion(0);
    assignAnswers(0);
    setQuestionNum(1);
    questionCard.setAttribute('style', 'display:block');
    viewScoreBtn.setAttribute('style', 'display:block');
    startQuizSection.setAttribute('style', 'display:none');
    submitAnswersBtn.setAttribute('style', 'display:none');
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    countDown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds + ' remaining ';

        if (--timer < 0) {
            clearInterval(countDown);
            //calculate the total score and display
            display.textContent = 'Time Over';
            var finalScoreIs = document.getElementsByClassName('score-is')[0];
            finalScoreIs.textContent = `Your Final Score is ${score}`
            questionCard.setAttribute('style', 'display:none');
            resultCard.setAttribute('style', 'display:block');
        }
    }, 1000);
}

function assignQuestion(questionNum) {
    qEl.textContent = listOfqa[questionNum].q;
}

function assignAnswers(questionNum) {
    var answersArr = listOfqa[questionNum].a;
    for (let i = 0; i < answersArr.length; i++) {
        options[0].children[i].children[1].textContent = answersArr[i];
    }
}

function setQuestionNum(num) {
    questionNumEl.textContent = 'Question ' + num + '/' + listOfqa.length;
    questionNumOnScreen = num;
}

function checkAnswers() {
    var optionSelected = document.querySelector('input[name="options"]:checked').value;
    console.log(optionSelected);
    var correctOption = listOfqa[questionNumOnScreen - 1].option;
    if (optionSelected == correctOption) {
        score = score + 10;
    }
    else {
        score = score - 5;
    }

    console.log('score: ' + score);
}


function onClick() {
    window.location.href = './score.html';
}

function onSaveScore() {
    var initial = document.getElementById('initials');
    if (initial.value) {
        highscores_list.push({
            name: initial.value,
            score: score
        })
        localStorage.setItem('highscores_list', JSON.stringify(highscores_list));
        setTimeout(function () {
            window.location.href = './score.html';
        }, 100);

    }
    else {
        var errorSpan = document.getElementsByClassName('error-span')[0];
        if (errorSpan) {
            return;
        }
        else {
            var errorSpan = document.createElement('span');
            initial.parentElement.parentElement.append(errorSpan);
            errorSpan.textContent = 'Initials cannot be empty';
            errorSpan.setAttribute('class', 'text-danger error-span');
        }
    }

}

function onPrevClick(event) {
    //uncheck all radio buttons
    let radio = document.querySelectorAll('input[name="options"]');
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }

    if (circularCount === 0) {
        //disable prev button
        //prevEl.setAttribute('class','disabled');
    }
    else {
        circularCount--;
    }
    assignQuestion(circularCount);
    assignAnswers(circularCount);
    setQuestionNum(circularCount + 1);
}

function onNextClick(event) {
    //uncheck all radio buttons
    let radio = document.querySelectorAll('input[name="options"]');
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }

    if (circularCount === listOfqa.length - 2) {
        nextEl.setAttribute('style', 'display:none');
        submitAnswersBtn.setAttribute('style', 'display:block');
    }

    if (circularCount === listOfqa.length - 1) {
        //disable next button
        nextEl.setAttribute('class', 'disabled');
    }
    else {
        circularCount++;
    }
    assignQuestion(circularCount);
    assignAnswers(circularCount);
    setQuestionNum(circularCount + 1);
}

function displayScores() {
    console.log('here');
    clearInterval(countDown);
    countDownEl.textContent = 'Time Over';
    var finalScoreIs = document.getElementsByClassName('score-is')[0];
    finalScoreIs.textContent = `Your Final Score is ${score}`
    questionCard.setAttribute('style', 'display:none');
    resultCard.setAttribute('style', 'display:block');
}

prevEl.addEventListener('click', onPrevClick);
nextEl.addEventListener('click', onNextClick);
submitAnswersBtn.addEventListener('click', displayScores);
