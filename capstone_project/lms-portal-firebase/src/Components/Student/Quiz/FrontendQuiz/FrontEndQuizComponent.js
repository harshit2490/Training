import React, { useState } from 'react';
import '../Quizes.css'
import { Link } from 'react-router-dom';

export default function FrontEndQuizComponent() {
    const questions = [
        {
            questionText: 'HTML Stand For ?',
            answerOptions: [
                { answerText: 'Hypermark Language', isCorrect: false },
                { answerText: 'Hypermix Language', isCorrect: false },
                { answerText: 'Hypertext Markup Language', isCorrect: true },
                { answerText: 'Hypertension Language', isCorrect: false },
            ],
        },
        {
            questionText: 'The # symbol specifies that the selector is ?',
            answerOptions: [
                { answerText: 'class', isCorrect: false },
                { answerText: 'tag', isCorrect: false },
                { answerText: 'id', isCorrect: true },
                { answerText: 'first', isCorrect: false },
            ],
        },
        {
            questionText: 'Which HTML5 element defines navigation link?',
            answerOptions: [
                { answerText: 'navigation', isCorrect: false },
                { answerText: 'Links', isCorrect: false },
                { answerText: 'nav', isCorrect: true },
                { answerText: 'navigate', isCorrect: false },
            ],
        },
        {
            questionText: 'Whatis not an HTML element?',
            answerOptions: [
                { answerText: 'section', isCorrect: false },
                { answerText: 'header', isCorrect: false },
                { answerText: 'Blink', isCorrect: true },
                { answerText: 'main', isCorrect: false },
            ],
        },
        {
            questionText: 'Which snippet of CSS is commonly used to center a website horizontally?',
            answerOptions: [
                { answerText: 'site-align:center;', isCorrect: false },
                { answerText: 'margin:center;', isCorrect: false },
                { answerText: 'margin:auto 0;', isCorrect: false },
                { answerText: 'margin:0 auto;', isCorrect: true },
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
                <h3>Category: <span className='text-danger'>FrontEnd Quiz</span></h3>
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