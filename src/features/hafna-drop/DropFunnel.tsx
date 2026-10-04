import {SectionTitle} from '../../components/UI';
import {dropData} from '../../data/mockData';
import {formatNumber} from '../../utils/calculator';
export function DropFunnel() {
 return <section className="drop-funnel-panel"><SectionTitle number="01" title="من الفضول إلى فعل قابل للقياس"/><ol className="drop-funnel">{dropData.funnel.map((step,i)=><li key={step.label}><span className="drop-funnel-index" dir="ltr">0{i+1}</span><div style={{width:`${100-i*13}%`}}><strong dir="ltr">{formatNumber(step.count)}</strong><span>{step.label}</span></div></li>)}</ol><p>المشاهدات بداية. استخدام الـPass والعودة يوضحان ما حدث بعدها.</p><small>مثال افتراضي لمجموعة واحدة. استخدام الـPass لا يثبت شراءً إلا بربطه بآلية تحقق مناسبة.</small></section>;
}
