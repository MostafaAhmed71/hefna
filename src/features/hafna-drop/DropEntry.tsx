import {Button} from '../../components/UI';
import {brand} from '../../config/brand';
import './entry.css';

export function DropEntry({onOpen}: {onOpen:()=>void}) {
 return <div className="drop-entry-stage" aria-labelledby="drop-entry-title">
  <div className="entry-stage-top"><span dir="ltr">DROP 001</span><span className="entry-lock" dir="ltr"><svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true"><path d="M3 6V4a3 3 0 0 1 6 0v2M1 6h10v7H1z" stroke="currentColor" strokeWidth="1.2"/></svg> LOCKED</span></div>
  <div className="entry-art" aria-hidden="true"><span className="entry-number" dir="ltr">001</span><span className="entry-seal">اختيار لم تكتشفه بعد</span></div>
  <div className="entry-stage-copy"><h2 id="drop-entry-title">مش كل اللي في {brand.businessName}<br/>لازم يكون موجود في المنيو.</h2><Button onClick={onOpen}>اكتشف التجربة <span aria-hidden="true">←</span></Button><small>تجربة توضيحية فقط — لا تمثل عرضًا حاليًا من {brand.businessName}.</small></div>
 </div>;
}
