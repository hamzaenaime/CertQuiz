/**
 * Salesforce Data Architect Quiz Application
 */

// Import quiz data
import { quizData } from '../data/quiz-data.js';

// Main quiz state and variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let incorrectQuestions = [];
let revealedAnswers = Array(quizData.length).fill(false); // Track revealed answers
let quizQuestions = []; // Will hold the 15 randomly selected questions
let timer;
let timeLeft = 30 * 60; // 30 minutes in seconds

// DOM elements
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const multiSelectHintEl = document.getElementById('multi-select-hint');
const submitBtn = document.getElementById('submit-btn');
const navPrevBtn = document.getElementById('nav-prev');
const navNextBtn = document.getElementById('nav-next');
const resultsContainer = document.getElementById('results-container');
const reviewContainer = document.getElementById('review-container');
const progressEl = document.getElementById('quiz-progress');
const answerExplanationEl = document.getElementById('answer-explanation');
const timerDisplay = document.getElementById('timer');

/**
 * Initialize the quiz when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});

/**
 * Set up the quiz interface and load the first question
 */
function initializeQuiz() {
    // Select random questions from the full quiz data (15 questions)
    quizQuestions = getRandomQuestions(quizData, 30);
    
    // Reset state variables
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(quizQuestions.length).fill([]); // Initialize with empty arrays
    incorrectQuestions = [];
    revealedAnswers = Array(quizQuestions.length).fill(false);
    timeLeft = 30 * 60; // Reset timer to 30 minutes
    
    // Show the quiz container, hide results and review
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    if (reviewContainer) reviewContainer.style.display = 'none';
    
    // Set up event listeners for navigation buttons
    if (navPrevBtn) {
        navPrevBtn.addEventListener('click', navigateToPrevQuestion);
        navPrevBtn.disabled = true; // Disable on first question
    }
    
    if (navNextBtn) {
        navNextBtn.addEventListener('click', navigateToNextQuestion);
        updateNavButtons();
    }
    
    // Set up submit button as a reveal toggle
    submitBtn.textContent = "Reveal Answer";
    submitBtn.addEventListener('click', toggleAnswerReveal);
    submitBtn.disabled = false; // Always enable the reveal button
    
    // Start the timer
    startTimer();
    
    // Load the first question
    loadQuestion();
}

/**
 * Load the current question into the UI
 */
function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestionData = quizQuestions[currentQuestionIndex];
        
        // Update question text
        questionEl.innerText = `Q${currentQuestionIndex + 1}: ${currentQuestionData.question}`;
        
        // Show/hide multi-select hint and add required selections count
        if (multiSelectHintEl) {
            if (currentQuestionData.multiSelect) {
                const correctAnswers = Array.isArray(currentQuestionData.correctAnswer) ? 
                    currentQuestionData.correctAnswer : [currentQuestionData.correctAnswer];
                multiSelectHintEl.innerHTML = `This question allows multiple selections. Select all that apply. <span id="required-selections">(${correctAnswers.length} correct options)</span>`;
                multiSelectHintEl.style.display = 'block';
            } else {
                multiSelectHintEl.style.display = 'none';
            }
        }
        
        // Update progress indicator
        if (progressEl) {
            progressEl.innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
        }
        
        // Clear previous answers
        answersEl.innerHTML = '';
        
        // Sort answer keys to ensure consistent order
        const answerKeys = Object.keys(currentQuestionData.answers).sort();
        const inputType = currentQuestionData.multiSelect ? 'checkbox' : 'radio';
        
        // Create answer elements
        answerKeys.forEach(key => {
            const li = document.createElement('li');
            const uniqueId = `answer-${currentQuestionIndex}-${key}`;
            
            const input = document.createElement('input');
            input.type = inputType;
            input.id = uniqueId;
            input.name = `question-${currentQuestionIndex}`;
            input.value = key;
            
            // If this is a previously answered question, check the appropriate options
            if (userAnswers[currentQuestionIndex].includes(key)) {
                input.checked = true;
                li.classList.add('selected');
            }
            
            // Add change event to enable submit button and toggle selected class
            input.addEventListener('change', () => {
                // Handle selected state for the list item
                if (input.checked) {
                    li.classList.add('selected');
                } else {
                    li.classList.remove('selected');
                }
                
                // Save user's selection immediately
                saveUserAnswer();
            });
            
            const label = document.createElement('label');
            label.htmlFor = uniqueId;
            label.textContent = `${key.toUpperCase()}. ${currentQuestionData.answers[key]}`;
            
            li.appendChild(input);
            li.appendChild(label);
            
            // Make the whole li clickable
            li.addEventListener('click', (e) => {
                // Avoid double-triggering if label or input is clicked directly
                if (e.target !== input && e.target !== label) {
                    // Toggle the input based on its type
                    if (inputType === 'radio') {
                        // For radio buttons, uncheck all others first
                        document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]`)
                            .forEach(radio => {
                                radio.checked = false;
                                radio.closest('li').classList.remove('selected');
                            });
                        input.checked = true;
                    } else {
                        // For checkboxes, just toggle the current one
                        input.checked = !input.checked;
                    }
                    
                    // Update the selected class
                    li.classList.toggle('selected', input.checked);
                    
                    // Save user's selection immediately
                    saveUserAnswer();
                }
            });
            
            // If the answer is revealed, add appropriate classes
            if (revealedAnswers[currentQuestionIndex]) {
                markAnswerCorrectness(li, key, currentQuestionData);
            }
            
            answersEl.appendChild(li);
        });
        
        // Update nav button state
        updateNavButtons();
        
        // Update the answer explanation display
        updateAnswerExplanation();
        
        // Update the submit button text based on if answers are revealed
        updateSubmitButtonText();
        
        // Add fade-in animation
        questionContainer.classList.remove('fade-in');
        void questionContainer.offsetWidth; // Trigger reflow
        questionContainer.classList.add('fade-in');
        
    } else {
        // Should not happen if called correctly
        showResults();
    }
}

/**
 * Save the user's current answer selections
 */
function saveUserAnswer() {
    const selectedInputs = document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]:checked`);
    const selectedAnswers = Array.from(selectedInputs).map(input => input.value);
    userAnswers[currentQuestionIndex] = selectedAnswers;
}

/**
 * Mark the correctness of an answer in the UI
 */
function markAnswerCorrectness(li, key, questionData) {
    const correctAnswers = Array.isArray(questionData.correctAnswer) 
        ? questionData.correctAnswer 
        : [questionData.correctAnswer];
    const userSelectedAnswers = userAnswers[currentQuestionIndex];
    
    li.classList.remove('correct', 'incorrect', 'user-selected');
    
    // Check if this option was selected by user
    const wasSelected = userSelectedAnswers.includes(key);
    
    // Check if this option is correct
    const isCorrect = correctAnswers.includes(key);
    
    if (wasSelected) {
        li.classList.add('user-selected');
        
        if (isCorrect) {
            // User selected a correct answer
            li.classList.add('correct');
        } else {
            // User selected an incorrect answer
            li.classList.add('incorrect');
        }
    } else if (isCorrect) {
        // This is a correct answer that user didn't select
        li.classList.add('correct');
    }
}

/**
 * Update the submit button text based on if answers are revealed
 */
function updateSubmitButtonText() {
    if (revealedAnswers[currentQuestionIndex]) {
        submitBtn.textContent = "Hide Answer";
        submitBtn.classList.add('reveal-active');
    } else {
        submitBtn.textContent = "Reveal Answer";
        submitBtn.classList.remove('reveal-active');
    }
}

/**
 * Update answer explanation display
 */
function updateAnswerExplanation() {
    if (revealedAnswers[currentQuestionIndex]) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        if (currentQuestion.explanation) {
            answerExplanationEl.innerHTML = `<strong>Explanation:</strong> ${currentQuestion.explanation}`;
            answerExplanationEl.classList.add('visible');
        } else {
            answerExplanationEl.classList.remove('visible');
        }
    } else {
        answerExplanationEl.classList.remove('visible');
    }
}

/**
 * Update navigation buttons state based on current question index
 */
function updateNavButtons() {
    if (navPrevBtn) {
        navPrevBtn.disabled = currentQuestionIndex === 0;
    }
    
    if (navNextBtn) {
        // On the final question, change the text of the next button to indicate it will finish the quiz
        if (currentQuestionIndex === quizQuestions.length - 1) {
            navNextBtn.textContent = "Submit Quiz";
            navNextBtn.classList.add('submit-quiz');
        } else {
            navNextBtn.textContent = "Next";
            navNextBtn.classList.remove('submit-quiz');
        }
        navNextBtn.disabled = false; // Always enabled to allow submitting
    }
}

/**
 * Navigate to the previous question
 */
function navigateToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

/**
 * Navigate to the next question or show results on the final question
 */
function navigateToNextQuestion() {
    // Save user's answer for the current question before moving on
    saveUserAnswer();
    
    // Check if this question should be marked as incorrect
    checkAnswerCorrectness();
    
    // If this is the final question, show results
    if (currentQuestionIndex === quizQuestions.length - 1) {
        showResults();
    } 
    // Otherwise move to the next question
    else if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

/**
 * Toggle revealing the answer
 */
function toggleAnswerReveal() {
    // Save user's current selections
    saveUserAnswer();
    
    // Toggle reveal state
    revealedAnswers[currentQuestionIndex] = !revealedAnswers[currentQuestionIndex];
    
    // Update UI to show correct/incorrect answers
    const answerItems = document.querySelectorAll(`#answers li`);
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (revealedAnswers[currentQuestionIndex]) {
        // Mark answers as correct/incorrect
        answerItems.forEach(li => {
            const input = li.querySelector('input');
            const key = input.value;
            markAnswerCorrectness(li, key, currentQuestion);
        });
    } else {
        // Remove correct/incorrect classes
        answerItems.forEach(li => {
            const input = li.querySelector('input');
            const key = input.value;
            
            li.classList.remove('correct', 'incorrect');
            
            // Keep the selected class if this answer was selected
            if (userAnswers[currentQuestionIndex].includes(key)) {
                li.classList.add('selected');
            } else {
                li.classList.remove('selected');
            }
        });
    }
    
    // Update explanation
    updateAnswerExplanation();
    
    // Update submit button text
    updateSubmitButtonText();
    
    // Check answer correctness when revealing
    if (revealedAnswers[currentQuestionIndex]) {
        checkAnswerCorrectness();
    }
}

/**
 * Check if the user's answer is correct and update score/incorrect questions
 */
function checkAnswerCorrectness() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedAnswers = userAnswers[currentQuestionIndex];
    const correctAnswers = Array.isArray(currentQuestion.correctAnswer) 
        ? currentQuestion.correctAnswer 
        : [currentQuestion.correctAnswer];
    
    let isCorrect = false;
    
    // For multi-select: all correct options must be selected, and no incorrect options
    if (currentQuestion.multiSelect) {
        const hasAllCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer));
        const hasNoIncorrect = selectedAnswers.every(answer => correctAnswers.includes(answer));
        isCorrect = hasAllCorrect && hasNoIncorrect;
    } 
    // For single-select: the one selected answer must match the correct one
    else {
        isCorrect = selectedAnswers.length === 1 && correctAnswers.includes(selectedAnswers[0]);
    }
    
    // If the answer is incorrect and not already in incorrectQuestions, add it
    if (!isCorrect && !incorrectQuestions.includes(currentQuestionIndex)) {
        incorrectQuestions.push(currentQuestionIndex);
    } 
    // If the answer is correct and was previously marked incorrect, remove it from incorrectQuestions
    else if (isCorrect && incorrectQuestions.includes(currentQuestionIndex)) {
        incorrectQuestions = incorrectQuestions.filter(idx => idx !== currentQuestionIndex);
    }
}

/**
 * Show the results screen
 */
function showResults() {
    // Recalculate score based on incorrectQuestions
    score = quizQuestions.length - incorrectQuestions.length;
    
    // Hide quiz container and show results
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    if (reviewContainer) reviewContainer.style.display = 'none';
    
    // Calculate percentage
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    // Build results HTML
    let resultHTML = `
        <h2>Quiz Complete!</h2>
        <div class="score-circle">
            <span class="score-value">${percentage}%</span>
        </div>
        <p class="score-display">You answered ${score} out of ${quizQuestions.length} questions correctly.</p>
    `;
    
    // Add feedback based on score
    if (percentage >= 80) {
        resultHTML += `<p style="color: green; font-weight: bold;">Excellent work! You have a strong understanding of Salesforce Data Architecture principles.</p>`;
    } else if (percentage >= 60) {
        resultHTML += `<p style="color: orange;">Good effort! Continue studying to strengthen your knowledge of Salesforce Data Architecture.</p>`;
    } else {
        resultHTML += `<p style="color: #dc3545;">Keep studying! Review the core concepts of Salesforce Data Architecture to improve your understanding.</p>`;
    }
    
    // Add buttons
    resultHTML += `
        <div class="results-buttons">
            <button class="retry-btn" id="retry-btn">Retry Quiz</button>
            <button class="review-btn" id="review-btn">Review All Questions</button>
        </div>
    `;
    
    resultsContainer.innerHTML = resultHTML;
    
    // Add event listeners to buttons
    document.getElementById('retry-btn').addEventListener('click', () => {
        location.reload(); // Simple way to restart the quiz
    });
    
    document.getElementById('review-btn').addEventListener('click', showReview);
}

/**
 * Show the review screen for all questions
 */
function showReview() {
    // Hide other containers and show review
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    
    // Create review container if it doesn't exist
    if (!reviewContainer) {
        reviewContainer = document.createElement('div');
        reviewContainer.id = 'review-container';
        document.body.appendChild(reviewContainer);
    }
    
    reviewContainer.style.display = 'block';
    
    // Build HTML for review
    let reviewHTML = `
        <h2>Review of All Questions</h2>
    `;
    
    // First show incorrect questions
    if (incorrectQuestions.length > 0) {
        reviewHTML += `<h3>Incorrect Answers (${incorrectQuestions.length}):</h3>`;
        
        incorrectQuestions.forEach(questionIndex => {
            reviewHTML += buildReviewQuestionHTML(questionIndex);
        });
    }
    
    // Then show correct questions
    const correctQuestions = [];
    for (let i = 0; i < quizQuestions.length; i++) {
        if (!incorrectQuestions.includes(i)) {
            correctQuestions.push(i);
        }
    }
    
    if (correctQuestions.length > 0) {
        reviewHTML += `<h3>Correct Answers (${correctQuestions.length}):</h3>`;
        
        correctQuestions.forEach(questionIndex => {
            reviewHTML += buildReviewQuestionHTML(questionIndex);
        });
    }
    
    // Add buttons to go back to results or retry quiz
    reviewHTML += `
        <div class="results-buttons">
            <button class="nav-btn" id="back-to-results">Back to Results</button>
            <button class="retry-btn" id="retry-from-review">Retry Quiz</button>
        </div>
    `;
    
    reviewContainer.innerHTML = reviewHTML;
    
    // Add event listeners to buttons
    document.getElementById('back-to-results').addEventListener('click', () => {
        reviewContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
    });
    
    document.getElementById('retry-from-review').addEventListener('click', () => {
        location.reload(); // Simple way to restart the quiz
    });
}

/**
 * Build HTML for a review question
 */
function buildReviewQuestionHTML(questionIndex) {
    const question = quizQuestions[questionIndex];
    let html = `
        <div class="review-question">
            <h3>Question ${questionIndex + 1}</h3>
            <p>${question.question}</p>
    `;
    
    // Add indicator for the number of correct selections required
    if (question.multiSelect) {
        const correctAnswers = Array.isArray(question.correctAnswer) ? 
            question.correctAnswer : [question.correctAnswer];
        html += `<p><em>This question required ${correctAnswers.length} correct selections.</em></p>`;
    }
    
    html += `<div class="review-answers">`;
    
    // Get the correct answers from the question data
    const correctAnswers = Array.isArray(question.correctAnswer) ? 
        question.correctAnswer : [question.correctAnswer];
    const userSelectedAnswers = userAnswers[questionIndex] || [];
    
    // Show all answer options
    Object.keys(question.answers).sort().forEach(key => {
        const isCorrect = correctAnswers.includes(key);
        const wasSelected = userSelectedAnswers.includes(key);
        
        let classes = [];
        if (isCorrect) classes.push('correct');
        if (wasSelected && !isCorrect) classes.push('incorrect');
        if (wasSelected) classes.push('user-selected');
        
        html += `
            <div class="review-answer ${classes.join(' ')}">
                ${key.toUpperCase()}. ${question.answers[key]}
                ${isCorrect ? ' ✓' : ''}
                ${wasSelected && !isCorrect ? ' ✗' : ''}
            </div>
        `;
    });
    
    // Add explanation
    if (question.explanation) {
        html += `
            <div class="explanation">
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        `;
    }
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Export public functions
export { initializeQuiz };

// Function to randomly select questions
function getRandomQuestions(allQuestions, count) {
    // Clone the array to avoid modifying the original
    const questions = [...allQuestions];
    
    // Shuffle using Fisher-Yates algorithm
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    
    // Return the first 'count' questions
    return questions.slice(0, count);
}

/**
 * Start the timer
 */
function startTimer() {
    clearInterval(timer); // Clear any existing timer
    
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        if (timerDisplay) {
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Initialize the quiz when the page loads
window.addEventListener('DOMContentLoaded', initializeQuiz);