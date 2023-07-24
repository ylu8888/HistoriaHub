const questions = [
   
    { //1
        question: "Which Greek philosopher tutored Alexander the Great?",
        answers: [
          { text: "Socrates", correct: false },
          { text: "Plato", correct: false },
          { text: "Aristotle", correct: true },
          { text: "Pythagoras", correct: false }
        ]
      },
      { //2
        question: "The final battle between Alexander the Great and Persian King Darius III was called?",
        answers: [
          { text: "Battle of Gaugamela", correct: true },
          { text: "Battle of the Granicus", correct: false },
          { text: "Battle of Issus", correct: false },
          { text: "Siege of Tyre", correct: false }
        ]
      },
      { //3
        question: "Against which enemy did the Macedonians have to face elephants?",
        answers: [
          { text: "Porus", correct: true },
          { text: "Spitamenes ", correct: false },
          { text: "Darius", correct: false },
          { text: "Oxyartes", correct: false }
        ]
      },
      { //4
        question: "Where is Alexander the Great from?",
        answers: [
          { text: "Athens", correct: false },
          { text: "Sparta", correct: false },
          { text: "Macedon", correct: true },
          { text: "Persia", correct: false }
        ]
      },
      { //5
        question: "Who was Alexander the Great's father?",
        answers: [
          { text: "Leonidas I", correct: false },
          { text: "Philip II", correct: true },
          { text: "Aristotle", correct: false },
          { text: "Archimedes", correct: false }
         
        ]
      },
      { //6
        question: "Which of the following did Alexander the Great NOT conquer?",
        answers: [
          { text: "Persia", correct: false },
          { text: "Egypt", correct: false },
          { text: "Babylon", correct: false },
          { text: "India", correct: true }
        ]
      },
      { //7
        question: "How old was Alexander the Great when he died?",
        answers: [
          { text: "22", correct: false },
          { text: "32", correct: true },
          { text: "55", correct: false },
          { text: "68", correct: false }
        ]
      },
      { //8
        question: "What was the only city in Phoenicia that opposed Alexander?",
        answers: [
          
          { text: "Thrace", correct: false },
          { text: "Sidon", correct: false },
          { text: "Tyre", correct: true },
          { text: "Susa", correct: false }
        ]
      },
      { //9
        question: "After Alexander the Great died, which of his generals ruled Egypt?",
        answers: [
          { text: "Ptolemy", correct: true },
          { text: "Cassander", correct: false },
          { text: "Seleucus", correct: false },
          { text: "Antigones", correct: false }
        ]
      },
      { //10
        question: "Whom did Alexander publicly murder in a drunken rage?",
        answers: [
          { text: "Amyntas", correct: false },
          { text: "Attalus", correct: false },
          { text: "Cleitus", correct: true },
          { text: "Parmenion", correct: false }
        ]
      },
      { //11
        question: "The Macedonian Phalanx was armed with which weapon?",
        answers: [
          { text: "Sarissa", correct: true },
          { text: "Scimitar", correct: false },
          { text: "Gladius", correct: false },
          { text: "Trident", correct: false }
        ]
      },
      { //12
        question: "Alexander the Great never lost a battle, despite typically being outnumbered.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false },
       
        ]
      },
      { //13
        question: "The city named after Alexander the Great following his Conquest of Egypt:",
        answers: [
          { text: "Andrea", correct: false },
          { text: "Arachosia", correct: false },
          { text: "Alexiopolis", correct: false },
          { text: "Alexandria", correct: true },
       
        ]
      },
      { //14
        question: "Whose death greatly saddened Alexander near the end of his own life?",
        answers: [
          { text: "Hephaestion", correct: true },
          { text: "Antipater", correct: false },
          { text: "Ptolemy", correct: false },
          { text: "Parmenion", correct: false },
       
        ]
      },
      { //15
        question: "Where did Alexander the Great die?",
        answers: [
          { text: "Phoenicia", correct: false },
          { text: "India", correct: false },
          { text: "Macedonia", correct: false },
          { text: "Babylon", correct: true },
       
        ]
      },

     
      
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
            counter++;
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


