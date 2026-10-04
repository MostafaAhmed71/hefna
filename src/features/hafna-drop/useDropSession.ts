import {useState} from 'react';
import {dropProducts,tasteQuestions} from '../../data/mockData';
import type {DropStage,TasteAnswers} from '../../types';
export function selectDrop(answers:TasteAnswers) {
 if(answers.exploration==='different')return answers.mood==='energy'||answers.flavor==='strong'?dropProducts.midnight:dropProducts.horizon;
 return answers.temperature==='hot'?dropProducts.signature:dropProducts.daylight;
}
export function useDropSession() {
 const [stage,setStage]=useState<DropStage>('locked');
 const [answers,setAnswers]=useState<TasteAnswers>({});
 const [question,setQuestion]=useState(0);
 function choose(value:string){const key=tasteQuestions[question].key;setAnswers(a=>({...a,[key]:value}));if(question===tasteQuestions.length-1)setStage('analysis');else setQuestion(q=>q+1);}
 function back(){if(question>0)setQuestion(q=>q-1);else setStage('locked');}
 function reset(){setStage('locked');setAnswers({});setQuestion(0);}
 return {stage,setStage,answers,question,choose,back,reset,product:selectDrop(answers)};
}
export type DropSession = ReturnType<typeof useDropSession>;
