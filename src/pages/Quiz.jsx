import React, { useContext, useState } from "react";
import Question1 from "../components/QuizPage/Question1";
import Question2 from "../components/QuizPage/Question2";
import Question3 from "../components/QuizPage/Question3";
import Question4 from "../components/QuizPage/Question4";
import Question5 from "../components/QuizPage/Question5";
import Question6 from "../components/QuizPage/Question6";
import Question7 from "../components/QuizPage/Question7";
import Question8 from "../components/QuizPage/Question8";
import Question9 from "../components/QuizPage/Question9";
import Question10 from "../components/QuizPage/Question10";
import Question11 from "../components/QuizPage/Question11";
import Question12 from "../components/QuizPage/Question12";
import Result from "../components/QuizPage/Result";
import api from "../lib/axios";
import AppContext from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const questions = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
];

const Quiz = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(Array(12).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = async (score) => {
    const newScores = [...scores];
    newScores[currentQuestion] = score;
    setScores(newScores);

    if (currentQuestion < 11) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newScores.reduce(
        (sum, score) => sum + (score || 0),
        0,
      );
      console.log(totalScore);
      await submitScoreToBackend(totalScore);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitScoreToBackend = async (totalScore) => {
    console.log(user);
    const response = await api.post(`user/assign-type/${user.id}`, {
      point: totalScore,
    });
    const userInfo = response.data.data;
    setUser(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  if (showResult) {
    const totalScore = scores.reduce((sum, score) => sum + (score || 0), 0);
    return <Result totalScore={totalScore} />;
  }

  const CurrentQuestionComponent = questions[currentQuestion];

  return user && user.type === "khong" ? (
    <div className="min-h-screen bg-[url(/background.svg)] bg-cover bg-center">
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="relative w-3/4">
          <button
            onClick={handlePrevious}
            className="absolute top-[-50px] left-0 min-w-[150px] rounded-full px-6 py-2 text-xl font-bold text-orange-500 hover:underline"
            disabled={currentQuestion === 0}
          >
            Câu hỏi trước
          </button>
          <div className="rounded-lg bg-yellow-100 p-30 text-center shadow-lg">
            <h2 className="mb-6 text-6xl font-bold text-orange-600">
              CÂU {currentQuestion + 1}
            </h2>
            <CurrentQuestionComponent onAnswer={handleAnswer} />
          </div>
          <button
            onClick={() => handleAnswer(scores[currentQuestion] || 0)}
            className="absolute right-0 bottom-[-50px] flex min-w-[150px] items-center rounded-full bg-orange-500 px-6 py-2 text-xl font-bold text-white hover:bg-orange-600"
            disabled={scores[currentQuestion] === null}
          >
            Tiếp theo &rarr;
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex h-[80vh] flex-col items-center justify-center bg-[url(/background.svg)] bg-cover bg-center">
      <div className="flex flex-col rounded-2xl bg-white/70 p-10 shadow-lg">
        <h2 className="mb-5 text-3xl font-bold">Bạn đã làm quiz rồi</h2>
        <p className="mb-5 text-xl">Vui lòng xem hộ chiếu của bạn</p>
        <button
          onClick={() => navigate("/passport")}
          className="cursor-pointer rounded-3xl bg-[#FF9C33] px-5 py-2 text-xl font-bold text-white transition hover:bg-[#e68a00]"
        >
          Xem hộ chiếu
        </button>
      </div>
    </div>
  );
};

export default Quiz;
