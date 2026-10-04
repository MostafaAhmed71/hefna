export function GrowthLoop() {
 return <section className="growth-loop"><div><h2>كل تجربة تعلّمنا<br/><span>كيف نجعل التالية أفضل.</span></h2><p>نقيس ما حدث، نتعلم منه، ثم نصمم سببًا جديدًا للمشاركة أو العودة.</p></div><ol className="growth-loop-stages" aria-label="دورة نمو توضيحية">{['اكتشاف','تجربة','زيارة','شراء','مشاركة / عودة','تجربة جديدة'].map((label,i)=><li key={label}><span dir="ltr">0{i+1}</span><b>{label}</b></li>)}</ol></section>;
}
