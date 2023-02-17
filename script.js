'use strict'

const arrowIcons = document.querySelectorAll('.arrow-icon');
const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');
let clickedIconsArray=new Array;

for (let i=0; i<arrowIcons.length; i++) {
    arrowIcons[i].addEventListener ('click', function () {
        if(arrowIcons[i]===clickedIconsArray[clickedIconsArray.length-1] && arrowIcons[i].classList.contains('rotate')) {
            onSecondClick(i);
        }
        else {
            hideOtherAnswers(i);
            showAnswers(i); 
            makeQuestionBold(i); 
            rotateArrowIcon(arrowIcons[i]); 
            clickedIconsArray.push(arrowIcons[i]);
        }
    })
}

function showAnswers (i) {
    answers[i].classList.remove('hidden');
}

function hideOtherAnswers(currentAnswerNumber) {
    for (let j=0; j<arrowIcons.length; j++) {
        if(j!==currentAnswerNumber) {
            answers[j].classList.add('hidden');
            arrowIcons[j].classList.remove('rotate');
            questions[j].classList.remove('bold');
        }
    }
}

function rotateArrowIcon (arrowIcon) {
    arrowIcon.classList.add('rotate');
}

function makeQuestionBold (i) {
    questions[i].classList.add('bold');
}

function onSecondClick (i) {
    answers[i].classList.add('hidden');
    arrowIcons[i].classList.remove('rotate');
    questions[i].classList.remove('bold');
}