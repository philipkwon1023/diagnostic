import { Question } from '../types/question';

export const selectNextQuestion = (
  allQuestions: Question[],
  answeredQuestions: number[],
  userAnswers: number[]
): Question => {
  const remainingQuestions = allQuestions.filter(q => !answeredQuestions.includes(q.id));
  
  if (answeredQuestions.length === 0) {
    // 첫 번째 문제는 중간 난이도로 시작
    return remainingQuestions.sort((a, b) => b.difficulty - a.difficulty)[Math.floor(remainingQuestions.length / 2)];
  }

  const lastAnswer = userAnswers[userAnswers.length - 1];
  const lastQuestion = allQuestions.find(q => q.id === answeredQuestions[answeredQuestions.length - 1]);

  if (lastAnswer === lastQuestion?.correctAnswer) {
    // 정답인 경우, 더 어려운 문제 선택
    return remainingQuestions.sort((a, b) => b.difficulty - a.difficulty)[0];
  } else {
    // 오답인 경우, 더 쉬운 문제 선택
    return remainingQuestions.sort((a, b) => a.difficulty - b.difficulty)[0];
  }
};

export const isTestComplete = (answeredQuestions: number[]): boolean => {
  return answeredQuestions.length >= 10;
};
