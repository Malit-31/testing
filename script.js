let correctAnswer;

function generateNumbers() {
    // Generate two random numbers between 1 and 30
    const number1 = Math.floor(Math.random() * 30) + 1;
    const number2 = Math.floor(Math.random() * 30) + 1;

    // Calculate the correct answer
    correctAnswer = number1 * number2;

    // Display the numbers and show the input box
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
    document.getElementById('question').classList.remove('hidden');
    document.getElementById('answer').classList.remove('hidden');
    document.getElementById('feedback').classList.add('hidden');

    // Clear the input field and focus on it
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
}

function checkAnswer(event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        const userAnswer = parseInt(document.getElementById('answer').value, 10);

        // Check if the answer is correct
        if (userAnswer === correctAnswer) {
            // Generate new numbers immediately
            generateNumbers();
        } else {
            // Show feedback if the answer is incorrect
            document.getElementById('feedback').textContent = 'Incorrect, try again.';
            document.getElementById('feedback').classList.remove('hidden');
        }
    }
}
