let para = document.querySelector(".para");
let button = document.querySelectorAll(".btn");
let button2 = document.querySelector("#button");
let questionIndex = 0;
let score = 0; 

const questionBank = [
  {
    question: "Q1: What is 2+2?",
    options: ["4", "3", "1", "5"],
    correctIndex: 0
  },
  {
    question: "Q2: What is 2+1?",
    options: ["4", "3", "1", "2"],
    correctIndex: 1
  },
  {
    question: "Q3: What is 1+1?",
    options: ["4", "3", "2", "1"],
    correctIndex: 2
  }
];

const renderQuestion = () => {
  para.textContent = questionBank[questionIndex].question;
  button.forEach((btn, i) => {
    btn.textContent = questionBank[questionIndex].options[i];
    btn.onclick = () => {
      if (i === questionBank[questionIndex].correctIndex) {
        score++;  
        questionIndex++;
        if (questionIndex < questionBank.length) {
          renderQuestion();
        } else {
          para.textContent = `🎉 Quiz finished! Your score: ${score}/${questionBank.length}`;
          button.forEach(b => b.style.display = "none");
          button2.style.display = "block";
        }
      } else {
        alert("❌ Wrong! Try again.");
      }
    };
  });
};

button2.addEventListener("click", () => {
  questionIndex = 0;
  score = 0;
  button.forEach(b => b.style.display = "inline-block");
  button2.style.display = "none";
  renderQuestion();
});

renderQuestion();


