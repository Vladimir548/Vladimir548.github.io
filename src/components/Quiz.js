import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
	const [quizState, dispatch] = useContext(QuizContext);

	return (
		<div className="quiz">
			{quizState.showResults && (
				<div className="results">
					<div className="congratulations">Итог</div>
					<div className="results-info">

						<div>
							Вы ответили на {quizState.correctAnswersCount} из &nbsp;
							{quizState.questions.length} вопросов.
						</div>
					</div>
					<div
						onClick={() => dispatch({ type: "RESTART" })}
						className="next-button"
					>
						Начать заново
					</div>
				</div>
			)}
			{!quizState.showResults && (
				<div>
					<div className="score">
						Вопрос {quizState.currentQuestionIndex + 1}/
						{quizState.questions.length}
					</div>
					<Question />
					{quizState.currentAnswer && (
						<div
							onClick={() => dispatch({ type: "NEXT_QUESTION" })}
							className="next-button"
						>
							Следующий вопрос
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Quiz;
