const questions = [
     
      {
        //1
        question: "Who was the leader of the Committee of Public Safety during the Reign of Terror?",
        answers: [
          { text: "Maximilien Robespierre", correct: true },
          { text: "Napoleon Bonaparte", correct: false },
          { text: "Louis XVI", correct: false },
          { text: "Marie Antoinette", correct: false }
        ]
      },
        
    { //2
        "question": "What infamous phrase did Queen Marie Antoinette say, contributing to her negative reputation?",
         "answers": [
            { "text": "Liberté, égalité, fraternité", "correct": false },
            { "text": "Vive la révolution", "correct": false },
            { "text": "Let them eat cake", "correct": true },
            { "text": "L'État, c'est moi", "correct": false }
        ]
        },
      { //3
        question: "Which factor did not contribute to France’s pre-revolution debt?",
        answers: [
            { text: "The Seven Years’ War", correct: false },
            { text: "Cost of maintaining the army/navy", correct: false },
            { text: "Upkeep at Versailles", correct: false},
            { text: "High tariffs on imported goods", correct: true }
        ]
    },
      { //4
        question: "Which famous prison was stormed by the Parisians on July 14, 1789?",
        answers: [
          { text: "Bastille", correct: true },
          { text: "Versailles", correct: false },
          { text: "Tuileries Palace", correct: false },
          { text: "Louvre", correct: false }
        ]
      },
      { //5
        question: "When members of the Third Estate took an oath not to disband until a new constitution was created:",
        answers: [
         
        { text: "National Assembly", correct: false },
        { text: "National Convention", correct: false },
        { text: "Tennis Court Oath", correct: true },
        { text: "Croquet Court Oath", correct: false },

        ]
        },
    { //6
        "question": "What event took place on the 13 Vendémiaire?",
        "answers": [
          { "text": "The execution of King Louis XVI", "correct": false },
          { "text": "The fall of the Bastille", "correct": false },
          { "text": "The Reign of Terror", "correct": false },
          { "text": "Suppression of a royalist uprising by Napoleon", "correct": true }
        ]
      },
    { //7
        question: "What was the main reason that several thousand women marched on Versailles in October 1789?",
        answers: [
            { text: "Universal suffrage for women", correct: false },
            { text: "An influenza outbreak", correct: false },
            {text: "Bread shortages in Paris", correct: true },
            { text: "Marie-Antoinette’s cake", correct: false }
        ]
    }, //8
    {
        "question": "How were the French aristocracy taxed during the time of Louis XVI?",
        "answers": [
          { "text": "In proportion to landholdings", "correct": false },
          { "text": "In proportion to total net worth", "correct": false },
          { "text": "They were not taxed", "correct": true },
          { "text": "They paid primarily sales taxes", "correct": false }
        ]
      },
      { //9
        "question": "Who was King of France at the start of the French Revolution?",
        "answers": [
          { "text": "Napoleon Bonaparte", "correct": false },
          { "text": "Louis XIV", "correct": false },
          { "text": "King Louis XVI", "correct": true },
          { "text": "King Louis XV", "correct": false }
        ]
      },
      { //10
        "question": "What was the slogan of the French Revolution?",
        "answers": [
          { "text": "Liberté, Égalité, Fraternité", "correct": true },
          { "text": "Vive la Révolution", "correct": false },
          { "text": "Liberté, Égalité, Monarchie", "correct": false },
          { "text": "Revolution is the Solution", "correct": false }
        ]
      },
      { //11
        "question": "Who was the radical journalist and politician assassinated in his bathtub?",
        "answers": [
          { "text": "Jean-Paul Marat", "correct": true },
          { "text": "Maximilien Robespierre", "correct": false },
          { "text": "Napoleon Bonaparte", "correct": false },
          { "text": "Marquis de Lafayette", "correct": false }
        ]
      },
      { //12
        "question": "Maximilien Robespierre and other radical revolutionaries belonged to which political club?",
        "answers": [
          { "text": "The Dominicans", "correct": false },
          { "text": "The Jacobins", "correct": true },
          { "text": "The Brissotins", "correct": false },
          { "text": "The Parisiennes", "correct": false }
        ]
      },
      { //13
        "question": "What intellectual movement gave rise to many revolutionary ideas in 18th-century France?",
        "answers": [
          { "text": "The Renaissance", "correct": false },
          { "text": "The Reformation", "correct": false },
          { "text": "The Industrial Revolution", "correct": false },
          { "text": "The Enlightenment", "correct": true }
        ]
      }, 
      { //14
        "question": "The French revolutionary leader Marquis de Lafayette was famous for his involvement in what other event?",
        "answers": [
          { "text": "The Napoleonic Wars", "correct": false },
          { "text": "The American Revolution", "correct": true },
          { "text": "The English Civil War", "correct": false },
          { "text": "St Bartholomew Day Massacre", "correct": false }
        ]
      },
      { //15
        "question": "Which of the following was NOT a cause of the French Revolution to 1789?",
        "answers": [
          { "text": "Excessive and unfair taxation", "correct": false },
          { "text": "The brutality of royal troops", "correct": true },
          { "text": "Food shortages and prices", "correct": false },
          { "text": "Aristocratic privilege", "correct": false }
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
                quizTitle.innerHTML = `100%! You got all ${counter}/15 correct, you have mastered this section!`;
    
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


