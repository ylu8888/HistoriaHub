const questions = [
    { //1
        question: 'Who was the first Emperor of the Roman Empire?',
        answers: [
            { text: 'Julius Caesar', correct: false},
            { text: 'Augustus', correct: true},
            { text: 'Marcus Aurelius', correct: false},
            { text: 'Romulus', correct: false}
        ]
    },
    { //2
        question: "The period of Roman expansion under Augustus ended after the Battle of Teutoburg Forest when Roman legions where ambushed by:",
        answers: [
          
          { text: "Spartan Warriors", correct: false },
          { text: "Egyptian Forces", correct: false },
          { text: "Germanic Tribes", correct: true },
          { text: "Jewish Tribes", correct: false }
        ]
    },
    { //3
        question: "Which Roman structure commissioned by Vespasian is famous for its gladiator contests and public spectacles?",
        answers: [
          { text: "Pantheon", correct: false },
          { text: "Roman Forum", correct: false },
          { text: "Circus Maximus", correct: false },
          { text: "Colosseum", correct: true }
        ]
    },
    { //4
        question: "Where was Hadrian's Wall built?",
        answers: [
          { text: "Greece", correct: false },
          { text: "Spain", correct: false },
          { text: "Britain", correct: true },
          { text: "Rome", correct: false }
        ]
      },
      { //5
        question: "What were the household troops of the Roman emperors called?",
        answers: [
        { text: "Praetorian Guard", correct: true },
        { text: "Byzantine Guard", correct: false },
        { text: "Domitian Guard", correct: false },
        { text: "Varangrian Guard", correct: false }
        ]
        },
        { //6
            question: "Which city was the capital of both the Byzantine Empire and the Ottoman Empire?",
            answers: [
            
            { text: "Carthage", correct: false },
            { text: "Antioch", correct: false },
            { text: "Ephesus", correct: false },
            { text: "Constantinople", correct: true }
            ]
            },
            { //7
                question: "Which Roman general famously crossed the Rubicon River, leading to a conflict that ultimately ended the Roman Republic?",
                answers: [
                { text: "Gaius Marius", correct: false },
                { text: "Lucius Sulla", correct: false },
                { text: "Julius Caesar", correct: true },
                { text: "Caesar Augustus", correct: false }
                ]
                },
                { //8
                    question: "Which Roman emperor was the first to profess Christianity and issued the Edict of Milan?",
                    answers: [
                    { text: "Severus Alexander", correct: false },
                    { text: "Maximinus Thrax", correct: false },
                    { text: "Pupienus Maximus", correct: false },
                    { text: "Constantine I", correct: true }
                    ]
                    },
                    { //9
                        question: "The Five Good Emperors included Trajan, Hadrian, Antoninus Pius, Marcus Aurelius, and:",
                        answers: [
                        { text: "Claudius", correct: false },
                        { text: "Nerva", correct: true },
                        { text: "Tiberius", correct: false },
                        { text: "Augustus", correct: false }
                        ]
                        },
                        { //10
                            question: "The period of relative peace and stability within the Roman Empire that lasted for about two centuries is known as:",
                            answers: [
                            { text: "Pax Britannica", correct: false },
                            { text: "Pax Augusta", correct: false },
                            { text: "Pax Romana", correct: true },
                            { text: "Pax Sinica", correct: false }
                            ]
                            },
                            { //11
                                question: "Which Roman Emperor wrote about Stoic philosophy in 'Meditations'?",
                                answers: [
                                { text: "Epictetus", correct: false },
                                { text: "Marcus Aurelius", correct: true },
                                { text: "Cicero", correct: false },
                                { text: "Seneca", correct: false }
                                ]
                                },
                                { //12
                                    question: "What battle marked the start of events that led to the fall of the Western Roman Empire?",
                                    answers: [
                                    { text: "Battle of Adrianople", correct: true },
                                    { text: "Battle of Abritus", correct: false },
                                    { text: "Battle of Teutoburg Forest", correct: false },
                                    { text: "Battle of Catalaunian Plain", correct: false }
                                    ]
                                    },
      { //13
  "question": "What year did the Western Roman Empire come to an end after the German chieftain Odoacer deposed Emperor Romulus Augustulus?",
  "answers": [
    { "text": "219 BC", "correct": false },
    { "text": "1,453 CE", "correct": false },
    { "text": "476 CE", "correct": true },
    { "text": "521 CE", "correct": false }
  ]
},

{//14
    "question": "Which emperor introduced the tetarchy, sharing power between 4 rulers, 2 Augusti and 2 Caesars?",
    "answers": [
      { "text": "Romanos II", "correct": false },
      { "text": "Elagabalus", "correct": false },
      { "text": "Diocletian", "correct": true },
      { "text": "Constantine", "correct": false }
    ]
  },
  {//15
    "question": "What year did Constantinople fall to the sieging Ottoman armies under Sultan Mehmed II?",
    "answers": [
      { "text": "1453", "correct": true },
      { "text": "1424", "correct": false },
      { "text": "1394", "correct": false },
      { "text": "1450", "correct": false }
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


