let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    choice = Math.floor((Math.random()*3))
    switch(choice)
    {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
        default:
            throw new Error("Undefined choice")
    }
}

function getPlayerChoice() 
{
    let keepGoing = true;
    let userInput
    while(keepGoing)
    {
        userInput = prompt("Please choose one of either Rock, Paper, or Scissors")
        userInput = userInput.toLowerCase()
        goodInput = userInput == "rock" || userInput == "paper" || userInput == "scissors"
        if(goodInput)
        {
            keepGoing = false
            return userInput
        }
    }
}

function capitalize(aString)
{
    let lowerCase = String(aString).toLowerCase()
    return lowerCase.charAt(0).toUpperCase() + lowerCase.substring(1,lowerCase.length-1)
}

function playRound(playerChoice){
    let result = 0 // 0 == tie, 1 == win, -1 == loss
    let computerChoice = getComputerChoice()

    if(playerChoice == computerChoice)
    {
        return {result, playerChoice, computerChoice}
    }

    let win = false
    switch (playerChoice) 
    {
        case "rock":
            if(computerChoice === "scissors")
            {
                win = true
            }
            break;
        case "paper":
            if(computerChoice === "rock")
            {
                win = true
            }
            break;
        case "scissors":
            if(computerChoice === "paper")
            {
                win = true
            }
            break;
    }

    if(win)
    {
        result = 1
        return {result, playerChoice, computerChoice}
    }
    else
    {
        result = -1
        return {result, playerChoice, computerChoice}
    }
}

//Setup functions for game
const div = document.querySelector(".actions")

// Logic for playing rock paper scissors
div.addEventListener("click", (event) => {
    console.log("hi")
    if(event.target.tagName === "BUTTON"){
        result = playRound(event.target.id)

        gamesPlayed = document.querySelector("#gamesPlayed")
        gamesPlayed.textContent = Number(gamesPlayed.textContent) + 1
        playerScore = document.querySelector("#playerScore")
        playerScore.textContent = Number(playerScore.textContent) + result.result
        playerChoice = document.querySelector("#playerChoice")
        playerChoice.textContent = result.playerChoice
        computerChoice = document.querySelector("#computerChoice")
        computerChoice.textContent = result.computerChoice

    }
})

// Logic to make button flash on click
div.addEventListener("mousedown", (event) => {
    if(event.target.tagName === "BUTTON"){
        event.target.setAttribute("class", "pressed")
    }
})
div.addEventListener("mouseup", (event) => {
    if(event.target.tagName === "BUTTON"){
        event.target.classList.remove("pressed")
    }
})