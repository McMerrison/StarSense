document.addEventListener('DOMContentLoaded', function() {
    var questions = [
      'What date were you born?',
      'What city were you born in?',
      'What is your enneagram?',
      'What is your Myers-Briggs Personality Type?'
    ];

    var enneagramTypes = [
        "Type 1 - The Reformer",
        "Type 2 - The Helper",
        "Type 3 - The Achiever",
        "Type 4 - The Individualist",
        "Type 5 - The Investigator",
        "Type 6 - The Loyalist",
        "Type 7 - The Enthusiast",
        "Type 8 - The Challenger",
        "Type 9 - The Peacemaker"
    ];

    var mbPersonalityTypes = [
        "ISTJ - The Inspector",
        "ISFJ - The Protector",
        "INFJ - The Counselor",
        "INTJ - The Mastermind",
        "ISTP - The Craftsman",
        "ISFP - The Composer",
        "INFP - The Healer",
        "INTP - The Architect",
        "ESTP - The Dynamo",
        "ESFP - The Performer",
        "ENFP - The Champion",
        "ENTP - The Visionary",
        "ESTJ - The Supervisor",
        "ESFJ - The Provider",
        "ENFJ - The Teacher",
        "ENTJ - The Commander"
      ];
    

    var currentQuestionIndex = 0;
    var answers = [];

    var questionContainer = document.getElementById('question-container');
    var questionElement = document.getElementById('question');
    var answerElement = document.getElementById('answer');

    function displayNextQuestion() {
      var answer = answerElement.value.trim();
      if (answer !== '') {
        answers.push(answer);
        answerElement.value = '';
      }

      if (currentQuestionIndex < questions.length) {
        if (currentQuestionIndex == 1) {
            var newInput = changeInputType("input");
            newInput.type = "text";
            answerElement.parentNode.replaceChild(newInput, answerElement);
        }
        if (currentQuestionIndex == 2) {
            var newInput = changeInputType("select");
            newInput = optionBuilder(enneagramTypes, newInput);
            document.getElementById('answer').replaceWith(newInput);
        }
        if (currentQuestionIndex == 3) {
            var newInput = changeInputType("select");
            newInput = optionBuilder(mbPersonalityTypes, newInput);
            document.getElementById('answer').replaceWith(newInput);
        }
        questionElement.innerText = questions[currentQuestionIndex];
        questionContainer.classList.remove('fade-out');
        questionContainer.classList.add('fade-in');
        currentQuestionIndex++;
      } else {
        questionContainer.innerHTML = '<h2>Thank you for answering the questions!</h2><p>Calculating your divine purpose</p><ul>' + answers.map(function(answer) { return '<li>' + answer + '</li>'; }).join('') + '</ul>';
        questionContainer.classList.remove('fade-out');
        questionContainer.classList.add('fade-in');
    }
    }

    function changeInputType(type, format) {
        var newInput = document.createElement(type);
        newInput.id = 'answer';
        newInput.className = 'answer';
        newInput.autofocus = true;
        return newInput;
    }

    function optionBuilder(list, element) {
        for (var i = 0; i < list.length; i++) {
            var option = document.createElement('option');
            option.value = list[i];
            option.text = list[i];
            element.appendChild(option);
        }
        return element;
    }

    document.getElementById('next-btn').addEventListener('click', function() {
      questionContainer.classList.remove('fade-in');
      questionContainer.classList.add('fade-out');
      setTimeout(displayNextQuestion, 1000);
    });

    displayNextQuestion();
  });