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

  let nextDifficulty;
  if (lastAnswer === lastQuestion?.correctAnswer) {
    // 정답인 경우, 다음 문제는 약간 더 어려운 문제로
    nextDifficulty = Math.min((lastQuestion?.difficulty || 1) + 1, 5); // 난이도 5가 최대값
  } else {
    // 오답인 경우, 다음 문제는 약간 더 쉬운 문제로
    nextDifficulty = Math.max((lastQuestion?.difficulty || 3) - 1, 1); // 난이도 1이 최소값
  }

  // 남아 있는 문제 중에서 사용자가 필요로 하는 난이도와 가장 가까운 문제를 선택
  const candidateQuestions = remainingQuestions.filter(q => q.difficulty === nextDifficulty);

  if (candidateQuestions.length > 0) {
    // 같은 난이도의 문제가 여러 개 있는 경우 랜덤으로 선택
    return candidateQuestions[Math.floor(Math.random() * candidateQuestions.length)];
  }

  // 만약 정확한 난이도에 해당하는 문제가 없다면, 그와 비슷한 난이도의 문제를 선택
  return remainingQuestions.sort(
    (a, b) => Math.abs(a.difficulty - nextDifficulty) - Math.abs(b.difficulty - nextDifficulty)
  )[0];
};

export const isTestComplete = (answeredQuestions: number[]): boolean => {
  return answeredQuestions.length >= 10;
};
