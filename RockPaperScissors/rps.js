let computerPick = "";
let compScore = 0;
let userScore = 0;
let userSelection;
let computerSelection;

function userPick() {

    // STEP 1 - Get Computer Selection
    computerPick = Math.random();
    if (computerPick < 0.34) {
        document.getElementById("compImg").src = "SrcImages/rock.png";
        computerSelection = "rock";

    } else if (computerPick < 0.67) {
        document.getElementById("compImg").src = "SrcImages/paper.png";
        computerSelection = "paper";
    } else {
        document.getElementById("compImg").src = "SrcImages/scissors.png";
        computerSelection = "scissors";
    }

    //Step 2 - Get User Selection
    userSelection = window.event.target.id;


    if(userSelection === "paper") {
        document.getElementById("userImg").src="SrcImages/paper.png";
        if(computerSelection === "scissors") {
            compScore++;
        }
        else if (computerSelection==="paper"){
            //do nothing
        }
        else {
            userScore++;
        }


    }

    if(userSelection === "rock") {
        document.getElementById("userImg").src="SrcImages/rock.png";

        if(computerSelection === "paper") {
            compScore++;
        }
        else if (computerSelection==="rock"){
            //do nothing
        }
        else {
            userScore++;
        }
    }

    if(userSelection === "scissors") {
        document.getElementById("userImg").src="SrcImages/scissors.png";

        if(computerSelection === "rock") {
            compScore++;
        }
        else if (computerSelection==="scissors"){
            //do nothing
        }
        else {
            userScore++;
        }
    }

    document.getElementById("userId").innerHTML = userScore.toString();
    document.getElementById("compId").innerHTML = compScore.toString();

}

