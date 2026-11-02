let buttons = document.querySelectorAll(".answer-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let question = button.closest(".question-block");

        let questionButtons = question.querySelectorAll(".answer-btn");
    
        questionButtons.forEach(function(btn) {
             btn.classList.remove("active");
        });
        
        button.classList.add("active");});
});

document.getElementById("show-result").addEventListener("click", function() {
    let A = 0;

    let B = 0;

    let selectedAnswers = document.querySelectorAll(".active");

    selectedAnswers.forEach(function(answer){
        if (answer.dataset.answer === "A") {
                A++;
        } else {
                B++;
        }
            
    });

    let result = document.getElementById("result");
    
    if (A > B) {
        result.textContent = " You are an Aurora! You are creative, full of imagination, and wonder.";
    }else{
        result.textContent = "You are a Constellation! You are brave, focused, adventurous, and a natural born leader.";

    }
});