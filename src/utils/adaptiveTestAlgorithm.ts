import { Question } from '../types/question';

let userAbility = 0.0;

function probabilityCorrect(ability: number, difficulty: number): number {
  return 1 / (1 + Math.exp(-(ability - difficulty)));
}

function updateUserAbility(isCorrect: boolean, difficulty: number): void {
  const learningRate = 0.1;
  const probCorrect = probabilityCorrect(userAbility, difficulty);
  const gradient = isCorrect ? 1 - probCorrect : -probCorrect;
  userAbility += learningRate * gradient;
}

export const selectNextQuestion = (
  allQuestions: Question[],
  answeredQuestions: number[],
  userAnswers: number[],
  ability: number
): Question => {
  const remainingQuestions = allQuestions.filter(q => !answeredQuestions.includes(q.id));

  if (remainingQuestions.length === 0) {
    throw new Error("No remaining questions to select.");
  }

  if (answeredQuestions.length === 0) {
    const mediumDifficultyQuestions = remainingQuestions.filter(q => q.difficulty === 2 || q.difficulty === 3);
    if (mediumDifficultyQuestions.length > 0) {
      return mediumDifficultyQuestions[Math.floor(Math.random() * mediumDifficultyQuestions.length)];
    } else {
      return remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
    }
  }

  const lastAnswer = userAnswers[userAnswers.length - 1];
  const lastQuestion = allQuestions.find(q => q.id === answeredQuestions[answeredQuestions.length - 1]);
  const lastQuestionCorrectAnswerIndex = lastQuestion ? lastQuestion.correctAnswer - 1 : -1;

  const isCorrect = lastAnswer === lastQuestionCorrectAnswerIndex;

  if (lastQuestion) {
    updateUserAbility(isCorrect, lastQuestion.difficulty);
  }

  const recentAnswers = userAnswers.slice(-3);
  const recentQuestions = answeredQuestions.slice(-3).map(id => allQuestions.find(q => q.id === id)!);
  const recentCorrectAnswers = recentQuestions.map(q => q.correctAnswer - 1);
  const recentScore = recentAnswers.reduce((acc, answer, idx) => acc + (answer === recentCorrectAnswers[idx] ? 1 : 0), 0);
  const recentAccuracy = recentAnswers.length > 0 ? recentScore / recentAnswers.length : 0;

  let nextDifficulty;
  if (recentAccuracy >= 0.8) {
    nextDifficulty = Math.min((lastQuestion?.difficulty || 1) + 1, 4);
  } else if (recentAccuracy <= 0.4) {
    nextDifficulty = Math.max((lastQuestion?.difficulty || 3) - 1, 1);
  } else {
    nextDifficulty = lastQuestion?.difficulty || 2;
  }

  const candidateQuestions = remainingQuestions.filter(q => q.difficulty === nextDifficulty);

  if (candidateQuestions.length > 0) {
    return candidateQuestions[Math.floor(Math.random() * candidateQuestions.length)];
  }

  const sortedByDifficulty = remainingQuestions.sort(
    (a, b) => Math.abs(a.difficulty - nextDifficulty) - Math.abs(b.difficulty - nextDifficulty)
  );

  if (sortedByDifficulty.length === 0) {
    throw new Error("No remaining questions to select.");
  }

  return sortedByDifficulty[0];
};

export const isTestComplete = (answeredQuestions: number[]): boolean => {
  return answeredQuestions.length >= 10;
};

