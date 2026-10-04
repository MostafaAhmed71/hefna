import {Button,DemoLabel} from '../../components/UI';
import './entry.css';
import {brand} from '../../config/brand';
export function DropEntry({onOpen}: {onOpen:()=>void}) {
 return <section className="drop-entry" aria-labelledby="drop-entry-title"><div className="drop-entry-number" dir="ltr">DROP<br/><b>#001</b></div><div className="drop-entry-copy"><DemoLabel>فرصة نمو محتملة · تصور تجريبي</DemoLabel><h2 id="drop-entry-title"><bdi>DROP #001</bdi> وصل {brand.businessName}.</h2><p>منتج أو تجربة لا تظهر في القائمة المعتادة.<br/>هل تريد اكتشاف اختيار {brand.businessName} لك؟</p><small>تجربة توضيحية فقط — لا تمثل عرضًا حاليًا من {brand.businessName}.</small></div><Button onClick={onOpen}>اكتشف الـDROP</Button></section>;
}
