const questions = [
    {
        //1
        question: "Which event marked Napoleon's rise to power and established him as the First Consul of France?",
        answers: [
          { text: "The Reign of Terror", correct: false },
          { text: "Storming of the Bastille", correct: false },
          { text: "Coup d'état of 18 Brumaire", correct: true },
          { text: "The Tennis Court Oath", correct: false }
        ]
      },
    {   
        //2
        question: "Who crowned Napoleon Emperor of France?",
        answers: [
          { text: "Pope Pius II", correct: false},
          { text: "Napoleon", correct: true},
          { text: "Lucien Bonaparte", correct: false },
          { text: "Francis II", correct: false },
        ],
    },   
     
    {
        //3
        question: "With what did Napoleon replace the Holy Roman Empire?",
        answers: [
          { text: "The Cisalpine Republic", correct: false },
          { text: "Continental System", correct: false },
          { text: "Confederation of the Rhine", correct: true },
          { text: "Sacred Greek Satrapy", correct: false }
        ]
      },
    {
        //4
        question: "Where was Napoleon born in?",
        answers: [
          { text: "Italy", correct: false },
          { text: "Greece", correct: false },
          { text: "Spain", correct: false },
          { text: "Corsica", correct: true },
        ],
    },
    {
        //5
        question: "Napoleon's dramatic return to France in 1815, after his escape from Elba, is known by what name?",
        answers: [
          { text: "The Corsican Affair", correct: false },
          { text: "The Restoration", correct: false },
          { text: "The Glorious Revolution", correct: false },
          { text: "The Hundred Days", correct: true }
        ]
      },
      {
        //6
        question: "Which country was not invaded by Napoleon?",
        answers: [
          { text: "Austria", correct: false },
          { text: "Russia", correct: false },
          { text: "Spain", correct: false },
          { text: "Sweden", correct: true },
        ],
      },
      {
        //7
        question: "Which famous battle marked Napoleon's final defeat and exile?",
        answers: [
          { text: "Battle of Austerlitz", correct: false },
          { text: "Battle of Waterloo", correct: true },
          { text: "Battle of Trafalgar", correct: false },
          { text: "Battle of Borodino", correct: false }
        ]
      },
      {
        //8
        question: "Where was Napoleon exiled the second time?",
        answers: [
          { text: "Elba", correct: false },
          { text: "St. Helena", correct: true },
          { text: "Corsica", correct: false },
          { text: "Isle of Man", correct: false },
        ],
      },
      {
        //9
        question: "Which battle is considered Napoleon's masterpiece?",
        answers: [
          { text: "Battle of Borodino", correct: false },
          { text: "Battle of Austerlitz", correct: true },
          { text: "Battle of Marengo", correct: false },
          { text: "Battle of Leipzig", correct: false },
        ],
      },
      {
        //10
        question: "Who was the leader of the Committee of Public Safety during the Reign of Terror?",
        answers: [
          { text: "Maximilien Robespierre", correct: true },
          { text: "Napoleon Bonaparte", correct: false },
          { text: "Louis XVI", correct: false },
          { text: "Marie Antoinette", correct: false }
        ]
      },
      {
        //11
        question: "In the Russian campaign of 1812, Napoleon was faced with which Russian tactic?",
        answers: [
          { text: "Divide-and-conquer", correct: false },
          { text: "Guerilla warfare", correct: false },
          { text: "Scorched-earth policy", correct: true },
          { text: "Castling", correct: false }
        ]
      },
      { //12
        question: "Who was Napoleon's first wife?",
        answers: [
          { text: "Marie Antoinette", correct: false },
          { text: "Catherine the Great", correct: false },
          { text: "Josephine de Beauharnais", correct: true },
          { text: "Eugenie de Montijo", correct: false }
        ]
      },
      {
        //13
        question: "Who led the British forces in the Peninsular War?",
        answers: [
          { text: "Joseph McCarthy", correct: false },
          { text: "Horatio Nelson", correct: false },
          { text: "Gebhard Blucher", correct: false },
          { text: "The Duke of Wellington", correct: true }
        ]
      },
      { //14
        question: "Of what did Napoleon die?",
        answers: [
          { text: "Stomach cancer", correct: true },
          { text: "Heart attack", correct: false },
          { text: "Pneumonia", correct: false },
          { text: "Yellow fever", correct: false }
        ]
      },
        //15
      {
        question: "Which famous prison was stormed by the Parisians on July 14, 1789?",
        answers: [
          { text: "Bastille", correct: true },
          { text: "Versailles", correct: false },
          { text: "Tuileries Palace", correct: false },
          { text: "Louvre", correct: false }
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
            else if(counter < 11){
                quizTitle.innerHTML = `You got ${counter}/15 correct, review this section again!!`;
               
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


