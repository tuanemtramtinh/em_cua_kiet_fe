import React, { useState } from 'react';
import Question1 from '../components/QuizPage/Question1';
import Question2 from '../components/QuizPage/Question2';
import Question3 from '../components/QuizPage/Question3';
import Question4 from '../components/QuizPage/Question4';
import Question5 from '../components/QuizPage/Question5';
import Question6 from '../components/QuizPage/Question6';
import Question7 from '../components/QuizPage/Question7';
import Question8 from '../components/QuizPage/Question8';
import Question9 from '../components/QuizPage/Question9';
import Question10 from '../components/QuizPage/Question10';
import Question11 from '../components/QuizPage/Question11';
import Question12 from '../components/QuizPage/Question12';
import Result from '../components/QuizPage/Result';

const questions = [
  Question1, Question2, Question3, Question4,
  Question5, Question6, Question7, Question8,
  Question9, Question10, Question11, Question12
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(Array(12).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score) => {
    const newScores = [...scores];
    newScores[currentQuestion] = score;
    setScores(newScores);

    if (currentQuestion < 11) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newScores.reduce((sum, score) => sum + (score || 0), 0);
      submitScoreToBackend(totalScore);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitScoreToBackend = async (totalScore) => {
    try {
      const response = await fetch('/api/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score: totalScore }),
      });
      if (!response.ok) throw new Error('Failed to submit score');
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  if (showResult) {
    const totalScore = scores.reduce((sum, score) => sum + (score || 0), 0);
    return <Result totalScore={totalScore} />;
  }

  const CurrentQuestionComponent = questions[currentQuestion];

  return (
    <div className="bg-[url(/background.svg)] bg-cover bg-center min-h-screen">
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="relative w-3/4">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-[-50px] font-bold text-orange-500 text-xl px-6 py-2 rounded-full hover:underline min-w-[150px]"
            disabled={currentQuestion === 0}
          >
            Câu hỏi trước
          </button>
          <div className="bg-yellow-100 p-30 rounded-lg shadow-lg text-center">
            <h2 className="text-6xl font-bold mb-6 text-orange-600">CÂU {currentQuestion + 1}</h2>
            <CurrentQuestionComponent onAnswer={handleAnswer} />
          </div>
          <button
            onClick={() => handleAnswer(scores[currentQuestion] || 0)}
            className="absolute right-0 bottom-[-50px] bg-orange-500 text-white font-bold text-xl px-6 py-2 rounded-full hover:bg-orange-600 flex items-center min-w-[150px]"
            disabled={scores[currentQuestion] === null}
          >
            Tiếp theo &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;