import { Question } from '../types/question';

// 사용자 능력 초기화 및 업데이트를 위한 객체
let userAbility = 0.0; // 전반적인 사용자 능력 초기화

// 1PL 모델 기반 정답 확률 계산 함수
function probabilityCorrect(ability: number, difficulty: number): number {
  return 1 / (1 + Math.exp(-(ability - difficulty)));
}

// 사용자 능력 업데이트 함수 (우도 함수를 기반으로 업데이트)
function updateUserAbility(isCorrect: boolean, difficulty: number): void {
  const learningRate = 0.01; // 학습률 설정
  const probCorrect = probabilityCorrect(userAbility, difficulty);
  const gradient = isCorrect ? 1 - probCorrect : -probCorrect;
  userAbility += learningRate * gradient; // 사용자 능력 업데이트

  // 사용자 능력의 범위를 1~4로 제한
  userAbility = Math.max(1, Math.min(userAbility, 4));
}

// 문제 선택 함수
export const selectNextQuestion = (
  allQuestions: Question[],
  answeredQuestions: number[],
  userAnswers: number[],
  ability: number
): Question => {
  const remainingQuestions = allQuestions.filter(q => !answeredQuestions.includes(q.id));

  if (remainingQuestions.length === 0) {
    // 남아 있는 질문이 없으면 예외 처리
    throw new Error("No remaining questions to select.");
  }

  if (answeredQuestions.length === 0) {
    // 첫 번째 문제는 중간 난이도(2 또는 3) 중에서 랜덤 선택
    const mediumDifficultyQuestions = remainingQuestions.filter(q => q.difficulty === 2 || q.difficulty === 3);
    if (mediumDifficultyQuestions.length > 0) {
      return mediumDifficultyQuestions[Math.floor(Math.random() * mediumDifficultyQuestions.length)];
    } else {
      // 만약 중간 난이도 문제가 없으면 남은 문제 중에서 랜덤 선택
      return remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
    }
  }

  const lastAnswer = userAnswers[userAnswers.length - 1];
  const lastQuestion = allQuestions.find(q => q.id === answeredQuestions[answeredQuestions.length - 1]);

  // correctAnswer가 1부터 시작하는 경우 인덱스 보정 필요
  const lastQuestionCorrectAnswerIndex = lastQuestion ? lastQuestion.correctAnswer - 1 : -1;

  // 사용자가 문제를 맞췄는지 여부 계산
  const isCorrect = lastAnswer === lastQuestionCorrectAnswerIndex;

  // 사용자 능력 업데이트
  if (lastQuestion) {
    updateUserAbility(isCorrect, lastQuestion.difficulty);
  }

  // 사용자 능력에 기반하여 난이도가 1~4 범위 내에서 가장 가까운 문제를 선택
  const sortedByDifficulty = remainingQuestions.sort(
    (a, b) => Math.abs(a.difficulty - userAbility) - Math.abs(b.difficulty - userAbility)
  );

  if (sortedByDifficulty.length === 0) {
    // 남은 질문이 하나도 없으면 예외 처리
    throw new Error("No remaining questions to select.");
  }

  return sortedByDifficulty[0];
};

// 테스트 완료 여부 판단 함수
export const isTestComplete = (answeredQuestions: number[]): boolean => {
  return answeredQuestions.length >= 10;
};

  return answeredQuestions.length >= 10;
};
