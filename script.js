
const container = document.querySelector("#container"); 
const numberOfSqaures = document.querySelector("#number-of-sqaure")
let squareNumber = 16 * 16;

//Ask for the number of sqaure input
numberOfSqaures.addEventListener('click', function(){
  let userInput = prompt("Enter the number of grid:")

  //convert to integer
  let sqaurePerSide = parseInt(userInput);
  let totalSquares = sqaurePerSide* sqaurePerSide;

  //clears the container
  container.innerHTML = "";

  //loops to create the square
  for (let i = 0; i < squareNumber; i++){
   const sqaure = document.createElement('div');
   sqaure.classList.add('grid-sqaure');
   
   //update the style size
   let sizePercent = 100 / sqaurePerSide
   sqaure.style.flex = `0 0 ${sizePercent}%`
   sqaure.style.hight = `${sizePercent}%`

   sqaure.addEventListener('mouseover', () => {
     sqaure.classList.add('active-sqaure');
   })
   container.appendChild(sqaure)
  }
})

