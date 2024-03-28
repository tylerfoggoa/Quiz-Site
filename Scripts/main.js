document.addEventListener("DOMContentLoaded", function() {
    const answerCards = document.querySelectorAll(".answer-card");
    const submitButton = document.getElementById("submit-btn");

    let totalScore = 0;

    answerCards.forEach(card => {
        card.addEventListener("click", function() {
            // Remove selection from all cards
            answerCards.forEach(card => {
                card.classList.remove("selected");
            });

            // Add selection to the clicked card
            this.classList.add("selected");

            // Get the selected answer (stored as data-answer attribute)
            const selectedAnswer = parseInt(this.getAttribute("data-answer"));
            console.log("Selected answer:", selectedAnswer);

            // Add the selected answer to the total score
            totalScore += selectedAnswer;
            console.log("Total score:", totalScore);
        });
    });

    submitButton.addEventListener("click", function() {
        // Redirect based on total score
        if (totalScore == 5) {
            window.location.href = "at5.html";
        } 

        if (totalScore == 100) {
            window.location.href = "at100.html";
        }
    });
});


///////////////////////////// WEBSITE SPECIFIC FUNCTIONS ////////////////////////////////////////////////

// Fun mode
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function funMode() {
    document.body.style.backgroundColor = getRandomColor();
    setInterval(funMode, 1000);
}