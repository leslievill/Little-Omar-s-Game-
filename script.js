//create questions within an array 
var questions = [{
    title: "How many continents are there?",
    choices: ["7", "10", "Purple", "17"],
    answer: "7"
},
{
    title: "What does a Noun do?",
    choices: ["Nothing", "Describes people, places, and things", "Names actions", "It cleans my room"],
    answer: "Describes people, places, and things"
},
{
    title: "What does 10 - 5= ?",
    choices: ["15", "13", "6", "5"],
    answer: "5"
},
{
    title: "What rhymes with 'Teddy'?",
    choices: ["Apple", "Ready", "Tree", "Skinny"],
    answer: "Ready"
},
{
    title: "What happens if I don't listen to mom?",
    choices: ["I get candy", "She buys me a toy", "Nothing", "I get time-out"],
    answer: "I get time-out"
}
]

//setting variables for the functions/scores/timers
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts timer when user starts quiz
function start() {

timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    //proceed to end the game function when timer is below 0 at any time
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz(); 
    }
}, 1000);

    next();
}   

//stop the timer to end the game 
function endQuiz() {
    clearInterval(timer);
    
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;
    
    document.getElementById("quizBody").innerHTML = quizContent;
}

//store scores on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}
    
function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>`;
    
    document.getElementById("quizBody").innerHTML = quizContent;
}

//reset quiz
function resetQuiz() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
    
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    var quizContent = `
    <h1>Little Bro's Quiz!</h1>
    <h3>Click to play!</h3>
    <button onclick="start()">Start!</button>`;
    
    document.getElementById("quizBody").innerHTML = quizContent;
}
//deduct 15secs if answer is wrong 
function incorrect() {
    timeLeft -= 15; 
    next();
}
    
//increases score if answers correctly 
function correct() {
    score += 20;
    next();
}
