import {SectionTitle} from '../../components/UI';
import {dropData} from '../../data/mockData';
import {formatNumber} from '../../utils/calculator';
const [views,starts,unlocks,redeems,returns]=dropData.funnel.map(x=>x.count);
const ratio=(a:number,b:number)=>`${formatNumber(a/b*100)}%`;
const metrics=[
 {ar:'معدل مشاهدة التجربة',en:'Drop View Rate',value:'يتطلب إجمالي الظهور',note:`لدينا ${formatNumber(views)} مشاهدة افتراضية؛ المعدل يحتاج عدد مرات ظهور رابط التجربة.`},
 {ar:'إكمال اختيارات الذوق',en:'Quiz Completion Rate',value:ratio(dropData.quizCompleted,starts),note:`${dropData.quizCompleted} أكملوا من ${starts} بدأوا. إكمال الأسئلة يفتح النتيجة تلقائيًا في هذا النموذج.`},
 {ar:'معدل فتح الـDROP',en:'Unlock Rate',value:ratio(unlocks,views),note:`${unlocks} فتحوا من ${formatNumber(views)} شاهدوا. المقام هنا المشاهدون، وليس من بدأوا.`},
 {ar:'معدل استخدام الـPass',en:'Pass Redemption Rate',value:ratio(redeems,unlocks),note:`${redeems} استخدموا من ${unlocks} فتحوا النتيجة، مع افتراض حصولهم جميعًا على Pass في بيانات العرض.`},
 {ar:'التحول إلى زيارة',en:'Visit Conversion',value:'يتطلب تحقق الزيارة',note:'يحتاج تعريفًا للزيارة وربطًا بالتحقق داخل الفرع. لا نساوي فتح النتيجة أو استخدام الرمز بشراء مؤكد.'},
 {ar:'معدل العودة لاحقًا',en:'Repeat Visit Rate',value:ratio(returns,redeems),note:`${returns} عادوا من ${redeems} استخدموا الـPass خلال فترة متابعة افتراضية.`},
];
export function DropBusinessMetrics() {return <section className="drop-metrics-section"><SectionTitle number="02" title="الأهم: ماذا حدث بعد المشاهدة؟"/><div className="drop-kpi-grid">{metrics.map(item=><article key={item.en}><h3>{item.ar}</h3><span lang="en" dir="ltr">{item.en}</span><strong dir={item.value.includes('%')?'ltr':'rtl'}>{item.value}</strong><p>{item.note}</p></article>)}</div><p className="measurement-note">طريقة القياس الفعلية تعتمد على آلية التشغيل والتكامل مع أنظمة النشاط، وموافقة العميل حيث يلزم. هذه المؤشرات لا تُقاس تلقائيًا بمجرد وجود هذه الصفحة.</p></section>;}
