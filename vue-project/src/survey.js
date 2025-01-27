document.addEventListener("DOMContentLoaded", function () {
    const app = {
      started: false,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showThankYou: false,
      feedback: [],
      questions: [
        {
          question: "How would you rate the design of this website?",
          options: ["Excellent", "Good", "Average", "Poor"],
        },
        {
          question: "Was the website easy to navigate?",
          options: ["Very Easy", "Somewhat Easy", "Neutral", "Difficult"],
        },
        {
          question: "Would you recommend this website to others?",
          options: ["Definitely", "Probably", "Not Sure", "No"],
        },
        {
          question: "Any suggestions for improvement?",
          options: ["Better Design", "More Features", "More Interactions", "None"],
        },
      ],
  
      startSurvey() {
        this.started = true;
        this.updateScreen();
      },
  
      selectAnswer(index) {
        this.selectedAnswer = index;
        document.getElementById("nextButton").style.display = "inline-block";
        const options = document.querySelectorAll("#optionsList li");
        options.forEach((option, i) => {
          option.classList.toggle("selected", i === index);
        });
      },
  
      nextQuestion() {
        this.feedback.push({
          question: this.questions[this.currentQuestionIndex].question,
          answer: this.questions[this.currentQuestionIndex].options[this.selectedAnswer],
        });
        this.selectedAnswer = null;
        document.getElementById("nextButton").style.display = "none";
  
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.showThankYou = true;
          this.started = false;
        }
        this.updateScreen();
      },
  
      restartSurvey() {
        this.currentQuestionIndex = 0;
        this.feedback = [];
        this.selectedAnswer = null;
        this.showThankYou = false;
        this.started = false;
        this.updateScreen();
      },
  
      updateScreen() {
        const startScreen = document.getElementById("startScreen");
        const questionScreen = document.getElementById("questionScreen");
        const thankYouScreen = document.getElementById("thankYouScreen");
        const questionText = document.getElementById("questionText");
        const optionsList = document.getElementById("optionsList");
  
        startScreen.style.display = this.started ? "none" : this.showThankYou ? "none" : "block";
        questionScreen.style.display = this.started ? "block" : "none";
        thankYouScreen.style.display = this.showThankYou ? "block" : "none";
  
        if (this.started) {
          const currentQuestion = this.questions[this.currentQuestionIndex];
          questionText.textContent = currentQuestion.question;
          optionsList.innerHTML = "";
          currentQuestion.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => this.selectAnswer(index));
            optionsList.appendChild(li);
          });
        }
      },
    };
  
    // Event listeners for survey buttons
    document.getElementById("startButton").addEventListener("click", () => app.startSurvey());
    document.getElementById("nextButton").addEventListener("click", () => app.nextQuestion());
    document.getElementById("restartButton").addEventListener("click", () => app.restartSurvey());
  
    // Additional feedback submission logic
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");
  
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const userName = document.getElementById("userName").value.trim();
      const feedbackText = document.getElementById("additionalFeedback").value.trim();
  
      if (!userName) {
        alert("Please enter your name before submitting.");
        return;
      }
  
      if (!feedbackText) {
        alert("Please enter your feedback before submitting.");
        return;
      }
  
      // Add the comment to the list
      const commentItem = document.createElement("li");
      commentItem.innerHTML = `<strong>${userName}:</strong> ${feedbackText}`;
      commentsList.appendChild(commentItem);
  
      // Clear the form fields
      document.getElementById("userName").value = "";
      document.getElementById("additionalFeedback").value = "";
    });
  });