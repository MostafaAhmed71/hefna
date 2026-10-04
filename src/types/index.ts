export type Screen = 'hook' | 'drop' | 'drop-business' | 'purchase' | 'reward' | 'return' | 'bridge' | 'business' | 'closing';
export type Reward = { id: string; title: string; detail: string; symbol: string };
export type RoiInput = { customers: number; averageOrder: number; currentRate: number; targetRate: number };
export type DropStage = 'locked' | 'quiz' | 'analysis' | 'result' | 'pass' | 'completed';
export type TasteAnswers = { mood?: string; temperature?: string; flavor?: string; exploration?: string };
export type TasteQuestion = { key: keyof TasteAnswers; title: string; options: {value:string;label:string;symbol:string}[] };
