
function submitQuiz() {

    // Correct Answers
    let answers = {
        q1: "HTML",
        q2: "CSS",
        q3: "JavaScript",
        q4: "a",
        q5: "getElementById"
    };

    let score = 0;

    // Check each question
    for (let i = 1; i <= 5; i++) {
        let selected = document.querySelector('input[name="q' + i + '"]:checked');

        if (!selected) {
            alert("Please answer all questions!");
            return;
        }

        if (selected.value === answers["q" + i]) {
            score++;
        }
    }

    // Display result
    document.getElementById("result").textContent = `You scored ${score}/5!`;
}

function clearResult() {
    document.getElementById("result").textContent = "";
}
