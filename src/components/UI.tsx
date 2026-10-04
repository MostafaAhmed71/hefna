import { useEffect, useRef, type ReactNode } from 'react';
export function Button({children, onClick, secondary = false, disabled = false, className = ''}: {children: ReactNode; onClick?:()=>void; secondary?:boolean; disabled?:boolean; className?:string}) {
 return <button type="button" className={`button ${secondary?'secondary':''} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>;
}
export function Eyebrow({children, light = false}: {children: ReactNode; light?:boolean}) {return <div className={`eyebrow ${light?'light':''}`}><span className="eyebrow-line"/>{children}</div>;}
export function DemoLabel({children = 'تصور تجريبي'}: {children?:ReactNode}) {return <span className="demo-label">{children}</span>;}
export function Modal({title, children, onClose}: {title:string;children:ReactNode;onClose:()=>void}) {
 const ref = useRef<HTMLDialogElement>(null);
 useEffect(()=>{const el=ref.current;el?.showModal();return ()=>el?.close();},[]);
 return <dialog ref={ref} className="modal" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="modal-top"><span className="eyebrow">NEXORA / NEXT STEP</span><button type="button" className="icon-button" aria-label="إغلاق" onClick={onClose}>×</button></div><h2>{title}</h2>{children}</dialog>;
}
export function SectionTitle({number,title,description}: {number:string;title:string;description?:string}) {return <div className="section-title"><span className="section-index">{number}</span><div><h2>{title}</h2>{description?<p>{description}</p>:null}</div></div>;}
