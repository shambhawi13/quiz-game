//elements from score.html
var backEl = document.getElementById('back');
var clearEl = document.getElementById('clear');
var scoresListEl = document.getElementsByClassName('scores-list')[0];

var getListItems = JSON.parse(localStorage.getItem('highscores_list'));
createList(getListItems);

function createList(list){
    for(let i=0;i<list.length ; i++){
        var liEl = document.createElement('li');
        liEl.setAttribute('class','list-group-item d-flex justify-content-between');
        scoresListEl.appendChild(liEl);

        //create 2 span one for name one for child
        var nameSpan = document.createElement('span');
        liEl.appendChild(nameSpan);
        nameSpan.textContent = list[i].name;

        var scoreSpan = document.createElement('span');
        liEl.appendChild(scoreSpan);
        scoreSpan.textContent = 'score: ' + list[i].score;
    }
}

//score.html button events
backEl.onclick = function(event){
    window.location.href = './index.html';
}

clearEl.onclick = function(event){
    localStorage.setItem('highscores_list',JSON.stringify([]));
    let liElements = document.getElementsByClassName('list-group-item'); 
    while (scoresListEl.firstChild) {
         scoresListEl.removeChild(scoresListEl.firstChild);
    }
}