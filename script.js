// script.js

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color when the button is clicked
document.getElementById('changeColorButton').addEventListener('click', function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});


// script.js

function sortNumbers() {
    // Get the input value and split it into an array of numbers
    var inputNumbers = document.getElementById('inputNumbers').value;
    var numbersArray = inputNumbers.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    // Sort the array of numbers
    numbersArray.sort(function(a, b) {
        return a - b;
    });

    // Display the sorted numbers
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = "Sorted Numbers: " + numbersArray.join(', ');
}
