import {useState} from 'react';
import {Button, Modal} from '../components/UI';
import {brand} from '../config/brand';
import {DropEntry} from '../features/hafna-drop/DropEntry';

export function Hook({onStart,onDrop,onBusiness}: {onStart:()=>void;onDrop:()=>void;onBusiness:()=>void}) {
 const [info,setInfo]=useState(false);
 return <section className="experience-hook page-enter" aria-labelledby="experience-title">
  <div className="experience-intro">
   <span className="experience-caption">تجربة قصيرة · حوالي 90 ثانية</span>
   <h1 id="experience-title">{brand.businessName}</h1>
   <span className="experience-credit" dir="ltr">× NEXORA</span>
   <p className="experience-subtitle">تصور تجربة نمو تفاعلية</p>
   <div className="experience-thread" aria-hidden="true"><span/>فضول يفتح فرصة<span/></div>
  </div>
  <DropEntry onOpen={onDrop}/>
  <div className="experience-alternatives">
   <button className="text-button" onClick={onBusiness}>منظور النشاط <span aria-hidden="true">↗</span></button>
   <button className="text-button" onClick={onStart}>جرّب التجربة كعميل</button>
   <button className="text-button" onClick={()=>setInfo(true)}>كيف تعمل الفكرة؟</button>
  </div>
  <p className="experience-disclaimer">هذا تصور تجريبي مستقل أعدته NEXORA لأغراض العرض، ولا يمثل نظامًا أو عرضًا معتمدًا حاليًا من {brand.businessName}. الاتجاه البصري للتصور فقط، وليس هوية رسمية للنشاط.</p>
  {info?<Modal title="تجربة مختلفة. ونتيجة قابلة للقياس." onClose={()=>setInfo(false)}>
   <ol className="how-list"><li>اكتشف اختيارك وافتح بطاقة تجربة افتراضية.</li><li>شاهد كيف يمكن قياس التحول إلى زيارة وشراء.</li><li>تابع العلاقة: من عاد؟ ومن يحتاج اهتمامًا؟</li></ol>
   <p>كل الأرقام افتراضية. نبدأ بفرصة محتملة، ثم نتحقق من أهميتها قبل تصميم الحل.</p>
   <Button onClick={onDrop}>اكتشف التجربة</Button>
   <button className="text-button" onClick={onStart}>جرّب التجربة كعميل</button>
  </Modal>:null}
 </section>;
}
