const questions = [
   
    { //1
        question: "Which Persian king did the Greeks defeat at the Battle of Marathon?",
        answers: [
          { text: "Cyrus", correct: false },
          { text: "Xerxes", correct: false },
          { text: "Darius", correct: true },
          { text: "Cyaxares", correct: false }
        ]
      },
      { //2
        question: "Who won the Peloponnesian War?",
        answers: [
          { text: "Sparta", correct: true },
          { text: "Athens", correct: false },
          { text: "Corinth", correct: false },
          { text: "Macedon", correct: false }
        ]
      },
      { //3
        "question": 'Which Greek city is often called the "birthplace of democracy"?',
        "answers": [
        { "text": "Delphi", correct: false },
        { "text": "Sparta", correct: false },
        { "text": "Corinth", ccorrect: false },
        { "text": "Athens", correct: true }
        ]
        },
       
            { //4
                "question": "What major civilization that came soon after the Greeks was greatly influenced by Greek culture?",
                "answers": [
                  
                  { "text": "Egyptians", correct: false },
                  { "text": "Assyrians", correct: false },
                  { "text": "Persians", correct: false },
                  { "text": "Romans", correct: true }
                ]
              },
              { //5
                "question": "What was the primary focus of much of the culture of the city of Sparta?",
                "answers": [
                  { "text": "Farming and Fishing", correct: false },
                  { "text": "Athletics and sports", correct: false },
                  { "text": "Art and Education", correct: false },
                  { "text": "War and fighting", correct: true }
                
                ]
              },
              {//6
                "question": "What do we call the last period of Ancient Greece, before they were conquered by the Romans?",
                "answers": [
                  { "text": "Hellenistic Period", correct: true },
                  { "text": "Classical Period", correct: false },
                  { "text": "Archaic Period", correct: false },
                  { "text": "Golden Period", correct: false }
                ]
              },
              {//7
                "question": "The Delian League was formed as a defensive alliance against:",
                "answers": [
                    { "text": "Persia", correct: true },
                  { "text": "Sparta", correct: false },
                  { "text": "Rome", correct: false },
                  { "text": "Troy", correct: false }
                ]
              },
              { //8
                question: "The term Polis in ancient Greece refers to:",
                answers: [
                  { text: "A philosophy school", correct: false },
                  { text: "A city-state", correct: true },
                  { text: "A large farm", correct: false },
                  { text: "A religious temple", correct: false }
                ]
              },
              { //9
                question: "At which famous battle did the outnumbered Greeks defeat the Persian Empire in 490 BC?",
                answers: [
                    { text: "Battle of Thermopylae", correct: false },
                    { text: "Battle of Marathon", correct: true },
                  { text: "Battle of Salamis", correct: false },
                  { text: "Battle of Plataea", correct: false }
                ]
              },
              { //10
                question: "Who was the great Spartan king who led the defense at the pass of Thermopylae against the Persians?",
                answers: [
                
                  { text: "Achilles", correct: false },
                  { text: "Pericles", correct: false },
                  { text: "Leonidas I", correct: true },
                  { text: "Agamemnon", correct: false }
                 
                ]
              },
              { //11
                question: "Which military formation used by Greek hoplites, involved soldiers standing shoulder to shoulder with their shields forming a protective wall?",
                answers: [
                
                  { text: "Legion", correct: false },
                  { text: "Tortoise", correct: false },
                  { text: "Phalanx", correct: true },
                  { text: "Phoenix", correct: false }
                 
                ]
              },
              { //12
                question: "The Ancient Greeks descended from which people?",
                answers: [
                
                  { text: "Mycenaeans", correct: true },
                  { text: "Trojans", correct: false },
                  { text: "Olympians", correct: false },
                  { text: "Grekianos", correct: false }
                 
                ]
              },
              { //13
                question: "During the Trojan War, who is credited with killing Achilles by shooting an arrow into his vulnerable heel?",
                answers: [
                  
                  { text: "Paris", correct: true },
                  { text: "Hector", correct: false },
                  { text: "Odysseus", correct: false },
                  { text: "Priam", correct: false }
                 
                ]
              },
              { //14
                question: "Who wrote the ancient Greek epic poems, The Odyssey and The Iliad?",
                answers: [
                  
                  { text: "Demeter", correct: false },
                  { text: "Homer", correct: true },
                  { text: "Socrates", correct: false },
                  { text: "Plato", correct: false }
                 
                ]
              },
              { //15
                question: "What led to the Colonizing Movement in Greek city-states?",
                answers: [
                  
                  { text: "Overpopulation", correct: false },
                  { text: "Poor agriculture", correct: false },
                  { text: "Spread of culture", correct: false },
                  { text: "All of the above", correct: true }
              
                 
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


