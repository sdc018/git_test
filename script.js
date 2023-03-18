        const buttons = document.querySelectorAll('#choices button');
        const start = document.getElementById("Start");
        const computerImage = document.getElementById('animations-right');
        const playerImage = document.getElementById('animations-left');
        const winner= document.getElementById("winner");
        var playerScore = 0;
        var computerScore = 0;

        const modalcontainer= document.getElementById('modal-container');
        const closebtn = document.getElementById('close-btn');

        closebtn.addEventListener('click', () => {
          modalcontainer.style.display="none";
        });
    

        console.log(computerImage);
        console.log(playerImage);
      
        

        // buttons.forEach((button) => {
        // button.addEventListener('click', Play(button))
        

        // });

        buttons.forEach(button => button.addEventListener('click', () => {
          computerImage.classList.add('active');
          playerImage.classList.add('active');
          game(button.id);
          setTimeout(function(){
            modalcontainer.style.display="block";
        }, 2700);
          

        }));

        // function Play(button){
        // console.log(button.id);
        // computerImage.classList.add('active');
        // playerImage.classList.add('active');
      
      
        // }

        start.addEventListener ('click', () => {
          buttons[0].classList.add("show");
          buttons[1].classList.add("show");
          buttons[2].classList.add("show");
          start.style.display ="none";
        })


        function game(playerChoice) 
        {    
             const playerSelection =  playerChoice;
             const computerSelection = getComputerChoice();
             console.log(computerSelection);
             console.log(playerSelection);
             playRound(playerSelection, computerSelection);

        }

        function playRound(playerSelection, computerSelection) {

            if (playerSelection === computerSelection)
            {
                Score("Tie");
            }
            else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock"))
            {
                Score("Computer");
            }
            else if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection ==="paper" && computerSelection==="rock") || (playerSelection ==="scissor" && computerSelection==="paper"))
            {
                Score("Player");
            }
          }

          function Score(Winner){
            console.log(Winner);

            if (Winner === "Player")
            {
             console.log("Player Win");
             winner.textContent="Player Win!";
             playerScore++;
             console.log("Player Score" + playerScore);
             console.log("Computer Score" + computerScore);
            }
            else if (Winner === "Computer")
            {
             console.log("Computer Win");
             winner.textContent="Computer Win!";
             computerScore++;
             console.log("Player Score" + playerScore);
             console.log("Computer Score" + computerScore);
            }
            else
            {
             console.log("Tie");
             winner.textContent="TIE!";
             console.log("Player Score" + playerScore);
             console.log("Computer Score" + computerScore);
            }

          }
               

        function getComputerChoice()
        {
            const ComputerChoice = Math.floor(Math.random()*3);
        
            if (ComputerChoice == 0)
             return "rock";
            else if (ComputerChoice == 1)
             return "paper";
            else
             return "scissor";
        }

    


