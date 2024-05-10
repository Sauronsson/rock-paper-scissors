console.log("Hello World")
console.log(getPlayerChoice())

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
        userInput = prompt("Please choose one of either rock, paper, or scissors")
        console.log(userInput)
        goodInput = userInput == "rock" || userInput == "paper" || userInput == "scissors"
        if(goodInput)
        {
            keepGoing = false
            return userInput
        }
    }
}