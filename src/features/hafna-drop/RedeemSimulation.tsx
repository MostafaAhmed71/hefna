import {useState} from 'react';
import {Button,Eyebrow} from '../../components/UI';
import {NextDropPreview} from './NextDropPreview';
import {SharePreview} from './SharePreview';
export function RedeemSimulation({productName,onBusiness}: {productName:string;onBusiness:()=>void}) {
 const [share,setShare]=useState(false);
 return <section className="redeem-completed page-enter"><div className="redeem-copy"><Eyebrow>تمت محاكاة الزيارة</Eyebrow><span className="unlocked-label" dir="ltr">DROP COMPLETED ✓</span><h1>أكملت تجربة<br/><span dir="ltr">DROP #001</span></h1><p className="lead">ماذا لو كانت هذه بداية علاقة أطول؟</p><p>تجربة مختلفة تجذب العميل. القياس يوضح إن تحولت إلى زيارة وشراء وعودة.</p><div className="redeem-actions"><Button onClick={onBusiness}>شاهد التجربة من ناحية النشاط</Button><Button secondary onClick={()=>setShare(true)}>شارك نتيجتك</Button></div><small>اكتمل السيناريو فقط؛ لم تحدث زيارة أو عملية شراء فعلية.</small></div><NextDropPreview/>{share?<SharePreview productName={productName} onClose={()=>setShare(false)}/>:null}</section>;
}
