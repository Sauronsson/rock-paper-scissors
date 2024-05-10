let playerScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    choice = Math.floor((Math.random()*3))
    switch(choice)
    {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
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
            return capitalize(userInput)
        }
    }
}

function capitalize(aString)
{
    let lowerCase = String(aString).toLowerCase()
    return lowerCase.charAt(0).toUpperCase() + lowerCase.substring(1,lowerCase.length-1)
}

function playRound(){
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()

    if(playerChoice == computerChoice)
    {
        console.log("Tie Game! You both chose " + playerChoice)
        return
    }

    let win = false
    switch (playerChoice) 
    {
        case "Rock":
            if(ComputerChoice == "Scissors")
            {
                win = true
            }
            break;
        case "Paper":
            if(computerChoice == "Rock")
            {
                win = true
            }
            break;
        case "Scissors":
            if(computerChoice == "Paper")
            {
                win = true
            }
            break;
    }

    if(win)
    {
        playerScore++
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    }
    else
    {
        console.log("You Lose... " + computerChoice + " beats " + playerChoice)
    }
}