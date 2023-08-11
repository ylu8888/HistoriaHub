
const questions = [
    { //1
        question: "Who was a legendary founder of Rome?",
        answers: [
          { text: "Julius Caesar", correct: false },
          { text: "Augustus", correct: false },
          { text: "Claudius", correct: false },
          { text: "Romulus", correct: true }
        ]
    },
    { //2
        question: 'Who were the members of the First Triumvirate?',
        answers: [
          { text: 'Julius Caesar, Brutus, and Cicero', correct: false },
          { text: 'Julius Caesar, Pompey, and Crassus', correct: true },
          { text: 'Julius Caesar, Brutus, and Cassius', correct: false },
          { text: 'Julius Caesar, Mark Antony, and Pompey', correct: false },
          
        ]
      },
      { //3
        question: "Which decisive battle completed Julius Caesar's conquest of Gaul?",
        answers: [
          { text: 'Battle of Actium', correct: false },
          { text: 'Battle of Alesia', correct: true },
          { text: 'Battle of Pharsalus', correct: false },
          { text: 'Battle of Cannae', correct: false }
        ]
      },
    {
        //4
        question: "When did Julius Caesar get assassinated?",
        answers: [
          { text: "March 14, 44 BC", correct: false },
          { text: "March 14, 45 BC", correct: false },
          { text: "March 15, 44 BC", correct: true },
          { text: "March 15, 45 BC", correct: false },
        ],
    },
    { //5
        question: "Which general famously crossed the Alps with elephants during the Second Punic War?",
        answers: [
        { text: "Julius Caesar", correct: false },
        { text: "Scipio Africanus", correct: false },
        { text: "Augustus", correct: false },
        { text: "Hannibal", correct: true }
        ]
        },
        { //6
            question: "How long were Roman Senators elected for?",
            answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: false },
            { text: "4 years", correct: false },
            { text: "For life", correct: true }
            ]
            },
{ //7
question: "About how long did the Roman Republic last?",
answers: [
{ text: "100 years", correct: false },
{ text: "300 years", correct: false },
{ text: "500 years", correct: true},
{ text: "1000 years", correct: false }
]
},
{ //8
    question: "How many consuls were elected and for how long did they serve?",
    answers: [
    { text: "2 consuls for 1 year", correct: true },
    { text: "2 consuls for 2 years", correct: false },
    { text: "4 consuls for 1 year", correct: false },
    { text: "2 consuls for life", correct: false }
    ]
    },
    { //9
        question: "Which Roman general introduced significant military reforms and was known for creating a private army of loyal soldiers?",
        answers: [
        { text: "Julius Caesar", correct: false },
        { text: "Marius", correct: true },
        { text: "Sulla", correct: false },
        { text: "Pompey", correct: false }
        ]
        },
      {
        //10
        question: "Who were the famous lovers of Cleopatra?",
        answers: [
          { text: "Julius Caesar and Brutus", correct: false },
          { text: "Julius Caesar and Octavian", correct: false },
          { text: "Julius Caesar and Mark Antony", correct: true },
          { text: "Octavian and Mark Antony", correct: false }
        ]
      },
      { //11
        question: "In which decisive naval battle did Octavian defeat the forces of Mark Antony and Cleopatra",
        answers: [
        { text: "Battle of Zama", correct: false },
        { text: "Battle of Pharsalus", correct: false },
        { text: "Battle of Actium", correct: true },
        { text: "Battle of Cannae", correct: false }
        ]
        },
        {
            question: "Who was raped by King Tarquin's son and later committed suicide, leading to the founding of the Roman Republic?",
            answers: [
            { text: "Livia", correct: false },
            { text: "Lucretia", correct: true },
            { text: "Agrippina", correct: false },
            { text: "Helena", correct: false }
            ]
        },
      { //13
        question: "When Julius Caesar was ordered to return from Gaul for trial, he defied the Senate and famously crossed which river to invade Rome?",
        answers: [
        { text: "Tiber", correct: false },
        { text: "Nile", correct: false },
        { text: "Rhine", correct: false },
        { text: "Rubicon", correct: true }
        ]
        },
        { //14
            question: "Julius Caesar famously said 'Veni, Vidi, Vici,' after conquering which place?",
            answers: [
            { text: "Gaul", correct: false },
            { text: "Egypt", correct: false },
            { text: "Greece", correct: false },
            { text: "Pontus", correct: true }
          
            ]
            },
            { //15
                question: "Who defeated Hannibal in the Second Punic War at the Battle of Zama ",
                answers: [
                { text: "Scipio Aemilianus", correct: false },
                { text: "Scipio Africanus", correct: true },
                { text: "Julius Caesar", correct: false },
                { text: "Augustus", correct: false }
              
                ]
                }
    
     
      
];
    
    const startButton = document.querySelector('#start-btn');
    const nextButton = document.querySelector('#next-btn');
    const questionsContainer= document.querySelector('#questions-container');
    const questionElement = document.querySelector('#question');
    const answerButtons = document.querySelector('#answer-btns');
    const quizTitle = document.querySelector('.quiztitle');

    let counter = 0;
    let shuffledQuestions, currentIndex;

    //when start button is clicked, run start function
    startButton.addEventListener('click', startGame); 
    nextButton.addEventListener('click', () => {
        currentIndex++; //increment the question index by 1 to get to the next quest
        setNextQuestion();
    });


    function startGame(){
        //classList.add adds CSS classes to an elements class attribute
        startButton.classList.add('hide');
        quizTitle.classList.add('hide');
        //since questions-container is initially on hide, we remove it 
        questionsContainer.classList.remove('hide');
        //randomly shuffle the questions array each time new game starts
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentIndex = 0;
        //when game starts set the first question
        setNextQuestion();
    }

    function setNextQuestion(){
        resetState();
        //show the question based on shuffled index
        showQuestion(shuffledQuestions[currentIndex]);
    }

    function showQuestion(question){
        //question.question is used to access the 'question' property of the question object
        //the question object (the parameter) is taken from the shuffled array question
        questionElement.innerHTML = question.question;

        //populate the answer buttons by looping through each answer
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn'); //add the CSS class 'btn'

            if(answer.correct){
                //adds a data attribute to button
                button.dataset.correct = answer.correct;
            }

            button.addEventListener('click', selectAnswer);
            //add the buttons to answer buttons, to be removed after each question
            answerButtons.appendChild(button);
        })
    }

    //reset all the answer buttons
    function resetState(){
        clearStatusClass(document.body);
        nextButton.classList.add('hide'); //hide the next button
        while(answerButtons.firstChild){ //if there is a child in answerButtons, remove it
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedButton = e.target; //see which button was clicked
        const correct = selectedButton.dataset.correct; //see if answer was correct
        if(correct){
          counter++; // Assuming you have stored the user's id in the req.user object
         
        }
        //see if body should be sent to correct or wrong
        setStatusClass(document.body, correct);

        //loop through the buttons and set their css as well
        /* only do this, if you want to show red for ALL red answers
        Array.from(answerButtons.children).forEach(button => { //convert to array
            setStatusClass(button, button.dataset.correct);
        })
        right now we only show red for the button if its wrong, not all btns*/

        setStatusClass(selectedButton, selectedButton.dataset.correct);

        //check if we ran out of questions or if theres more
        if(shuffledQuestions.length > currentIndex + 1){ 
          //this means theres more questions left
            nextButton.classList.remove('hide');
        }
        else{
          //we reached end of quiz
            if(counter == 15){
                quizTitle.innerHTML = `100%! You got all ${counter}/15 correct, you mastered this section!`;
    
            }
            else if(counter < 12){
                quizTitle.innerHTML = `You got ${counter}/15 correct, you should review this section again!`;
               
            }
            else{
                quizTitle.innerHTML = `You got ${counter}/15 correct, a bit more studying and you'll be perfect!`;
             
            }
            //reveal quiz score and the restart button
            quizTitle.classList.remove('hide');
            startButton.innerHTML = 'Restart';
            startButton.classList.remove('hide');
            
            counter = 0; //reset
        }
        
       
}
    

function setStatusClass(element, correct){
    clearStatusClass(element);

    if(correct){
        element.classList.add('correct');
      
    } else{
        element.classList.add('wrong'); //if button was wrong make it red and then 
        Array.from(answerButtons.children).forEach(button => { //convert to array
          if(button.dataset.correct){ //loop through each button, if that button is correct
            button.classList.add('correct'); //make it green
          }
      })
        
    }

    
}

function clearStatusClass(element) {
  //just reset background to blue
    element.classList.remove('correct');
    element.classList.remove('wrong');
    
}


