import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions'
import Question from './Question.jsx'
import Summary from './Summary.jsx'

const Quiz = () => {
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const activeQuestionIndex = questionAnswers.length;
  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setQuestionAnswers(prevAnswers => {
      return [...prevAnswers, selectedAnswer]
    })
  }, [])

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null), [handleSelectAnswer]
  )

  if (isQuizCompleted) {
    return <Summary userAnswers={questionAnswers} />
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  )
}

export default Quiz
