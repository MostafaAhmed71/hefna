export const mockMetrics = { active: 1240, new: 312, returning: 118, repeatRate: 37.8, regular: 74, atRisk: 23, recovered: 11 };
export const mockCampaign = { targeted: 23, returned: 7, extraPurchases: 7, inactiveDays: 21 };
export const segments = ['عميل جديد', 'عاد للمرة الثانية', 'عميل منتظم', 'VIP', 'معرض للانقطاع', 'منقطع', 'تم استرجاعه'];
export const kpis = [
 ['نسبة تكرار الشراء', 'Repeat Purchase Rate', 'نسبة العملاء الذين اشتروا أكثر من مرة ضمن فترة القياس.'],
 ['نسبة الشراء الثاني', 'Second Purchase Rate', 'كم عميلًا جديدًا عاد لعملية شراء ثانية من المجموعة نفسها؟'],
 ['تكرار الزيارة', 'Visit Frequency', 'متوسط عدد الزيارات لكل عميل خلال فترة محددة.'],
 ['الاحتفاظ بالعملاء', 'Customer Retention', 'نسبة العملاء الذين استمروا بالزيارة بين فترتين.'],
 ['معدل الاسترجاع', 'Win-back Rate', 'نسبة المستهدفين الذين عادوا خلال نافذة الحملة.'],
 ['متوسط قيمة العميل', 'Average Customer Value', 'متوسط مبيعات العميل خلال فترة القياس.'],
 ['مبيعات العملاء العائدين', 'Revenue from Returning Customers', 'قيمة المبيعات الناتجة عن العملاء الذين سبق لهم الشراء.'],
];
export const interventions = [['مكافأة مناسبة', 'Reward'], ['تجربة حسب التفضيل', 'Personalized Experience'], ['تذكير في وقته', 'Reminder'], ['دعوة للعودة', 'Win-back'], ['تقدير العميل المميز', 'VIP Recognition'], ['محطة في رحلة الزيارات', 'Visit Milestone'], ['تذكير بتجديد القهوة', 'Product Replenishment Reminder']];

// Phase 2: separate illustrative cohort. Not connected to the retention mock cohort.
export const dropData = {
 title: 'HAFNA DROP', number: '001', passId: 'HF-D001-0842', availabilityHours: 48,
 funnel: [
  {label:'شاهدوا التجربة',count:2410}, {label:'بدأوا التجربة',count:680},
  {label:'فتحوا الـDROP',count:492}, {label:'استخدموا الـPass',count:163},
  {label:'عادوا في تجربة لاحقة',count:31},
 ], quizCompleted:492,
 nextIdeas: [['مشروب غامض','Mystery Drink'],['قائمة سرية','Secret Menu'],['تحدي جماعي','Team Challenge'],['اكتشاف بمشاركة المجتمع','Community Unlock']],
 objectives: [
  ['جذب زيارة جديدة','الزيارات والتحول إلى شراء','Visits / Purchase Conversion'],
  ['زيادة العودة','معدل تكرار الزيارة','Repeat Visit Rate'],
  ['زيادة متوسط الطلب','متوسط قيمة الطلب','Average Order Value'],
  ['تجربة منتج جديد','تجربة، ثم شراء، ثم عودة','Trial → Purchase → Repeat'],
  ['زيادة الانتشار','مشاركة وزيارات منسوبة للتجربة عند إمكانية القياس','Participation / Shares / Attributed Visits'],
 ],
};
export const tasteQuestions: import('../types').TasteQuestion[] = [
 {key:'mood',title:'مزاجك اليوم؟',options:[{value:'calm',label:'هادئ',symbol:'○'},{value:'energy',label:'أحتاج طاقة',symbol:'✦'}]},
 {key:'temperature',title:'اختيارك؟',options:[{value:'cold',label:'بارد',symbol:'◇'},{value:'hot',label:'ساخن',symbol:'≈'}]},
 {key:'flavor',title:'الطعم؟',options:[{value:'sweet',label:'حلو',symbol:'+'},{value:'balanced',label:'متوازن',symbol:'='},{value:'strong',label:'قوي',symbol:'✦'}]},
 {key:'exploration',title:'تحب؟',options:[{value:'classic',label:'الاختيارات الكلاسيكية',symbol:'○'},{value:'different',label:'أجرب شيئًا مختلفًا',symbol:'✧'}]},
];
export const dropProducts = {
 midnight: {name:'MIDNIGHT 01',description:'اختيار جريء ومتوازن لمحبي التجارب المختلفة.'},
 horizon: {name:'HORIZON 01',description:'تصور هادئ بلمسة مختلفة لمحبي الاكتشاف.'},
 signature: {name:'SIGNATURE 01',description:'اختيار دافئ مستوحى من الطابع الكلاسيكي.'},
 daylight: {name:'DAYLIGHT 01',description:'تصور بارد لمحبي الاختيارات الكلاسيكية.'},
};
