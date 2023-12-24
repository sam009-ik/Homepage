const navCols = document.getElementsByClassName('nav-cols');
const navText = document.getElementsByClassName('nav-text');

//Loop to change colors of nav-items
for (let i = 0; i < navCols.length; i++) {
    navCols[i].addEventListener('mouseover', function () {
        navCols[i].style.backgroundColor = 'black';
        navText[i].style.color = 'white'; // Updated property name to 'color'
    });

    navCols[i].addEventListener('mouseout', function () {
        navCols[i].style.backgroundColor = '';
        navText[i].style.color = 'black'; // Updated property name to 'color'
    });
}



let currentSum = 0;
let inGame = false;
let sumEl = document.getElementById("sum-el");
let userLogs = document.getElementById("user-logs"); 
let userTurn = [];
let computerLogs = document.getElementById("computer-logs")
let computerTurn = [];

function startGame() {
    console.log("game starting");
    currentSum = 0;
    inGame = true; // Game is now in progress
    userTurn = []; // Reset user's turn
    computerTurn = []; // Reset computer's turn
    userLogs.textContent = 'User logs:';      // Reset user's log
    computerLogs.textContent = 'Computer logs:'; // Reset computer's log 
}

function handleButton(number) {
    if (inGame === false) {
        console.log("game has not started");
        return;
    }

    userTurn.push(number)
    currentSum += number;
    sumEl.textContent = `SUM: ${currentSum}`;     // Update sum
    let userNumberDiv = document.createElement("div"); // creates a new div element in memory
    userNumberDiv.textContent = number; // sets the text content of the div to the number
    userLogs.appendChild(userNumberDiv); // adds the div to the userLogs element


   // Check if the user has lost
   if (currentSum >= 100) {
    inGame = false;
    alert('User has lost! Sum exceeded 100.');
    return;
    }  

    setTimeout(compTurn, 1500); // Computer's turn after 1.5 seconds
}

function compTurn() {
    let computerNumber;

    // The computer tries to not let the sum reach exactly 100
    if (currentSum >= 93 && currentSum < 100) {
        // Pick the highest number possible without reaching 100
        computerNumber = 100 - currentSum - 1;
        if (computerNumber < 1 || computerNumber > 7) {
            // If it's not possible, choose the lowest number to drag the game
            computerNumber = 1;
        }
    } else {
        // If the sum is safe, choose randomly
        computerNumber = Math.floor(Math.random() * 7) + 1;
    }

    // Add computer's number to the log and update the sum
    computerTurn.push(computerNumber);
    currentSum += computerNumber;

    // Update sum in the DOM
    sumEl.textContent = `SUM: ${currentSum}`;
    let computerNumberDiv = document.createElement("div");
    computerNumberDiv.textContent = computerNumber;
    computerLogs.appendChild(computerNumberDiv);

    // Check if the computer has lost
    if (currentSum >= 100) {
        inGame = false;
        alert('Computer has lost! Sum exceeded 100.');
    }
}
