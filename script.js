let currentLesson = 0;
let score = 0;
let attempts = 0;
const maxAttempts = 3;

function updateUI() {
    const lesson = lessons[currentLesson];
    
    // Update lesson content
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonConcept').innerHTML = lesson.concept.replace(/\n/g, '<br>');
    document.getElementById('practice').textContent = lesson.practice;
    document.getElementById('testString').textContent = lesson.testString;
    
    // Update progress bar
    const progress = ((currentLesson) / (lessons.length - 1)) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index < currentLesson) {
            step.classList.add('completed');
        } else if (index === currentLesson) {
            step.classList.add('active');
        }
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentLesson === 0;
    document.getElementById('nextBtn').disabled = true;
    
    // Reset UI elements
    document.getElementById('userPattern').value = '';
    document.getElementById('matches').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('solutionSection').style.display = 'none';
    document.getElementById('solutionBtn').style.display = 'block';
    attempts = 0;
    
    // Highlight code
    Prism.highlightAll();
}

function showSolution() {
    const lesson = lessons[currentLesson];
    const solutionSection = document.getElementById('solutionSection');
    const solutionContent = document.getElementById('solutionContent');
    
    solutionContent.innerHTML = `
        <h4>Solution:</h4>
        <p><code>${lesson.solution}</code></p>
        <h4>How it works:</h4>
        <p>${lesson.explanation}</p>
    `;
    
    solutionSection.style.display = 'block';
    document.getElementById('solutionBtn').style.display = 'none';
    document.getElementById('nextBtn').disabled = false;
}

function checkPattern() {
    const lesson = lessons[currentLesson];
    const userPattern = document.getElementById('userPattern').value;
    const matchesDiv = document.getElementById('matches');
    const feedbackDiv = document.getElementById('feedback');
    
    if (!userPattern) {
        feedbackDiv.textContent = 'Please enter a pattern.';
        feedbackDiv.className = 'feedback error';
        feedbackDiv.style.display = 'block';
        return;
    }
    
    try {
        const regex = new RegExp(userPattern, 'g');
        const matches = lesson.testString.match(regex) || [];
        
        matchesDiv.textContent = `Matches found: ${JSON.stringify(matches)}`;
        matchesDiv.style.display = 'block';
        
        if (arraysEqual(matches.sort(), lesson.expectedMatches.sort())) {
            feedbackDiv.innerHTML = '🎉 Correct! Great job!';
            feedbackDiv.className = 'feedback success';
            document.getElementById('nextBtn').disabled = false;
            document.getElementById('solutionBtn').style.display = 'none';
            if (attempts === 0) score++;
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                feedbackDiv.innerHTML = `
                    <p>❌ Not quite right. You've used all your attempts.</p>
                    <p>Click "Show Solution" to see the answer and explanation.</p>
                `;
                document.getElementById('nextBtn').disabled = false;
            } else {
                feedbackDiv.innerHTML = `
                    <p>❌ Not quite right. Try again! (${maxAttempts - attempts} attempts remaining)</p>
                    <p>Expected matches: ${JSON.stringify(lesson.expectedMatches)}</p>
                `;
            }
            feedbackDiv.className = 'feedback error';
        }
        feedbackDiv.style.display = 'block';
        
    } catch (e) {
        feedbackDiv.textContent = `Invalid regex pattern: ${e.message}`;
        feedbackDiv.className = 'feedback error';
        feedbackDiv.style.display = 'block';
        attempts++;
    }
}

function previousLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        updateUI();
    }
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        updateUI();
    } else {
        showCompletion();
    }
}

function showCompletion() {
    const modal = document.getElementById('completionModal');
    const scoreSpan = document.getElementById('finalScore');
    const message = document.getElementById('completionMessage');
    
    scoreSpan.textContent = `${score}/${lessons.length}`;
    
    if (score === lessons.length) {
        message.innerHTML = '🏆 Perfect score! You\'ve mastered the basics of regex!';
    } else if (score >= lessons.length * 0.7) {
        message.innerHTML = '👍 Great progress! You\'re getting really good at regex!';
    } else {
        message.innerHTML = '💪 Keep practicing! Regular expressions take time to master.';
    }
    
    modal.style.display = 'flex';
}

function restartTutorial() {
    currentLesson = 0;
    score = 0;
    document.getElementById('completionModal').style.display = 'none';
    updateUI();
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Initialize the tutorial
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    
    // Add Enter key support for the input field
    document.getElementById('userPattern').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPattern();
        }
    });
}); 