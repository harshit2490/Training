import React, { useState } from 'react';
import '../Quizes.css'
import { Link } from 'react-router-dom';

export default function SoftwareQuizComponent() {
	const questions = [
		{
			questionText: 'Which of the following CLI command can also be used to rename file ?',
			answerOptions: [
				{ answerText: 'rm', isCorrect: false },
				{ answerText: 'mv', isCorrect: true },
				{ answerText: 'rm -r', isCorrect: false },
				{ answerText: 'none of the mentioned', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not CLI command ?',
			answerOptions: [
				{ answerText: 'Delete', isCorrect: true },
				{ answerText: 'rm', isCorrect: false },
				{ answerText: 'clear', isCorrect: false},
				{ answerText: 'none of the mentioned', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a revision control system ?',
			answerOptions: [
				{ answerText: 'Git', isCorrect: true },
				{ answerText: 'NumPy', isCorrect: false },
				{ answerText: 'Slidify', isCorrect: false },
				{ answerText: 'none of the mentioned', isCorrect: false },
			],
		},
		{
			questionText: 'The Markup language used to write Docker configuration files is :',
			answerOptions: [
				{ answerText: 'JSON', isCorrect: false },
				{ answerText: 'YAML', isCorrect: true },
				{ answerText: 'XML', isCorrect: false },
				{ answerText: 'HTML', isCorrect: false },
			],
		},
		{
			questionText: 'The Docker logo is :',
			answerOptions: [
				{ answerText: 'a butler', isCorrect: false },
				{ answerText: 'a sailboat', isCorrect: false },
				{ answerText: 'an Octocat', isCorrect: false},
				{ answerText: 'a whale', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <>
            <div className='d-flex text-center justify-content-center py-2'>
                <h3>Category: <span className='text-danger'>Software Quiz</span></h3>
            </div>
            <section className='d-flex text-center justify-content-center py-4'>
                <div className='quiz-container'>
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
                                    <button id='quiz-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Link to="/student-quizes-view">
                <div className='px-3 py-4 d-flex text-center justify-content-center'>
                    <button className='btn btn-success px-3 py-1 rounded-3'>Back to Quizes</button>
                </div>
            </Link>
        </>
    );
}