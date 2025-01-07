let currentQuestionIndex = 0;
let questions = [];

async function loadQuestions() {
    const response = await fetch('/get_questions?category=Python&difficulty=easy');
    questions = await response.json();
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const options = document.querySelectorAll('.option');
    options.forEach((button, index) => {
        button.innerText = question.options[index];
        button.onclick = () => checkAnswer(index + 1);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.correct) {
        alert('Correct!');
    } else {
        alert(`Wrong! Correct answer is: ${question.options[question.correct - 1]}`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert('Quiz Finished!');
    }
}

document.addEventListener('DOMContentLoaded', loadQuestions);

