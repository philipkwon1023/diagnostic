import { Question } from '../types/question';

export interface TestRecord {
  questionId: number;
  selectedAnswer: number; // 원본 인덱스(0-based)
  isCorrect: boolean;
  difficulty: number;
  concept: number;
  timeSpent: number;
}

export interface TestState {
  ability: number;
  records: TestRecord[];
}

const INITIAL_ABILITY = 0;
const LEARNING_RATE = 0.35;
const TARGET_QUESTION_COUNT = 10;

// 1PL 확률
export function probabilityCorrect(ability: number, difficulty: number): number {
  return 1 / (1 + Math.exp(-(ability - difficulty)));
}

// 한 문항 반응 후 ability 업데이트
export function updateAbility(
  currentAbility: number,
  isCorrect: boolean,
  difficulty: number
): number {
  const p = probabilityCorrect(currentAbility, difficulty);
  const gradient = isCorrect ? 1 - p : -p;
  return currentAbility + LEARNING_RATE * gradient;
}

export function createInitialTestState(): TestState {
  return {
    ability: INITIAL_ABILITY,
    records: [],
  };
}

// ability에 가장 가까운 목표 난이도 계산
function getTargetDifficultyFromAbility(ability: number): number {
  if (ability < -0.75) return 1;
  if (ability < 0.25) return 2;
  if (ability < 1.25) return 3;
  return 4;
}

// 시간 패널티를 아주 약하게 반영한 최근 성과 점수
function getRecentPerformanceScore(records: TestRecord[], recentCount = 3): number {
  const recent = records.slice(-recentCount);
  if (recent.length === 0) return 0.5;

  const score = recent.reduce((acc, record) => {
    const correctnessScore = record.isCorrect ? 1 : 0;

    // 60초 이하면 거의 패널티 없음, 너무 오래 걸리면 소폭 감점
    const timePenalty = Math.min(record.timeSpent / 120, 0.2);

    return acc + Math.max(correctnessScore - timePenalty, 0);
  }, 0);

  return score / recent.length;
}

// 다음 문제 선택
export function selectNextQuestion(
  allQuestions: Question[],
  answeredQuestionIds: number[],
  state: TestState
): Question {
  const remainingQuestions = allQuestions.filter(
    (q) => !answeredQuestionIds.includes(q.id)
  );

  if (remainingQuestions.length === 0) {
    throw new Error('No remaining questions to select.');
  }

  // 첫 문제: 중간 난이도 우선
  if (state.records.length === 0) {
    const starters = remainingQuestions.filter(
      (q) => q.difficulty === 2 || q.difficulty === 3
    );

    const pool = starters.length > 0 ? starters : remainingQuestions;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const recentPerformance = getRecentPerformanceScore(state.records);
  let targetDifficulty = getTargetDifficultyFromAbility(state.ability);

  // 최근 성과로 미세 조정
  if (recentPerformance >= 0.8) {
    targetDifficulty = Math.min(targetDifficulty + 1, 4);
  } else if (recentPerformance <= 0.3) {
    targetDifficulty = Math.max(targetDifficulty - 1, 1);
  }

  // 1순위: 목표 난이도와 정확히 일치
  let candidates = remainingQuestions.filter(
    (q) => q.difficulty === targetDifficulty
  );

  // 2순위: 목표 난이도와 가장 가까운 문제
  if (candidates.length === 0) {
    const sorted = [...remainingQuestions].sort(
      (a, b) =>
        Math.abs(a.difficulty - targetDifficulty) -
        Math.abs(b.difficulty - targetDifficulty)
    );

    return sorted[0];
  }

  // 3순위: 최근 개념 편중 방지
  const recentConcepts = state.records.slice(-2).map((r) => r.concept);
  const diversified = candidates.filter(
    (q) => !recentConcepts.includes(q.concept)
  );

  if (diversified.length > 0) {
    candidates = diversified;
  }

  // 최종 랜덤 선택
  return candidates[Math.floor(Math.random() * candidates.length)];
}

// 답 제출 후 상태 업데이트
export function processAnswer(
  currentState: TestState,
  question: Question,
  selectedAnswer: number,
  timeSpent: number
): TestState {
  const correctIndex = question.correctAnswer - 1;
  const isCorrect = selectedAnswer === correctIndex;

  const nextAbility = updateAbility(
    currentState.ability,
    isCorrect,
    question.difficulty
  );

  const nextRecord: TestRecord = {
    questionId: question.id,
    selectedAnswer,
    isCorrect,
    difficulty: question.difficulty,
    concept: question.concept,
    timeSpent,
  };

  return {
    ability: nextAbility,
    records: [...currentState.records, nextRecord],
  };
}

export function isTestComplete(answeredQuestions: number[]): boolean {
  return answeredQuestions.length >= TARGET_QUESTION_COUNT;
}
