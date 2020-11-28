//import React from 'react';

/*const test = ( { history } ) =>
{
    return(
    <div>
        <h3>test </h3>
    </div>
    );
}*/


import React, { useState } from 'react';

import './test.css';

const Test = ( { history } ) =>
 {
	const questions = [
		{
			questionText: '머리카락 색이 검정에 가깝다',
			answerOptions: [
				{ answerText: '예', isCorrect: true },
				{ answerText: '아니오', isCorrect: false }
			],
		},
		{
			questionText: '피부에 붉은 기가 많다',
			answerOptions: [
				{ answerText: '예', isCorrect: true },
				{ answerText: '아니오', isCorrect: false }
			],
		},
		{
			questionText: '손목 혈관 색이 초록색이다',
			answerOptions: [
				{ answerText: '예', isCorrect: false },
				{ answerText: '아니오', isCorrect: true }
			],
		},
		{
			questionText: '햇볕에 장시간 있으면 피부가 붉어진다',
			answerOptions: [
				{ answerText: '예', isCorrect: true },
				{ answerText: '아니오', isCorrect: false }
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [score_c, setScore_cool] = useState(0);
    const [score_w, setScore_warm] = useState(0);
    var score = '';

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore_cool(score_c + 1);
        }
        else{
            setScore_warm(score_w + 1);
        }
        console.log(isCorrect);
        console.log(score_c);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
        }
        
        if(score_c>score_w){
            score='cool';
        }
        else if(score_c<score_w){
            score='warm';
        }
        else{
            score='restart';
        }
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default Test;