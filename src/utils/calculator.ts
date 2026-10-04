import type { RoiInput } from '../types/index.ts';
export function calculateRoi(input: RoiInput) {
 const customers = Math.max(0, Number.isFinite(input.customers) ? Math.floor(input.customers) : 0);
 const order = Math.max(0, Number.isFinite(input.averageOrder) ? input.averageOrder : 0);
 const current = Math.min(100, Math.max(0, Number.isFinite(input.currentRate) ? input.currentRate : 0));
 const target = Math.min(100, Math.max(0, Number.isFinite(input.targetRate) ? input.targetRate : 0));
 const extraPurchases = Math.floor(customers * Math.max(0, target - current) / 100 + 1e-9);
 return { extraPurchases, extraRevenue: extraPurchases * order, improvement: Math.max(0, target-current) };
}
export const formatNumber = (value: number) => new Intl.NumberFormat('en-US', {maximumFractionDigits: 1}).format(value);
