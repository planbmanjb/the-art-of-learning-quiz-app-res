var questionsArray = [
    //Question 1
    {
        questionText: '1. The entity theory of intelligence, which is the belief that skills are:',
        questionChoices: ['ingrained', 'learned', 'genetic'],
        questionCorrectChoice: 0,
        correctDetails: 'Many people are raised to believe the entity theory of intelligence, which is the belief that skill is an “ingrained and unalterable level of ability.” '
    },

    //Question 2
    {
        questionText: '2. Growth comes at the point of:',
        questionChoices: ['resistance', 'learning', 'deep thought'],
        questionCorrectChoice: 0,
        correctDetails: '“Growth comes at the point of resistance.” Josh attributes his success to a constant state of leaping into the unknown...'
    },

    //Question 3
    {
        questionText: '3. To put it in plain English, he had studied the technical information the numbers, principles, patterns, variations, techniques, and ideas – to a degree sufficient to convert it to:',
        questionChoices: ['coherent patterns', 'intuition', 'deeper techniques and ideas'],
        questionCorrectChoice: 1,
        correctDetails: 'he had studied the technical information... to a degree sufficient to convert it to intuition, or “natural intelligence.”'
    },

    //Question 4
    {
        questionText: '4. Setbacks are a good opportunity to restore the balance between:',
        questionChoices: ['performing and increasing our ability to perform', 'work and rest', 'self and spirit'],
        questionCorrectChoice: 0,
        correctDetails: 'Setbacks are a good opportunity to restore the balance between performing and increasing our ability to perform'
    },

    //Question 5
    {
        questionText: '5. Many high performers have a tendency to go full speed at all times, but top performers are those who have learned to routinely:',
        questionChoices: ['go much faster', 'incorporate recovery', 'slow down'],
        questionCorrectChoice: 1,
        correctDetails: 'Many high performers have a tendency to go full speed at all times, but top performers are those who have learned to routinely incorporate recovery.'
    },

    //Question 6
    {
        questionText: '6. The more you practice cycles of rest, the less you will need :',
        questionChoices: ['to incorporate deep thought', 'to rest', 'to go at full speed'],
        questionCorrectChoice: 1,
        correctDetails: 'The more you practice cycles of rest, the less you will need to take'
    },

    //Question 7
    {
        questionText: '7. For your own routine, the key is to string any four or five activities you     enjoy right before the activity that:',
        questionChoices: ['is very stressful', 'best puts you in a state of serene', 'that is very difficult'],
        questionCorrectChoice: 1,
        correctDetails: 'For your own routine, the key is to string any four or five activities you enjoy right before the activity that best puts you in a state of serene'
    },

    //Question 8
    {
        questionText: '8. To walk a thorny road, you don’t need to pave the entire road ... you just:?',
        questionChoices: ['make sandals', 'need great shoes', 'an alternate pathways'],
        questionCorrectChoice: 0,
        correctDetails: 'To walk a thorny road, you don’t need to pave the entire road; just make sandals.'
    },

    //Question 9
    {
        questionText: '9. First, we cultivate the Soft Zone, we sit with our emotions, observe them, work with them, learn how to let them float away if they are rocking our boat, and:',
        questionChoices: ['how to use them when they are fueling our creativity', 'how to express them, in love', 'how to see them in others'],
        questionCorrectChoice: 0,
        correctDetails: 'First, we cultivate the Soft Zone, we sit with our emotions, observe them, work with them, learn how to let them float away if they are rocking our boat, and how to use them when they are fueling our creativity.'
    },

    //Question 10
    {
        questionText: '10. Which mindset uses language like, “I’m a good writer,” or “I’m bad at math.',
        questionChoices: ['incremental mindset', 'resistive mindset', 'entity mindset'],
        questionCorrectChoice: 2,
        correctDetails: 'Many people are raised to believe the entity theory of intelligence ... They use language like, “I’m a good writer,” or “I’m bad at math.”'
    }
];
var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

// Define functions

function DisplayQuestion() {
    //1 - update the each question text
    $('#question').text(questionsArray[currentQuestionNumber].questionText);
    // reset our answers area
    $('#choices').empty();
    // get the total possible answers
    var totalPossibleAnswers = questionsArray[currentQuestionNumber].questionChoices.length;
    // alert(totalPossibleAnswers);
    //Display answers and associated radio buttons
    for (i = 0; i < totalPossibleAnswers; i++) {
        var NewAnswers = '<input class="option" type="radio" value=' + i + ' name="option">' + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        $('#choices').append(NewAnswers);
    }
    // Show our question counter
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of 10");
    // currentQuestionNumber++;
}

function SelectAnswer() {
    // get answer and record
    $('.quiz-section').on('click', '.option', function () {
        var GotAnswer = ($(this).val());
        // alert(GotAnswer);
        if (GotAnswer == questionsArray[currentQuestionNumber].questionCorrectChoice) {
            alert("You got it RIGHT");

            totalNumberOfCorrectAnswers++;
        } else {
            alert("You got it WRONG");
            var finalResults = $();
        }
        var finalResultsQ = ("Q. " + questionsArray[currentQuestionNumber].questionText + "</br>");
        $('#result_msg').append(finalResultsQ);
        var finalResultsA = ("A. " + questionsArray[currentQuestionNumber].questionChoices[GotAnswer] + "</br>");
        $('#result_msg').append(finalResultsA);
        currentQuestionNumber++;
        // alert (currentQuestionNumber);
        if (currentQuestionNumber == 10) {
            alert("we are done");
            // final result
            ScoreBoard();
        } else {
            // continue the loop
            DisplayQuestion();
        }
    });
}

function ScoreBoard() {
    // Final results
    $('.box1-1').show();
    $('.box1-2').hide();
    $('.box1-3').hide();
    $('.quiz-section').hide();
    $('.result-section').show();
    $('#finalScore').text(totalNumberOfCorrectAnswers + ' / 10');


}
// Applying functions


$(document).ready(function () {
    $('#startButton').click(function () { //start the quiz and show the first question

        $('.box1-2').hide();
        $('.box1-3').hide();
        $('.quiz-section').show();
        //empty the result details container
        $('#result_msg').empty();
        currentQuestionNumber = 0;
        alert("currentQuestionNumber " + currentQuestionNumber);
        DisplayQuestion();
        SelectAnswer();
        $('#tryagain').click(function () {
            $('.box1-1').show();
            $('.box1-2').show();
            $('.box1-3').show();
            $('.quiz-section').hide();
            $('.result-section').hide();
            //reset variables to start quiz again
            currentQuestionNumber = 0;
            totalNumberOfCorrectAnswers = 0;
        });


    });
});
