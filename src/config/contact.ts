// Replace with the authorized international number, digits only (e.g. country code + mobile).
// The placeholder intentionally disables WhatsApp; no invented or remembered number is used.
export const WHATSAPP_NUMBER = 'WHATSAPP_NUMBER';
export const contact = { whatsappNumber: WHATSAPP_NUMBER, message: 'السلام عليكم، شاهدت تصور حفنة × NEXORA وأرغب في معرفة المزيد عن الفكرة.' };
export function getWhatsAppUrl(): string | null {
 const number = contact.whatsappNumber;
 return /^\d{8,15}$/.test(number) ? `https://wa.me/${number}?text=${encodeURIComponent(contact.message)}` : null;
}
