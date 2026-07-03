
const container = document.querySelector("#container"); 

const squareNumber = 16 * 16;

//loops to create the square
for (let i = 0; i < squareNumber; i++){

  const sqaure = document.createElement('div');

  sqaure.classList.add('grid-sqaure');
  container.appendChild(sqaure)

  sqaure.addEventListener('mouseover', () => {
    sqaure.classList.add('active-sqaure');
  })

}