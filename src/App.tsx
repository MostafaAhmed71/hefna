import {lazy,Suspense,useEffect,useRef,useState} from 'react';
import {Header} from './components/Header';
import {Hook} from './pages/Hook';
import {CustomerExperience} from './features/customer-experience/CustomerExperience';
import {Bridge} from './pages/Bridge';
import {Closing} from './pages/Closing';
import {brand} from './config/brand';
import {useDropSession} from './features/hafna-drop/useDropSession';
import {BusinessView} from './components/BusinessView';
import type {Screen} from './types';
const DropExperience=lazy(()=>import('./features/hafna-drop/DropExperience'));
export default function App() {
 const [screen,setScreen]=useState<Screen>('hook');
 const dropSession=useDropSession();
 const [reward,setReward]=useState<string|null>(null);
 const [version,setVersion]=useState(0);
 const main=useRef<HTMLElement>(null);
 const previous=useRef({screen,version});
 function go(next:Screen){setScreen(next);}
 function reset(){dropSession.reset();setReward(null);setVersion(v=>v+1);setScreen('hook');}
 useEffect(()=>{document.documentElement.style.setProperty('--forest',brand.primaryColor);document.documentElement.style.setProperty('--lime',brand.secondaryColor);},[]);
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});if(previous.current.screen!==screen||previous.current.version!==version)main.current?.focus();previous.current={screen,version};},[screen,version]);
 return <><Header screen={screen} go={go} reset={reset}/><main id="main" ref={main} tabIndex={-1} key={version}>{screen==='hook'?<Hook onStart={()=>go('purchase')} onDrop={()=>go('drop')}/>:screen==='drop'?<Suspense fallback={<p role="status" className="loading">جاري فتح التجربة…</p>}><DropExperience session={dropSession} onBusiness={()=>go('drop-business')}/></Suspense>:['purchase','reward','return'].includes(screen)?<CustomerExperience screen={screen} reward={reward} setReward={setReward} go={go}/>:screen==='bridge'?<Bridge onContinue={()=>go('business')}/>:screen==='business'||screen==='drop-business'?<BusinessView view={screen} completed={dropSession.stage==='completed'} onView={go} onRetention={()=>go('purchase')} onContinue={()=>go('closing')}/>:<Closing onBack={()=>go('business')}/>}</main><footer className="footer"><span>{brand.businessName} × <b dir="ltr">NEXORA</b></span><p>تصور مستقل أُعد لأغراض العرض ولم يتم اعتماده من {brand.businessName}.</p><span>لا بيانات حقيقية · لا إرسال فعلي</span></footer></>;
}
