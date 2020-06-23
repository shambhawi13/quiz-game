# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.



# 04 Web APIs: Code Quiz

This application is written in pure Javascript, HTML & CSS which is a five minutes timer based quiz application. It contains following featues:

- 10 questions with 4 option. Any one of the options are correct.
- You get 5 minutes to answer all question. Used setInterval to set the timer
- One correct answers gets you 10 points
- One wrong answer lowers your score by 5 points.
- If you dont know the anwer of a question, you can goto next question by clicking "Next" Button
- If you want to review any answered question, you can click "Prev" button
- After 5 min is over, you get to see total score. Enter the initials to save the score.
- You cannot leave initials blank, there is a validation check and error msg is displayed when left blank.
- You can submit your score using "Submit" button.
- You can view the highest scores by clicking "View High Scores" button. As scores are stored in local storage, so scores will be refreshed if we clear local storage.
- View high scores are available on all screens. It navigates to scores page that list the user initials and their scores.


![quiz](Assets/final.png)


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



