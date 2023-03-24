        const buttons = document.querySelectorAll('#choices button');
        const start = document.getElementById("Start");
        const playerImage = document.getElementById('playerImage');
        const computerImage = document.getElementById('computerImage');
        const winner= document.getElementById("winner");
        var playerScore = 0;
        var computerScore = 0;
        var playerScorediv = document.querySelectorAll('#playerscore div')
        var computerScorediv = document.querySelectorAll('#computerscore div')
        var playerImageArray = {'rock':'images/RockPlayer.jpeg','paper':'images/PaperPlayer.jpeg','scissor':'images/ScissorPlayer.jpeg'}
        var computerImageArray = {'rock':"images/RockComputer.jpeg",'paper':"images/PaperComputer.jpeg",'scissor':"images/ScissorComputer.jpeg"}
     



     


        console.log(playerScorediv);
        console.log(computerScorediv);
        const modalcontainer= document.getElementById('modal-container');
        const closebtn = document.getElementById('close-btn');

        //This is for Modal close button

        closebtn.addEventListener('click', () => {
          modalcontainer.style.display="none";
          computerImage.classList.remove('active');
          playerImage.classList.remove('active');
          reset();
          ScoreUpdate(winner.textContent);
          buttons[0].disabled = false;
          buttons[1].disabled = false;
          buttons[2].disabled = false;
        });
    

        console.log(computerImage);
        console.log(playerImage);
      
        
        //This is for the choices button and after clicking the game will start
        buttons.forEach(button => button.addEventListener('click', () => {
          computerImage.classList.add('active');
          playerImage.classList.add('active');
          game(button.id);
          setTimeout(function(){
            modalcontainer.style.display="block";
          }, 3200);
          buttons[0].disabled = true;
          buttons[1].disabled = true;
          buttons[2].disabled = true;
        }));

        //This is for the Click to start where the choices button will show
        start.addEventListener ('click', ()   => {
          buttons[0].classList.add("show");
          buttons[1].classList.add("show");
          buttons[2].classList.add("show");
          start.style.display ="none";
        })

        //This is where the game starts, it gets the playerChoice and computerChoice
        function game(playerChoice) 
        {    
             const playerSelection =  playerChoice;
             const computerSelection = getComputerChoice();
             setTimeout(function(){
              changeImage(playerSelection,computerSelection);
            }, 2500);
             console.log(computerSelection);
             console.log(playerSelection);
             playRound(playerSelection, computerSelection);

        }

        //This is a function to change image based on the player and computer choice
        function changeImage(playerChoice, computerChoice){

   
            playerImage.src=playerImageArray[playerChoice];
            computerImage.src=computerImageArray[computerChoice];
        }

        


        //This is a function to check who is the winner
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


           //This is a function to add the score and update the Modal Text who is the winner
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

            if(playerScore === 3)
            {
              setTimeout(function(){
                ScoreUpdate(winner.textContent);
              }, 2500);
            winner.textContent="The winner is Player!";
            }
            if(computerScore === 3)
            {
              setTimeout(function(){
                ScoreUpdate(winner.textContent);
              }, 2500);
            winner.textContent="The winner is Computer!";
            }
          }

          //This is a function that will update the CSS for score
        function ScoreUpdate(winner){
          if (winner === "Player Win!")
          {
            for (x=0;x<playerScore;x++)
            {
             for (y=0; y<=x;y++)
             {
                playerScorediv[y].classList.add("active");
             }
            }
          }
          else
          {
            for (x=0;x<computerScore;x++)
            {
             for (y=0; y<=x;y++)
             {
               computerScorediv[y].classList.add("active");
             }
            }
          }

          playerImage.src=playerImageArray['rock'];
            computerImage.src=computerImageArray['rock'];

        }
        

        // This is to check if player or computer reach a score of 3 and will update the Modal text
        // function checkScore(){
        //    if (computerScore === 3)
        //    {
        //     winner.textContent="The winner is Computer!";

        //     setTimeout(function(){
        //     reset();
        //   }, 2700);
        //    }
        //    else if (playerScore === 3)
        //    {
        //     winner.textContent="The winner is Player!";
        //     setTimeout(function(){
        //       reset();
        //     }, 2700);
        //    }

        // }
               
       //This is to get the computerChoice by random
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
       

        //Will reset the game
        function reset(){

          if (playerScore === 3 || computerScore === 3)
          {
          playerScore=0; 
          computerScore=0;
          computerScorediv[0].classList.remove("active");
          computerScorediv[1].classList.remove("active");
          computerScorediv[2].classList.remove("active");
          playerScorediv[0].classList.remove("active");
          playerScorediv[1].classList.remove("active");
          playerScorediv[2].classList.remove("active");
          buttons[0].classList.remove("show");
         buttons[1].classList.remove("show");
         buttons[2].classList.remove("show");
         start.style.display ="block";
          }

        }

    


