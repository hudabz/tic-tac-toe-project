
let position =[ 
['00', '01', '02'], 
['10', '11', '12'], 
['20', '21', '22'] 
]; 
let winnerSound = $('#myWinner'); 
let count = 0; 
let currentPlayer ;
 swal("Choose X or O ", {
    content: "input",
  })
  .then((value) => {
    swal(`First player is  : ${value}`)
    currentPlayer = value;
  }); 

$('.column').click(playTurn); 

function playTurn(){ 
    count++; 
   
    if(currentPlayer === 'x') { 
      
    $(this).text(currentPlayer); 
    $(this).off("click"); 
    currentPlayer ='o'; 
    $("#turn").text("The turn is for "+currentPlayer)

    for (let i = 0; i <position.length ; i++) {
        for (let j =0; j <position.length ; j++) { 
                
             if (position[i][j]  === $(this).attr("id")){
               position[i][j] = $(this).text(); 
          }    
        }
      }    
    } 

 else if (currentPlayer === 'o') {
    $(this).text(currentPlayer);
    $(this).off("click"); 
    currentPlayer ='x'; 
    $("#turn").text("The turn is for "+currentPlayer)
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
      if (currentPlayer=='x') {
          currentPlayer='o'; 
          
      } else {
          currentPlayer='x'
      } 
      
        swal(currentPlayer+" is a winner!", "Hard luck for O next time", "success", 
          );
          $('audio#myWinner')[0].play();
        } 

  if (count == 9) {
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

    swal("Choose X or O ", {
        content: "input",
      })
      .then((value) => {
        swal(`First player is  : ${value}`)
        currentPlayer = value;
      });  
  
 }