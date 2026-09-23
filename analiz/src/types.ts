export interface AuditFormData {
  fullName: string;
  companyName: string;
  website: string;
  phone: string;
  email: string;
  sector?: string;
}

export interface TestedQuestion {
  id: number;
  question: string;
  intent: string;
  llmOutcome: string;
  isBrandCited: boolean;
  simulatedAnswer: string;
  missingFactor: string;
}

export interface GoodPoint {
  title: string;
  desc: string;
  badge: string;
  impact: string;
}

export interface LimitingFactor {
  title: string;
  desc: string;
  severity: string;
  category: string;
}

export interface PriorityStep {
  stepNumber: number;
  title: string;
  desc: string;
  timeframe: string;
  expectedImpact: string;
  icon: string;
}

export interface EngineScore {
  engine: string;
  score: number;
  cited: boolean;
  status: string;
}

export interface AuditSummary {
  verdictTitle: string;
  coreMessage: string;
  recommendationMessage: string;
  overallScore: number;
  statusLabel: string;
  citationRatio: string;
  entityAuthority: string;
}

export interface HistoricalAuditPoint {
  id: string;
  dateLabel: string;
  timestamp: number;
  overallScore: number;
  chatGptScore: number;
  perplexityScore: number;
  googleAiScore: number;
  status: string;
}

export interface AuditResult {
  summary: AuditSummary;
  engineScores: EngineScore[];
  testedQuestions: TestedQuestion[];
  goodPoints: GoodPoint[];
  limitingFactors: LimitingFactor[];
  prioritySteps: PriorityStep[];
  historicalAudits?: HistoricalAuditPoint[];
}
