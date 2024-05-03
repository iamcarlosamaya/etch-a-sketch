document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById("grid-container");
    const generateGridBtn = document.getElementById("generate-grid");
    let timeOutId;
    let currentOpacity = 1;

    function generateGrid(rows, cols) {
        // Clear previous grid
        gridContainer.innerHTML = '';

        // Define cell size
        const cellWidth = 100 / cols;
        const cellHeight = 100 / rows;

        // gridContainer.style.height = cellHeight * rows +'vh';

        // Generate the grid cells
        for (let i = 0; i < rows*cols; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.width = cellWidth + '%';
            cell.style.height = cellHeight + '%';
            gridContainer.appendChild(cell);
            }
    }

    // Add event listeners to mouse movement
    
    // gridContainer.addEventListener("mousedown", function() {
    //     isMouseDown = true;
    // });

    // gridContainer.addEventListener("mouseup", function() {
    //     isMouseDown = false;
    // });

    // Set grid opacity
    // gridCell = document.querySelectorAll('.grid-cell');
    // gridCell.style.opacity = 0;

    gridContainer.addEventListener("mouseover", function(event) {
        clearTimeout(timeOutId);
        const randomNumber = Math.floor(Math.random() * 5);

        // const gridColumnStart = window.getComputedStyle(event.target).getPropertyValue("grid-column-start");

        // Determine the grid column index based on mouse position
        // const rect = gridContainer.getBoundingClientRect();
        // const cellWidth = gridContainer.offsetWidth / 16; // Assuming 16 columns
        // const columnIndex = Math.floor((event.clientX - rect.left) / cellWidth) + 1;

        // const opacity = 1 - columnIndex / 16;
        // console.log("Opacity:", opacity);
        // event.target.style.opacity = opacity;

        currentOpacity  -= 0.1;
        if (currentOpacity < 0) {
            currentOpacity = 0;
        }

        event.target.style.opacity = currentOpacity;
        console.log(currentOpacity);

        timeOutId = setTimeout( function () {
            currentOpacity = 1;
            event.target.style.opacity = ''; 
        }, 200);

        // event.target.style.backgroundColor = 'black';

        switch (randomNumber) {
            case 0:
                return event.target.style.backgroundColor = 'lightblue';
            case 1:
                return event.target.style.backgroundColor = 'red';
            case 2:
                return event.target.style.backgroundColor = 'lightgreen';
            case 3:
                return event.target.style.backgroundColor = 'blue';
            case 4:
                return event.target.style.backgroundColor = 'yellow';
        }

        // setInterval(() => {
        //     gridCell.style.opacity = 
        // })

        // if (isMouseDown) {
        //     event.target.style.backgroundColor = 'lightblue';
        // }
    });

    gridContainer.addEventListener("mouseout", function(event) {
        // event.target.style.backgroundColor = "";

        let timeoutId = setTimeout(function () {
            event.target.style.backgroundColor = ''; // Reset background color
        }, 500);
    });

    generateGridBtn.addEventListener("click", function() {
        const rows = prompt("Select rows"); //parseInt(document.getElementById('rows').value);
        const cols = prompt("Select columns"); //parseInt(document.getElementById('cols').value);

        if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0) {
            generateGrid(rows,cols);
        } else {
            alert("Please add positive numbers only");
        }
    });

    generateGrid(16, 16);

});