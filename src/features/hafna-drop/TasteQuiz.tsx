import {useEffect,useRef} from 'react';
import {Eyebrow} from '../../components/UI';
import {tasteQuestions} from '../../data/mockData';
import type {DropSession} from './useDropSession';
export function TasteQuiz({session}: {session:DropSession}) {
 const item=tasteQuestions[session.question];
 const heading=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{heading.current?.focus();},[session.question]);
 return <section className="taste-quiz page-enter"><div className="quiz-top"><Eyebrow>مشروبك يختارك</Eyebrow><span className="quiz-count" dir="ltr" aria-label={`السؤال ${session.question+1} من 4`}>{session.question+1} / 4</span></div><div className="quiz-progress" aria-hidden="true">{tasteQuestions.map((q,i)=><span key={q.key} className={i<=session.question?'filled':''}/>)}</div><h1 tabIndex={-1} ref={heading}>{item.title}</h1><p>اختيارك الأول يكفي.</p><div className={`taste-options ${item.options.length===3?'three':''}`} role="group" aria-label={item.title}>{item.options.map(option=><button type="button" className="taste-option" key={option.value} aria-pressed={session.answers[item.key]===option.value} onClick={()=>session.choose(option.value)}><span className="taste-symbol" aria-hidden="true">{option.symbol}</span><strong>{option.label}</strong><span className="taste-choice">{session.answers[item.key]===option.value?'✓ اختيارك السابق':'هذا اختياري'}</span></button>)}</div><div className="quiz-bottom"><button className="text-button" onClick={session.back}>{session.question>0?'السؤال السابق':'العودة'}</button><small>اختيارات تجريبية لا تُحفظ خارج هذه الجلسة.</small></div></section>;
}
