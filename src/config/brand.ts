import type { Reward } from '../types';
import { mockMetrics } from '../data/mockData';
import { contact } from './contact';
// Neutral visual direction. These colors and typography are not an official brand identity.
export const brand = {
 businessName: 'حفنة', businessType: 'محمصة ومقهى', logo: null as string | null,
 primaryColor: '#183c35', secondaryColor: '#d3ee9e', contact, mockMetrics,
 rewardOptions: [
  { id:'size', title:'ترقية حجم المشروب', detail:'مساحة أكبر لقهوتك المفضلة', symbol:'↗' },
  { id:'extra', title:'إضافة مجانية', detail:'لمسة صغيرة تغيّر التجربة', symbol:'+' },
  { id:'special', title:'مكافأة خاصة من حفنة', detail:'تفاصيل يحددها النشاط لاحقًا', symbol:'✦' },
 ] satisfies Reward[],
};
