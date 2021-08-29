const quizData = [
  {
    question: "What language adds dynamic and interactive to web pages?",
    a: "Ruby",
    b: "Python",
    c: "JavaScript",
    d: "CSS",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "Python",
    b: "C",
    c: "JavaScript",
    d: "Java",
    correct: "c",
  },
  {
    question: "HTML responsible for?",
    a: "HTML is not a programming language",
    b: "Dynamic of the web page",
    c: "Content of the web page",
    d: "Style of the web page",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminal Motoroboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1994",
    c: "1995",
    d: "None of the above",
    correct: "b",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
//let answer = undefined;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Todo: show results
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload
      </button>`;
    }
  }
});
