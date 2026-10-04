import {useState} from 'react';
import {brand} from '../../config/brand';
import {SectionTitle,DemoLabel} from '../../components/UI';
import {calculateRoi,formatNumber} from '../../utils/calculator';
import type {RoiInput} from '../../types';
const fields: {key:keyof RoiInput;label:string;max:number;step:number;unit:string}[]=[
 {key:'customers',label:'عدد العملاء الجدد شهريًا',max:100000,step:1,unit:'عميل'},
 {key:'averageOrder',label:'متوسط قيمة الطلب',max:10000,step:1,unit:'ر.س'},
 {key:'currentRate',label:'النسبة الحالية التقريبية لمن يعودون',max:100,step:0.1,unit:'%'},
 {key:'targetRate',label:'النسبة المستهدفة',max:100,step:0.1,unit:'%'},
];
export function RoiCalculator() {
 const [inputs,setInputs]=useState<RoiInput>({customers:300,averageOrder:25,currentRate:25,targetRate:35});
 const result=calculateRoi(inputs);
 return <section className="roi-section" id="roi"><SectionTitle number="04" title="ماذا لو زادت العودة؟" description="غيّر الافتراضات وشاهد الأثر الحسابي المحتمل."/><div className="roi-layout"><div className="roi-inputs">{fields.map(field=><label key={field.key} className="roi-field">{field.label}<div><input aria-label={field.label} type="number" inputMode="decimal" min={0} max={field.max} step={field.step} value={inputs[field.key]} onChange={e=>setInputs({...inputs,[field.key]:Math.min(field.max,Math.max(0,Number(e.target.value)))})}/><span>{field.unit}</span></div></label>)}</div><div className="roi-results" aria-live="polite" aria-atomic="true"><DemoLabel>تقدير توضيحي</DemoLabel><div><span>عمليات شراء إضافية محتملة</span><strong dir="ltr">{formatNumber(result.extraPurchases)}<small> عملية</small></strong></div><div><span>قيمة مبيعات إضافية تقديرية</span><strong dir="ltr">{formatNumber(result.extraRevenue)}<small> ر.س</small></strong></div></div></div><div className="roi-formula"><b>كيف حسبناها؟</b><p>عدد العملاء × الفرق بين نسبتي العودة ÷ 100 = عمليات إضافية، مقربة لأسفل.</p><p dir="rtl"><bdi>{inputs.customers} × ({inputs.targetRate} − {inputs.currentRate}) ÷ 100</bdi> = {result.extraPurchases} عملية · {result.extraPurchases} × {inputs.averageOrder} = {formatNumber(result.extraRevenue)} ر.س</p><p>نفترض عملية إضافية واحدة لكل عميل إضافي يعود. هذه قيمة مبيعات قبل التكاليف، وليست ربحًا.</p>{inputs.targetRate<inputs.currentRate?<p role="status">النسبة المستهدفة أقل من الحالية؛ لا توجد زيادة محتملة وفق هذه الافتراضات.</p>:null}</div><p className="fine-print">هذه تقديرات توضيحية وليست توقعات مضمونة للنتائج. الأرقام افتراضية ولا تخص {brand.businessName}.</p></section>;
}
