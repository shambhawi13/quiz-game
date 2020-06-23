# 04 Web APIs: Code Quiz

This application is written in pure Javascript, HTML & CSS which is a five minutes timer based quiz application. It contains following featues:

- 10 questions with 4 option. Any one of the options are correct.
- You get 5 minutes to answer all question. Used setInterval to set the timer
- One correct answers gets you 10 points
- One wrong answer lowers your score by 5 points and deducts timer by 10sec.
- If you dont know the anwer of a question, you can goto next question by clicking "Next" Button.
- If you reach last question before time is over, you can submit directly from "Submit button".
- If you want to review any answered question, you can click "Prev" button
- After 5 min is over, you get to see total score. Enter the initials to save the score.
- You cannot leave initials blank, there is a validation check and error msg is displayed when left blank.
- You can submit your score using "Submit" button.
- You can view the highest scores by clicking "View High Scores" button. As scores are stored in local storage, so scores will be refreshed if we clear local storage.
- If you are on questions page or result page and try to navigate to view high scores page, show confirm box that current data will be lost, Do you still want to continue.
- View high scores are available on all screens. It navigates to scores page that list the user initials and their scores.
- "Clear Score" clears the list and set local storage to empty array.
- Used google fonts for styling fonts.


![quiz](Assets/final.png)
![code quiz](./Assets/04-web-apis-homework-demo.gif)


## Prerequisites

```
git clone https://github.com/shambhawi13/quiz-game.git
```

## Technologies Used
- JavaScript - Core logic
- Web APIs
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Installing

- Clone the repository : git clone https://github.com/shambhawi13/quiz-game.git


## Deployed Link

[Live Hosted on](https://shambhawi13.github.io/quiz-game/)

## Authors

* **Shambhawi Kumari**
 [GitHub](https://github.com/shambhawi13/) | 
 [LinkedIn](https://www.linkedin.com/in/shambhawi-kumari/)


## Review URL

[GitHub](https://github.com/shambhawi13/quiz-game)
[Live](https://shambhawi13.github.io/quiz-game/)



