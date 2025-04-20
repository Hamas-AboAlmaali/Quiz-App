import React from 'react'
import quizCompletedImg from '../assets/quiz-complete.png'
import QUESTION from '../questions'

const Summary = ({ userAnswers }) => {
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  )
  const skippedAnswers = userAnswers.filter(
    (answer) => answer === null
  )

  const correctAnswersPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  )
  const skippedAnswersPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  )
  const wrongAnswersPercentage = 100 - (correctAnswersPercentage + skippedAnswersPercentage)

  return (
    <div id='summary'>
      <img src={quizCompletedImg} />
      <h2>Quiz is Completed!</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{skippedAnswersPercentage}%</span>
          <span className='text'>Answers Skipped</span>
        </p>
        <p>
          <span className='number'>{correctAnswersPercentage}%</span>
          <span className='text'>Answered Correctly</span>
        </p>
        <p>
          <span className='number'>{wrongAnswersPercentage}%</span>
          <span className='text'>Answered Inorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer'

          if (answer === null) {
            cssClass += ' skipped'
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += ' correct'
          } else {
            cssClass += ' wrong'
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? 'No answer selected'}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Summary
