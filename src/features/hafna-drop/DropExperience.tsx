import {useEffect,useRef} from 'react';
import {DropLocked} from './DropLocked';
import {TasteQuiz} from './TasteQuiz';
import {DropAnalysis} from './DropAnalysis';
import {DropResult} from './DropResult';
import {DigitalPass} from './DigitalPass';
import {RedeemSimulation} from './RedeemSimulation';
import type {DropSession} from './useDropSession';
import './drop.css';
export default function DropExperience({session,onBusiness}: {session:DropSession;onBusiness:()=>void}) {
 const container=useRef<HTMLDivElement>(null);
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});const title=container.current?.querySelector('h1');title?.setAttribute('tabindex','-1');title?.focus();},[session.stage]);
 let view;
 switch(session.stage){
  case 'locked':view=<DropLocked onStart={()=>session.setStage('quiz')}/>;break;
  case 'quiz':view=<TasteQuiz session={session}/>;break;
  case 'analysis':view=<DropAnalysis onComplete={()=>session.setStage('result')}/>;break;
  case 'result':view=<DropResult session={session} onPass={()=>session.setStage('pass')}/>;break;
  case 'pass':view=<DigitalPass productName={session.product.name} onRedeem={()=>session.setStage('completed')}/>;break;
  case 'completed':view=<RedeemSimulation productName={session.product.name} onBusiness={onBusiness}/>;break;
 }
 return <div ref={container}>{view}</div>;
}
