import {useEffect} from 'react';
export function DropAnalysis({onComplete}: {onComplete:()=>void}) {
 useEffect(()=>{const timer=setTimeout(onComplete,1200);return()=>clearTimeout(timer);},[onComplete]);
 return <section className="drop-analysis page-enter" role="status" aria-live="polite"><div className="analysis-symbol" aria-hidden="true">✦</div><h1>نكتشف ذوقك…</h1><p>نرتّب اختياراتك في تصور تجريبي.</p><div className="analysis-track" aria-hidden="true"><span/></div></section>;
}
