import {lazy,Suspense} from 'react';
const Dashboard=lazy(()=>import('../features/business-dashboard/Dashboard'));
const DropBusinessView=lazy(()=>import('../features/hafna-drop/DropBusinessView'));
export function BusinessView({view,completed,onView,onRetention,onContinue}: {view:'business'|'drop-business';completed:boolean;onView:(view:'business'|'drop-business')=>void;onRetention:()=>void;onContinue:()=>void}) {
 return <><nav className="business-view-tabs" aria-label="أقسام رؤية النشاط"><button aria-pressed={view==='drop-business'} onClick={()=>onView('drop-business')}>قياس الـDROP</button><button aria-pressed={view==='business'} onClick={()=>onView('business')}>قياس العودة والاحتفاظ</button></nav><Suspense fallback={<p role="status" className="loading">جاري فتح رؤية النشاط…</p>}><div hidden={view!=='drop-business'}><DropBusinessView completed={completed} onRetention={onRetention} onDashboard={()=>onView('business')}/></div><div hidden={view!=='business'}><Dashboard onContinue={onContinue}/></div></Suspense></>;
}
