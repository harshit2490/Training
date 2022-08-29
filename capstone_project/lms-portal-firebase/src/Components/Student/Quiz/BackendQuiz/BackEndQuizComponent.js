import React, { useState } from 'react';
import '../Quizes.css'
import { Link } from 'react-router-dom';

export default function BackEndQuizComponent() {
    const questions = [
		{
			questionText: 'What are the three main simple types in typesript ?',
			answerOptions: [
				{ answerText: 'Object, String, Number', isCorrect: false },
				{ answerText: 'Array, Object, Boolean', isCorrect: false },
				{ answerText: 'Object, Array, Symbol', isCorrect: false },
				{ answerText: 'Boolean, Number, String', isCorrect: true },
			],
		},
		{
			questionText: 'What are two types of enums ?',
			answerOptions: [
				{ answerText: 'String and Numbers', isCorrect: true },
				{ answerText: 'Numbers and Boolean', isCorrect: false },
				{ answerText: 'Number and Number Array', isCorrect: false},
				{ answerText: 'String and Boolean', isCorrect: false },
			],
		},
		{
			questionText: 'What is the inherited type for the variable example in const example=[Dylan]?',
			answerOptions: [
				{ answerText: 'string[]', isCorrect: true },
				{ answerText: 'unknown[]', isCorrect: false },
				{ answerText: 'string', isCorrect: false },
				{ answerText: 'any[]', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is the full form of DDL?',
			answerOptions: [
				{ answerText: 'Data defition language', isCorrect: true },
				{ answerText: 'Data derivation language', isCorrect: false },
				{ answerText: 'Dynamic data language', isCorrect: false },
				{ answerText: 'Detailed data language', isCorrect: false },
			],
		},
		{
			questionText: 'What are rows of a relation known as?',
			answerOptions: [
				{ answerText: 'Degree', isCorrect: false },
				{ answerText: 'Entity', isCorrect: false },
				{ answerText: 'Tuple', isCorrect: true },
				{ answerText: 'None', isCorrect: false },
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
                <h3>Category: <span className='text-danger'>BackEnd Quiz</span></h3>
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