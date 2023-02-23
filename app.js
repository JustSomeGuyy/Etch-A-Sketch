const option = document.querySelectorAll('option');
const gridDisplay = document.querySelector('#grid');

console.log()
const grid = [];

// Creates the grid blocks
function getGrid() {
    const select = document.querySelector('select');
    const options = select.options;
    const id = options[options.selectedIndex].id;
    switch(id){
        case 18:
            for(let i = 0; i <= 36; i++){
                grid.push(i);
                for(let j = 0; j <= grid.length; j++){
                    let x = document.createElement('div');
                    x.classList.add('canvas');
                    x.appendChild(gridDisplay);
                }
            }
            break;
    }
}
