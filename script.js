// list of question

const quizDB = [
        {
        question:"Q1: What is the full form of OOPs?",
        a: "Oriented Object Programming",
        b: "Object Object Pragram",
        c: "Objected Oriented Programming",
        d: "Object Oriented Programming",
        ans: "ans-d"
        },
    
        {
        question:"Q2: What is the full form of HTML?",
        a: "Hyper Text Marking Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Textual Making Language",
        d: "Hyber Text Markup Language",
        ans: "ans-b"
        },
    
        {
        question:"Q3: What is the full form of SQL?",
        a: "Structured Query Language",
        b: "Sequential Query Language",
        c: "System Query Language",
        d: "Sequential Query Language",
        ans: "ans-a"
        },
    
        {
        question:"Q4: Who is the father of Internet?",
        a: "Vint Cerf",
        b: "Charles Babbage",
        c: "Dennis Ritchie",
        d: "Mackmilan",
        ans: "ans-a"
        },
    
        {
        question:"Q5: What is the full form of HTTP?",
        a: "Hypo Text Transportation Program",
        b: "Hyper Text Transportation Protocol",
        c: "Hyper Text Transfer Protocol",
        d: "Hypo Text Transportation Program",
        ans: "ans-c"
        },
    
        {
        question:"Q6: What is the full form of CSS?",
        a: "Cascade Styling Sheet",
        b: "Cascade Styling Sequence",
        c: "Cascade Style Sheet",
        d: "Cascading Style Sheets",
        ans: "ans-d"
        },
    
        {
        question:"Q7: Who is the father of Java?",
        a: "James Gosling",
        b: "Vint Cerf",
        c: "Guindo van Rossum",
        d: "Robert H. Antonio",
        ans: "ans-a"
        },
    ]
    
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const option5 = document.querySelector('#option5');
    const option6 = document.querySelector('#option6');
    // const option7 = document.querySelector('#option7');
    const submit = document.querySelector('#submit');
    
    
    const answers = document.querySelectorAll('.answer');
    const showScore =  document.querySelector('#showScore');
    
    
    // no of questions & scores are zero in starting
    let questionCount  = 0;
    let correct = 0;
    let incorrect = 1;
    
    
    // loading question from question List
    const loadQuestion = () => {
    
        const questionList = quizDB[questionCount];
        question.innerText = questionList.question;
    
        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
    
    }
    loadQuestion();
    
    
    // cheching if answer is true or not
    const getCheckedAnswer = () =>{
        let answer;
        answers.forEach((currAnsElem) => {
            if(currAnsElem.checked){
                answer = currAnsElem.id;
            }
        });
            return answer;
    }
    
    
    // de-selecting all options while loading quiz again
        const deselectAll = () =>{
            answers.forEach((currAnsElem) => currAnsElem.checked = false);
        }

    submit.addEventListener('click', () => {
        const checkedAnswer = getCheckedAnswer();
        // console.log(checkedAnswer);
        if(checkedAnswer === quizDB[questionCount].ans){
            correct++;
        }
        else{
            incorrect++
        }
        questionCount++;
    
        deselectAll();
    
        // loading next question
        if(questionCount < quizDB.length){
            loadQuestion();
        }
    
        // play again after completing existing quiz
        else{
            showScore.innerHTML = 
            `<h3>You Scored ${incorrect}/${quizDB.length}✌</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>`;
            showScore.classList.remove('scoreArea');
        }
    })