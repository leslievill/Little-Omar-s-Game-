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
        endGame(); 
    }
}, 1000);

next();
}   
