
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
	const [score, setPersonal] = useState(0);
	var isTrue = 0;

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore_cool(score_c + 1); //c,c,w,w
			handlePersonalScore(score_c,score_w);
        }
        else{
			setScore_warm(score_w + 1);
			handlePersonalScore(score_c,score_w);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion); //0,0 -> 0,1 -> 1,2 -> 2,3
		} else if(nextQuestion === questions.length){
			handlePersonalScore(score_c,score_w);
		}
		else{
			isTrue = 1;
	
			if(isTrue===1)
			{
				setShowScore(true);
			}
		}
       
	};
	const handlePersonalScore = (score_c,score_w) => {
		if(score_c>score_w){
			setPersonal('cool');
		}
		else if(score_c<score_w){
			setPersonal('warm');
		}
		else{
			setPersonal('restart');
		}
	
	}

	return (
		<div className='app'>
			{showScore ? (
				<span className='score-section'>
					You scored {score_c}{score_w}{score} out of {questions.length}
				</span>
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