import React from 'react'
import logoImg from '../assets/quiz-logo.png'
import Quiz from './Quiz'

const Header = () => {
  return (
    <header>
      <img src={logoImg} />
      <h1>ReactQuiz</h1>
    </header>
  )
}

export default Header
