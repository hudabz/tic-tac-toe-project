
// let music = $('#relaxIntro')
// if (music){
//   music[0].play();
// } else {




let position =[ 
['00', '01', '02'], 
['10', '11', '12'], 
['20', '21', '22'] 
]; 
let winnerSound = $('#myWinner'); 
let count = 0; 
let currentPlayer ;
 swal("Are you X or O player?  ", {
    content: "input",
  })
  .then((value) => {
    swal(`Start with player  : ${value}`)
    currentPlayer = value;
  }); 

$('.column').click(playTurn); 

function playTurn(){ 
    count++; 
    if(currentPlayer === 'X') { 
      
    $(this).text(currentPlayer); 
    $(this).off("click"); 
    currentPlayer ='O'; 
    $("#turn").text("It's  "+currentPlayer+" turn")

    for (let i = 0; i <position.length ; i++) {
        for (let j =0; j <position.length ; j++) { 
                
             if (position[i][j]  === $(this).attr("id")){
               position[i][j] = $(this).text(); 
          }    
        }
      }    
    } 

 else if (currentPlayer === 'O') {
    $(this).text(currentPlayer);
    $(this).off("click"); 
    currentPlayer ='X'; 
    $("#turn").text("It's  "+currentPlayer+" turn")
    for (let i = 0; i <position.length ; i++) {
        for (let j =0; j <position.length ; j++) { 
    
             if (position[i][j]  === $(this).attr("id")){
                position[i][j] = $(this).text(); 
            }    
        }
    } 
  }  

  if (position[0][0] ===  position[0][1] && position[0][1] === position[0][2] 
    || position[0][0] ===  position[1][0] && position[1][0] === position[2][0] 
    || position[0][0] ===  position[1][1] && position[1][1] === position[2][2] 
    || position[1][0] ===  position[1][1] && position[1][1] === position[1][2] 
    || position[2][0] ===  position[2][1] && position[2][1] === position[2][2] 
    || position[0][1] ===  position[1][1] && position[1][1] === position[2][1]
    || position[0][2] ===  position[1][2] && position[1][2] === position[2][2] 
    || position[0][2] ===  position[1][1] && position[1][1] === position[2][0])
    {
      if (currentPlayer=='X') {
          currentPlayer='O'; 
          
      } else {
          currentPlayer='X'
      } 
      
        swal(currentPlayer+" is a winner!", "Hard luck for O next time", "success", 
          );
          $('audio#myWinner')[0].play();
        } 
      else if (count == 9) {
    swal("It's a tie", {
      }); 
  } 
} 
$('#remove').click(playAgain); 

  function playAgain(){ 
   count =0; 
   currentPlayer ='undefined'; 
   $('.column').text('');
   $('.column').off("click"); 
   $('.column').click(playTurn); 
   position =[ 
    ['00', '01', '02'], 
    ['10', '11', '12'], 
    ['20', '21', '22'] 
    ]; 

    swal("Are you X or O player?  ", {
      content: "input",
    })
    .then((value) => {
      swal(`Start with player  : ${value}`)
      currentPlayer = value;
    }); 
  
 } 


  